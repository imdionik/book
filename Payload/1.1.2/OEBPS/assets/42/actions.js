pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 13964;
pubcoder.page.title = pubcoder.page.title || "42";
pubcoder.page.number = pubcoder.page.number || 42;
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
var obj13969_onTap_activeActionGroupIndex = -1;
var obj13969_onTap_runningActionsCount = 0;
var obj13969_onTap_loopCount = 0;
var obj13972_onTap_activeActionGroupIndex = -1;
var obj13972_onTap_runningActionsCount = 0;
var obj13972_onTap_loopCount = 0;
var obj13979_onTap_activeActionGroupIndex = -1;
var obj13979_onTap_runningActionsCount = 0;
var obj13979_onTap_loopCount = 0;
var obj13982_onTap_activeActionGroupIndex = -1;
var obj13982_onTap_runningActionsCount = 0;
var obj13982_onTap_loopCount = 0;
var obj13988_onTap_activeActionGroupIndex = -1;
var obj13988_onTap_runningActionsCount = 0;
var obj13988_onTap_loopCount = 0;
var obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13998_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13998_SCEventCounterReachedTargetValue_loopCount = 0;
var obj14966_onTap_activeActionGroupIndex = -1;
var obj14966_onTap_runningActionsCount = 0;
var obj14966_onTap_loopCount = 0;
var obj14980_onTap_activeActionGroupIndex = -1;
var obj14980_onTap_runningActionsCount = 0;
var obj14980_onTap_loopCount = 0;
var obj14994_onTap_activeActionGroupIndex = -1;
var obj14994_onTap_runningActionsCount = 0;
var obj14994_onTap_loopCount = 0;
var obj15008_onTap_activeActionGroupIndex = -1;
var obj15008_onTap_runningActionsCount = 0;
var obj15008_onTap_loopCount = 0;
var obj15047_SCEventRun_activeActionGroupIndex = -1;
var obj15047_SCEventRun_runningActionsCount = 0;
var obj15047_SCEventRun_loopCount = 0;
var obj15052_SCEventRun_activeActionGroupIndex = -1;
var obj15052_SCEventRun_runningActionsCount = 0;
var obj15052_SCEventRun_loopCount = 0;
var obj15101_onTap_activeActionGroupIndex = -1;
var obj15101_onTap_runningActionsCount = 0;
var obj15101_onTap_loopCount = 0;
var obj15089_onTap_activeActionGroupIndex = -1;
var obj15089_onTap_runningActionsCount = 0;
var obj15089_onTap_loopCount = 0;
var obj15077_onTap_activeActionGroupIndex = -1;
var obj15077_onTap_runningActionsCount = 0;
var obj15077_onTap_loopCount = 0;
var obj15069_onTap_activeActionGroupIndex = -1;
var obj15069_onTap_runningActionsCount = 0;
var obj15069_onTap_loopCount = 0;
var obj15058_SCEventRun_activeActionGroupIndex = -1;
var obj15058_SCEventRun_runningActionsCount = 0;
var obj15058_SCEventRun_loopCount = 0;
var obj15219_onTap_activeActionGroupIndex = -1;
var obj15219_onTap_runningActionsCount = 0;
var obj15219_onTap_loopCount = 0;
var obj15207_onTap_activeActionGroupIndex = -1;
var obj15207_onTap_runningActionsCount = 0;
var obj15207_onTap_loopCount = 0;
var obj15195_onTap_activeActionGroupIndex = -1;
var obj15195_onTap_runningActionsCount = 0;
var obj15195_onTap_loopCount = 0;
var obj15187_onTap_activeActionGroupIndex = -1;
var obj15187_onTap_runningActionsCount = 0;
var obj15187_onTap_loopCount = 0;
var obj15182_SCEventRun_activeActionGroupIndex = -1;
var obj15182_SCEventRun_runningActionsCount = 0;
var obj15182_SCEventRun_loopCount = 0;
var obj15284_onTap_activeActionGroupIndex = -1;
var obj15284_onTap_runningActionsCount = 0;
var obj15284_onTap_loopCount = 0;
var obj15272_onTap_activeActionGroupIndex = -1;
var obj15272_onTap_runningActionsCount = 0;
var obj15272_onTap_loopCount = 0;
var obj15260_onTap_activeActionGroupIndex = -1;
var obj15260_onTap_runningActionsCount = 0;
var obj15260_onTap_loopCount = 0;
var obj15252_onTap_activeActionGroupIndex = -1;
var obj15252_onTap_runningActionsCount = 0;
var obj15252_onTap_loopCount = 0;
var obj15247_SCEventRun_activeActionGroupIndex = -1;
var obj15247_SCEventRun_runningActionsCount = 0;
var obj15247_SCEventRun_loopCount = 0;
var obj15351_onTap_activeActionGroupIndex = -1;
var obj15351_onTap_runningActionsCount = 0;
var obj15351_onTap_loopCount = 0;
var obj15337_onTap_activeActionGroupIndex = -1;
var obj15337_onTap_runningActionsCount = 0;
var obj15337_onTap_loopCount = 0;
var obj15327_onTap_activeActionGroupIndex = -1;
var obj15327_onTap_runningActionsCount = 0;
var obj15327_onTap_loopCount = 0;
var obj15319_onTap_activeActionGroupIndex = -1;
var obj15319_onTap_runningActionsCount = 0;
var obj15319_onTap_loopCount = 0;
var obj15314_SCEventRun_activeActionGroupIndex = -1;
var obj15314_SCEventRun_runningActionsCount = 0;
var obj15314_SCEventRun_loopCount = 0;
var obj15408_onTap_activeActionGroupIndex = -1;
var obj15408_onTap_runningActionsCount = 0;
var obj15408_onTap_loopCount = 0;
var obj15396_onTap_activeActionGroupIndex = -1;
var obj15396_onTap_runningActionsCount = 0;
var obj15396_onTap_loopCount = 0;
var obj15384_onTap_activeActionGroupIndex = -1;
var obj15384_onTap_runningActionsCount = 0;
var obj15384_onTap_loopCount = 0;
var obj15376_onTap_activeActionGroupIndex = -1;
var obj15376_onTap_runningActionsCount = 0;
var obj15376_onTap_loopCount = 0;
var obj15371_SCEventRun_activeActionGroupIndex = -1;
var obj15371_SCEventRun_runningActionsCount = 0;
var obj15371_SCEventRun_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj13998_counterValue = 0;
var obj13998_counterTargetValue = 6;
var obj13998_counterCanExceedTargetValue = false;

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
		
obj13969_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13969_onTap_activeActionGroupIndex = -1;
		$("#obj13969").trigger("obj13969_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13969) {
				console.warn("de-queueing event obj13969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13969_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13971();
function goToPage_13971() {
	window.obj13969_onTap_runningActionsCount = obj13969_onTap_runningActionsCount + 1;

	$("#anchor583")[0].click();
	window.obj13969_onTap_runningActionsCount = window.obj13969_onTap_runningActionsCount - 1;

if (window.obj13969_onTap_runningActionsCount < 0) {
	window.obj13969_onTap_runningActionsCount = 0;
} else if (window.obj13969_onTap_runningActionsCount == 0) {
	obj13969_onTap_actionGroup1();
}
}










































};
obj13969_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13969_onTap_activeActionGroupIndex = -1;
		$("#obj13969").trigger("obj13969_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13969) {
				console.warn("de-queueing event obj13969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13969_onTap_activeActionGroupIndex = 1;
	











































};
obj13972_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13972_onTap_activeActionGroupIndex = -1;
		$("#obj13972").trigger("obj13972_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13972) {
				console.warn("de-queueing event obj13972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13972_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13974();
function goToPage_13974() {
	window.obj13972_onTap_runningActionsCount = obj13972_onTap_runningActionsCount + 1;

	$("#anchor584")[0].click();
	window.obj13972_onTap_runningActionsCount = window.obj13972_onTap_runningActionsCount - 1;

if (window.obj13972_onTap_runningActionsCount < 0) {
	window.obj13972_onTap_runningActionsCount = 0;
} else if (window.obj13972_onTap_runningActionsCount == 0) {
	obj13972_onTap_actionGroup1();
}
}










































};
obj13972_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13972_onTap_activeActionGroupIndex = -1;
		$("#obj13972").trigger("obj13972_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13972) {
				console.warn("de-queueing event obj13972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13972_onTap_activeActionGroupIndex = 1;
	











































};
obj13979_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13979_onTap_activeActionGroupIndex = -1;
		$("#obj13979").trigger("obj13979_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13979) {
				console.warn("de-queueing event obj13979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13979_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13981();
function goToPage_13981() {
	window.obj13979_onTap_runningActionsCount = obj13979_onTap_runningActionsCount + 1;

	$("#anchor585")[0].click();
	window.obj13979_onTap_runningActionsCount = window.obj13979_onTap_runningActionsCount - 1;

if (window.obj13979_onTap_runningActionsCount < 0) {
	window.obj13979_onTap_runningActionsCount = 0;
} else if (window.obj13979_onTap_runningActionsCount == 0) {
	obj13979_onTap_actionGroup1();
}
}










































};
obj13979_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13979_onTap_activeActionGroupIndex = -1;
		$("#obj13979").trigger("obj13979_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13979) {
				console.warn("de-queueing event obj13979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13979_onTap_activeActionGroupIndex = 1;
	











































};
obj13982_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13982_onTap_activeActionGroupIndex = -1;
		$("#obj13982").trigger("obj13982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13982) {
				console.warn("de-queueing event obj13982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13982_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13988
(function(){
	window.obj13982_onTap_runningActionsCount = obj13982_onTap_runningActionsCount + 1;


	var selector = "#obj13988";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13982_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13982_onTap_activeActionGroupIndex = -1;
		$("#obj13982").trigger("obj13982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13982) {
				console.warn("de-queueing event obj13982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13982_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13982 
hide_13985();
function hide_13985() {
	var selector = "#obj13982";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13982_onTap_runningActionsCount = obj13982_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13985(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13982_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13982_onTap_activeActionGroupIndex = -1;
		$("#obj13982").trigger("obj13982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13982) {
				console.warn("de-queueing event obj13982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13982_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13996
(function(){
	window.obj13982_onTap_runningActionsCount = obj13982_onTap_runningActionsCount + 1;


	var selector = "#obj13996";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13994
(function(){
	window.obj13982_onTap_runningActionsCount = obj13982_onTap_runningActionsCount + 1;


	var selector = "#obj13994";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13982_onTap_runningActionsCount = window.obj13982_onTap_runningActionsCount - 1;

if (window.obj13982_onTap_runningActionsCount < 0) {
	window.obj13982_onTap_runningActionsCount = 0;
} else if (window.obj13982_onTap_runningActionsCount == 0) {
	obj13982_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13982_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13982_onTap_activeActionGroupIndex = -1;
		$("#obj13982").trigger("obj13982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13982) {
				console.warn("de-queueing event obj13982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13982_onTap_activeActionGroupIndex = 3;
	











































};
obj13988_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13988_onTap_activeActionGroupIndex = -1;
		$("#obj13988").trigger("obj13988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13988) {
				console.warn("de-queueing event obj13988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13988_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13982
(function(){
	window.obj13988_onTap_runningActionsCount = obj13988_onTap_runningActionsCount + 1;


	var selector = "#obj13982";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13988_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13988_onTap_activeActionGroupIndex = -1;
		$("#obj13988").trigger("obj13988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13988) {
				console.warn("de-queueing event obj13988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13988_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13988 
hide_13991();
function hide_13991() {
	var selector = "#obj13988";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13988_onTap_runningActionsCount = obj13988_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13991(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13988_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13988_onTap_activeActionGroupIndex = -1;
		$("#obj13988").trigger("obj13988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13988) {
				console.warn("de-queueing event obj13988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13988_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13994 
hide_13992();
function hide_13992() {
	var selector = "#obj13994";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13988_onTap_runningActionsCount = obj13988_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13992(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13996 
hide_13993();
function hide_13993() {
	var selector = "#obj13996";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13988_onTap_runningActionsCount = obj13988_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13993(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13988_onTap_runningActionsCount = window.obj13988_onTap_runningActionsCount - 1;

if (window.obj13988_onTap_runningActionsCount < 0) {
	window.obj13988_onTap_runningActionsCount = 0;
} else if (window.obj13988_onTap_runningActionsCount == 0) {
	obj13988_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13988_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13988_onTap_activeActionGroupIndex = -1;
		$("#obj13988").trigger("obj13988_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13988) {
				console.warn("de-queueing event obj13988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13988_onTap_activeActionGroupIndex = 3;
	











































};
obj13998_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13998").trigger("obj13998_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13998) {
				console.warn("de-queueing event obj13998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_14000();
function wait_14000() {
	window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount = obj13998_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13998_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj13998_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13998").trigger("obj13998_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13998) {
				console.warn("de-queueing event obj13998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_14001();
function goToPage_14001() {
	window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount = obj13998_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor586")[0].click();
	window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13998_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13998_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj13998_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13998").trigger("obj13998_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13998) {
				console.warn("de-queueing event obj13998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj14966_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14966_onTap_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14977 
hide_14979();
function hide_14979() {
	var selector = "#obj14977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_14979(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14980
(function(){
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;


	var selector = "#obj14980";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14994
(function(){
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;


	var selector = "#obj14994";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15008
(function(){
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;


	var selector = "#obj15008";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14968
(function(){
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;


	var selector = "#obj14968";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14974
(function(){
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;


	var selector = "#obj14974";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_14972();
function playAudioFile_14972() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile14972")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14972");
			$("#obj_audio_playSoundFile14972").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
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
				window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15047 
runActionList_15057();
function runActionList_15057() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	$("#obj15047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15058 
runActionList_15123();
function runActionList_15123() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	$("#obj15058").trigger('SCEventRun');
	setTimeout(function() {
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15182 
runActionList_15234();
function runActionList_15234() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	$("#obj15182").trigger('SCEventRun');
	setTimeout(function() {
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15247 
runActionList_15301();
function runActionList_15301() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	$("#obj15247").trigger('SCEventRun');
	setTimeout(function() {
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15314 
runActionList_15370();
function runActionList_15370() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	$("#obj15314").trigger('SCEventRun');
	setTimeout(function() {
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15371 
runActionList_15429();
function runActionList_15429() {
	window.obj14966_onTap_runningActionsCount = obj14966_onTap_runningActionsCount + 1;

	$("#obj15371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj14966_onTap_runningActionsCount = window.obj14966_onTap_runningActionsCount - 1;

if (window.obj14966_onTap_runningActionsCount < 0) {
	window.obj14966_onTap_runningActionsCount = 0;
} else if (window.obj14966_onTap_runningActionsCount == 0) {
	obj14966_onTap_actionGroup1();
}		
	}, 1);
}







};
obj14966_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14966_onTap_activeActionGroupIndex = -1;
		$("#obj14966").trigger("obj14966_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14966) {
				console.warn("de-queueing event obj14966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14966_onTap_activeActionGroupIndex = 1;
	











































};
obj14980_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14980_onTap_activeActionGroupIndex = -1;
		$("#obj14980").trigger("obj14980_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14980) {
				console.warn("de-queueing event obj14980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14980_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14968 
hide_15238();
function hide_15238() {
	var selector = "#obj14968";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15238(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14974 
hide_15240();
function hide_15240() {
	var selector = "#obj14974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15240(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14977
(function(){
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;


	var selector = "#obj14977";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15034
(function(){
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;


	var selector = "#obj15034";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14970
(function(){
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;


	var selector = "#obj14970";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15235();
function playAudioFile_15235() {
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15235")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15235");
			$("#obj_audio_playSoundFile15235").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
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
				window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj14980_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14980_onTap_activeActionGroupIndex = -1;
		$("#obj14980").trigger("obj14980_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14980) {
				console.warn("de-queueing event obj14980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14980_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj13998 
incrementCounter_15241();
function incrementCounter_15241() {
	window.obj14980_onTap_runningActionsCount = obj14980_onTap_runningActionsCount + 1;


	var oldValue = obj13998_counterValue;
	obj13998_counterValue = obj13998_counterValue + 1;
	if (! obj13998_counterCanExceedTargetValue && obj13998_counterValue > obj13998_counterTargetValue) {
		obj13998_counterValue = obj13998_counterTargetValue;
	}

	if (oldValue != obj13998_counterValue) {
		$("#obj13998").trigger('SCEventCounterValueChange');
		$("#obj13998").trigger('SCEventCounterIncrease');
		if (obj13998_counterValue == obj13998_counterTargetValue)
			$("#obj13998").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj14980_onTap_runningActionsCount = window.obj14980_onTap_runningActionsCount - 1;

if (window.obj14980_onTap_runningActionsCount < 0) {
	window.obj14980_onTap_runningActionsCount = 0;
} else if (window.obj14980_onTap_runningActionsCount == 0) {
	obj14980_onTap_actionGroup2();
} }, 1);
}











};
obj14980_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14980_onTap_activeActionGroupIndex = -1;
		$("#obj14980").trigger("obj14980_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14980) {
				console.warn("de-queueing event obj14980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14980_onTap_activeActionGroupIndex = 2;
	











































};
obj14994_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14994_onTap_activeActionGroupIndex = -1;
		$("#obj14994").trigger("obj14994_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14994) {
				console.warn("de-queueing event obj14994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14994_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15044
(function(){
	window.obj14994_onTap_runningActionsCount = obj14994_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15242();
function playAudioFile_15242() {
	window.obj14994_onTap_runningActionsCount = obj14994_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15242")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15242");
			$("#obj_audio_playSoundFile15242").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
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
				window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15243();
function switchText_15243() {
	window.obj14994_onTap_runningActionsCount = obj14994_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14994_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14994_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14994").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14994_content");
			setTimeout(function () {
				window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj14994 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj14994_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14994_onTap_activeActionGroupIndex = -1;
		$("#obj14994").trigger("obj14994_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14994) {
				console.warn("de-queueing event obj14994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14994_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15245();
function wait_15245() {
	window.obj14994_onTap_runningActionsCount = obj14994_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup2();
}
	}, 500);
}


























};
obj14994_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14994_onTap_activeActionGroupIndex = -1;
		$("#obj14994").trigger("obj14994_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14994) {
				console.warn("de-queueing event obj14994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14994_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15246();
function switchText_15246() {
	window.obj14994_onTap_runningActionsCount = obj14994_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj14994_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj14994_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj14994").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj14994_content");
			setTimeout(function () {
				window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj14994 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj14994_onTap_runningActionsCount = window.obj14994_onTap_runningActionsCount - 1;

if (window.obj14994_onTap_runningActionsCount < 0) {
	window.obj14994_onTap_runningActionsCount = 0;
} else if (window.obj14994_onTap_runningActionsCount == 0) {
	obj14994_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj14994_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14994_onTap_activeActionGroupIndex = -1;
		$("#obj14994").trigger("obj14994_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14994) {
				console.warn("de-queueing event obj14994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14994_onTap_activeActionGroupIndex = 3;
	











































};
obj15008_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15008_onTap_activeActionGroupIndex = -1;
		$("#obj15008").trigger("obj15008_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15008) {
				console.warn("de-queueing event obj15008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15008_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15037
(function(){
	window.obj15008_onTap_runningActionsCount = obj15008_onTap_runningActionsCount + 1;


	var selector = "#obj15037";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15039();
function playAudioFile_15039() {
	window.obj15008_onTap_runningActionsCount = obj15008_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15039")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15039");
			$("#obj_audio_playSoundFile15039").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
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
				window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15040();
function switchText_15040() {
	window.obj15008_onTap_runningActionsCount = obj15008_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15008_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15008_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15008").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15008_content");
			setTimeout(function () {
				window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15008 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15008_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15008_onTap_activeActionGroupIndex = -1;
		$("#obj15008").trigger("obj15008_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15008) {
				console.warn("de-queueing event obj15008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15008_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15042();
function wait_15042() {
	window.obj15008_onTap_runningActionsCount = obj15008_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15008_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15008_onTap_activeActionGroupIndex = -1;
		$("#obj15008").trigger("obj15008_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15008) {
				console.warn("de-queueing event obj15008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15008_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15043();
function switchText_15043() {
	window.obj15008_onTap_runningActionsCount = obj15008_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15008_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15008_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15008").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15008_content");
			setTimeout(function () {
				window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15008 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15008_onTap_runningActionsCount = window.obj15008_onTap_runningActionsCount - 1;

if (window.obj15008_onTap_runningActionsCount < 0) {
	window.obj15008_onTap_runningActionsCount = 0;
} else if (window.obj15008_onTap_runningActionsCount == 0) {
	obj15008_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15008_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15008_onTap_activeActionGroupIndex = -1;
		$("#obj15008").trigger("obj15008_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15008) {
				console.warn("de-queueing event obj15008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15008_onTap_activeActionGroupIndex = 3;
	











































};
obj15047_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15047_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15047").trigger("obj15047_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15047) {
				console.warn("de-queueing event obj15047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15047_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15034 
hide_15049();
function hide_15049() {
	var selector = "#obj15034";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15047_SCEventRun_runningActionsCount = obj15047_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15047_SCEventRun_runningActionsCount = window.obj15047_SCEventRun_runningActionsCount - 1;

if (window.obj15047_SCEventRun_runningActionsCount < 0) {
	window.obj15047_SCEventRun_runningActionsCount = 0;
} else if (window.obj15047_SCEventRun_runningActionsCount == 0) {
	obj15047_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15049(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15047_SCEventRun_runningActionsCount = window.obj15047_SCEventRun_runningActionsCount - 1;

if (window.obj15047_SCEventRun_runningActionsCount < 0) {
	window.obj15047_SCEventRun_runningActionsCount = 0;
} else if (window.obj15047_SCEventRun_runningActionsCount == 0) {
	obj15047_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15037 
hide_15050();
function hide_15050() {
	var selector = "#obj15037";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15047_SCEventRun_runningActionsCount = obj15047_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15047_SCEventRun_runningActionsCount = window.obj15047_SCEventRun_runningActionsCount - 1;

if (window.obj15047_SCEventRun_runningActionsCount < 0) {
	window.obj15047_SCEventRun_runningActionsCount = 0;
} else if (window.obj15047_SCEventRun_runningActionsCount == 0) {
	obj15047_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15050(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15047_SCEventRun_runningActionsCount = window.obj15047_SCEventRun_runningActionsCount - 1;

if (window.obj15047_SCEventRun_runningActionsCount < 0) {
	window.obj15047_SCEventRun_runningActionsCount = 0;
} else if (window.obj15047_SCEventRun_runningActionsCount == 0) {
	obj15047_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15044 
hide_15051();
function hide_15051() {
	var selector = "#obj15044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15047_SCEventRun_runningActionsCount = obj15047_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15047_SCEventRun_runningActionsCount = window.obj15047_SCEventRun_runningActionsCount - 1;

if (window.obj15047_SCEventRun_runningActionsCount < 0) {
	window.obj15047_SCEventRun_runningActionsCount = 0;
} else if (window.obj15047_SCEventRun_runningActionsCount == 0) {
	obj15047_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15051(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15047_SCEventRun_runningActionsCount = window.obj15047_SCEventRun_runningActionsCount - 1;

if (window.obj15047_SCEventRun_runningActionsCount < 0) {
	window.obj15047_SCEventRun_runningActionsCount = 0;
} else if (window.obj15047_SCEventRun_runningActionsCount == 0) {
	obj15047_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15047_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15047_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15047").trigger("obj15047_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15047) {
				console.warn("de-queueing event obj15047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15047_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15052_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15052_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15052").trigger("obj15052_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15052) {
				console.warn("de-queueing event obj15052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15052_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14980 
hide_15054();
function hide_15054() {
	var selector = "#obj14980";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15052_SCEventRun_runningActionsCount = obj15052_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15052_SCEventRun_runningActionsCount = window.obj15052_SCEventRun_runningActionsCount - 1;

if (window.obj15052_SCEventRun_runningActionsCount < 0) {
	window.obj15052_SCEventRun_runningActionsCount = 0;
} else if (window.obj15052_SCEventRun_runningActionsCount == 0) {
	obj15052_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15054(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15052_SCEventRun_runningActionsCount = window.obj15052_SCEventRun_runningActionsCount - 1;

if (window.obj15052_SCEventRun_runningActionsCount < 0) {
	window.obj15052_SCEventRun_runningActionsCount = 0;
} else if (window.obj15052_SCEventRun_runningActionsCount == 0) {
	obj15052_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14994 
hide_15055();
function hide_15055() {
	var selector = "#obj14994";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15052_SCEventRun_runningActionsCount = obj15052_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15052_SCEventRun_runningActionsCount = window.obj15052_SCEventRun_runningActionsCount - 1;

if (window.obj15052_SCEventRun_runningActionsCount < 0) {
	window.obj15052_SCEventRun_runningActionsCount = 0;
} else if (window.obj15052_SCEventRun_runningActionsCount == 0) {
	obj15052_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15055(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15052_SCEventRun_runningActionsCount = window.obj15052_SCEventRun_runningActionsCount - 1;

if (window.obj15052_SCEventRun_runningActionsCount < 0) {
	window.obj15052_SCEventRun_runningActionsCount = 0;
} else if (window.obj15052_SCEventRun_runningActionsCount == 0) {
	obj15052_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15008 
hide_15056();
function hide_15056() {
	var selector = "#obj15008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15052_SCEventRun_runningActionsCount = obj15052_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15052_SCEventRun_runningActionsCount = window.obj15052_SCEventRun_runningActionsCount - 1;

if (window.obj15052_SCEventRun_runningActionsCount < 0) {
	window.obj15052_SCEventRun_runningActionsCount = 0;
} else if (window.obj15052_SCEventRun_runningActionsCount == 0) {
	obj15052_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15056(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15052_SCEventRun_runningActionsCount = window.obj15052_SCEventRun_runningActionsCount - 1;

if (window.obj15052_SCEventRun_runningActionsCount < 0) {
	window.obj15052_SCEventRun_runningActionsCount = 0;
} else if (window.obj15052_SCEventRun_runningActionsCount == 0) {
	obj15052_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15052_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15052_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15052").trigger("obj15052_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15052) {
				console.warn("de-queueing event obj15052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15052_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15101_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15101_onTap_activeActionGroupIndex = -1;
		$("#obj15101").trigger("obj15101_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15101) {
				console.warn("de-queueing event obj15101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15101_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14977 
hide_15106();
function hide_15106() {
	var selector = "#obj14977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15106(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15099
(function(){
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;


	var selector = "#obj15099";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14974
(function(){
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;


	var selector = "#obj14974";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15089
(function(){
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;


	var selector = "#obj15089";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15077
(function(){
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;


	var selector = "#obj15077";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15069
(function(){
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;


	var selector = "#obj15069";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15103();
function playAudioFile_15103() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15103")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15103");
			$("#obj_audio_playSoundFile15103").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
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
				window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15047 
runActionList_15107();
function runActionList_15107() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	$("#obj15047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15052 
runActionList_15124();
function runActionList_15124() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	$("#obj15052").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15182 
runActionList_15233();
function runActionList_15233() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	$("#obj15182").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15314 
runActionList_15300();
function runActionList_15300() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	$("#obj15314").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15182 
runActionList_15369();
function runActionList_15369() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	$("#obj15182").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15371 
runActionList_15428();
function runActionList_15428() {
	window.obj15101_onTap_runningActionsCount = obj15101_onTap_runningActionsCount + 1;

	$("#obj15371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15101_onTap_runningActionsCount = window.obj15101_onTap_runningActionsCount - 1;

if (window.obj15101_onTap_runningActionsCount < 0) {
	window.obj15101_onTap_runningActionsCount = 0;
} else if (window.obj15101_onTap_runningActionsCount == 0) {
	obj15101_onTap_actionGroup1();
}		
	}, 1);
}







};
obj15101_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15101_onTap_activeActionGroupIndex = -1;
		$("#obj15101").trigger("obj15101_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15101) {
				console.warn("de-queueing event obj15101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15101_onTap_activeActionGroupIndex = 1;
	











































};
obj15089_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15089_onTap_activeActionGroupIndex = -1;
		$("#obj15089").trigger("obj15089_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15089) {
				console.warn("de-queueing event obj15089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15089_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15099 
hide_15113();
function hide_15113() {
	var selector = "#obj15099";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15113(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14974 
hide_15115();
function hide_15115() {
	var selector = "#obj14974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15115(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14977
(function(){
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;


	var selector = "#obj14977";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15044
(function(){
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15097
(function(){
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;


	var selector = "#obj15097";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15110();
function playAudioFile_15110() {
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15110")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15110");
			$("#obj_audio_playSoundFile15110").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
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
				window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj15089_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15089_onTap_activeActionGroupIndex = -1;
		$("#obj15089").trigger("obj15089_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15089) {
				console.warn("de-queueing event obj15089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15089_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj13998 
incrementCounter_15116();
function incrementCounter_15116() {
	window.obj15089_onTap_runningActionsCount = obj15089_onTap_runningActionsCount + 1;


	var oldValue = obj13998_counterValue;
	obj13998_counterValue = obj13998_counterValue + 1;
	if (! obj13998_counterCanExceedTargetValue && obj13998_counterValue > obj13998_counterTargetValue) {
		obj13998_counterValue = obj13998_counterTargetValue;
	}

	if (oldValue != obj13998_counterValue) {
		$("#obj13998").trigger('SCEventCounterValueChange');
		$("#obj13998").trigger('SCEventCounterIncrease');
		if (obj13998_counterValue == obj13998_counterTargetValue)
			$("#obj13998").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15089_onTap_runningActionsCount = window.obj15089_onTap_runningActionsCount - 1;

if (window.obj15089_onTap_runningActionsCount < 0) {
	window.obj15089_onTap_runningActionsCount = 0;
} else if (window.obj15089_onTap_runningActionsCount == 0) {
	obj15089_onTap_actionGroup2();
} }, 1);
}











};
obj15089_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15089_onTap_activeActionGroupIndex = -1;
		$("#obj15089").trigger("obj15089_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15089) {
				console.warn("de-queueing event obj15089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15089_onTap_activeActionGroupIndex = 2;
	











































};
obj15077_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15077_onTap_activeActionGroupIndex = -1;
		$("#obj15077").trigger("obj15077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15077) {
				console.warn("de-queueing event obj15077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15077_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15044
(function(){
	window.obj15077_onTap_runningActionsCount = obj15077_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15117();
function playAudioFile_15117() {
	window.obj15077_onTap_runningActionsCount = obj15077_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15117")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15117");
			$("#obj_audio_playSoundFile15117").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
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
				window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15118();
function switchText_15118() {
	window.obj15077_onTap_runningActionsCount = obj15077_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15077_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15077_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15077").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15077_content");
			setTimeout(function () {
				window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15077 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15077_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15077_onTap_activeActionGroupIndex = -1;
		$("#obj15077").trigger("obj15077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15077) {
				console.warn("de-queueing event obj15077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15077_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15120();
function wait_15120() {
	window.obj15077_onTap_runningActionsCount = obj15077_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15077_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15077_onTap_activeActionGroupIndex = -1;
		$("#obj15077").trigger("obj15077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15077) {
				console.warn("de-queueing event obj15077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15077_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15121();
function switchText_15121() {
	window.obj15077_onTap_runningActionsCount = obj15077_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15077_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15077_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15077").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15077_content");
			setTimeout(function () {
				window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15077 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15077_onTap_runningActionsCount = window.obj15077_onTap_runningActionsCount - 1;

if (window.obj15077_onTap_runningActionsCount < 0) {
	window.obj15077_onTap_runningActionsCount = 0;
} else if (window.obj15077_onTap_runningActionsCount == 0) {
	obj15077_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15077_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15077_onTap_activeActionGroupIndex = -1;
		$("#obj15077").trigger("obj15077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15077) {
				console.warn("de-queueing event obj15077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15077_onTap_activeActionGroupIndex = 3;
	











































};
obj15069_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15069_onTap_activeActionGroupIndex = -1;
		$("#obj15069").trigger("obj15069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15069) {
				console.warn("de-queueing event obj15069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15069_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15037
(function(){
	window.obj15069_onTap_runningActionsCount = obj15069_onTap_runningActionsCount + 1;


	var selector = "#obj15037";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15071();
function playAudioFile_15071() {
	window.obj15069_onTap_runningActionsCount = obj15069_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15071")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15071");
			$("#obj_audio_playSoundFile15071").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
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
				window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15072();
function switchText_15072() {
	window.obj15069_onTap_runningActionsCount = obj15069_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15069_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15069_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15069").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15069_content");
			setTimeout(function () {
				window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15069 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15069_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15069_onTap_activeActionGroupIndex = -1;
		$("#obj15069").trigger("obj15069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15069) {
				console.warn("de-queueing event obj15069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15069_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15074();
function wait_15074() {
	window.obj15069_onTap_runningActionsCount = obj15069_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15069_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15069_onTap_activeActionGroupIndex = -1;
		$("#obj15069").trigger("obj15069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15069) {
				console.warn("de-queueing event obj15069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15069_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15075();
function switchText_15075() {
	window.obj15069_onTap_runningActionsCount = obj15069_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15069_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15069_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15069").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15069_content");
			setTimeout(function () {
				window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15069 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15069_onTap_runningActionsCount = window.obj15069_onTap_runningActionsCount - 1;

if (window.obj15069_onTap_runningActionsCount < 0) {
	window.obj15069_onTap_runningActionsCount = 0;
} else if (window.obj15069_onTap_runningActionsCount == 0) {
	obj15069_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15069_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15069_onTap_activeActionGroupIndex = -1;
		$("#obj15069").trigger("obj15069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15069) {
				console.warn("de-queueing event obj15069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15069_onTap_activeActionGroupIndex = 3;
	











































};
obj15058_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15058_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15058").trigger("obj15058_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15058) {
				console.warn("de-queueing event obj15058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15058_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15089 
hide_15060();
function hide_15060() {
	var selector = "#obj15089";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15058_SCEventRun_runningActionsCount = obj15058_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15058_SCEventRun_runningActionsCount = window.obj15058_SCEventRun_runningActionsCount - 1;

if (window.obj15058_SCEventRun_runningActionsCount < 0) {
	window.obj15058_SCEventRun_runningActionsCount = 0;
} else if (window.obj15058_SCEventRun_runningActionsCount == 0) {
	obj15058_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15060(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15058_SCEventRun_runningActionsCount = window.obj15058_SCEventRun_runningActionsCount - 1;

if (window.obj15058_SCEventRun_runningActionsCount < 0) {
	window.obj15058_SCEventRun_runningActionsCount = 0;
} else if (window.obj15058_SCEventRun_runningActionsCount == 0) {
	obj15058_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15077 
hide_15061();
function hide_15061() {
	var selector = "#obj15077";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15058_SCEventRun_runningActionsCount = obj15058_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15058_SCEventRun_runningActionsCount = window.obj15058_SCEventRun_runningActionsCount - 1;

if (window.obj15058_SCEventRun_runningActionsCount < 0) {
	window.obj15058_SCEventRun_runningActionsCount = 0;
} else if (window.obj15058_SCEventRun_runningActionsCount == 0) {
	obj15058_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15061(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15058_SCEventRun_runningActionsCount = window.obj15058_SCEventRun_runningActionsCount - 1;

if (window.obj15058_SCEventRun_runningActionsCount < 0) {
	window.obj15058_SCEventRun_runningActionsCount = 0;
} else if (window.obj15058_SCEventRun_runningActionsCount == 0) {
	obj15058_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15069 
hide_15062();
function hide_15062() {
	var selector = "#obj15069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15058_SCEventRun_runningActionsCount = obj15058_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15058_SCEventRun_runningActionsCount = window.obj15058_SCEventRun_runningActionsCount - 1;

if (window.obj15058_SCEventRun_runningActionsCount < 0) {
	window.obj15058_SCEventRun_runningActionsCount = 0;
} else if (window.obj15058_SCEventRun_runningActionsCount == 0) {
	obj15058_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15062(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15058_SCEventRun_runningActionsCount = window.obj15058_SCEventRun_runningActionsCount - 1;

if (window.obj15058_SCEventRun_runningActionsCount < 0) {
	window.obj15058_SCEventRun_runningActionsCount = 0;
} else if (window.obj15058_SCEventRun_runningActionsCount == 0) {
	obj15058_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15058_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15058_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15058").trigger("obj15058_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15058) {
				console.warn("de-queueing event obj15058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15058_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15219_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14977 
hide_15227();
function hide_15227() {
	var selector = "#obj14977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15227(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15207
(function(){
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var selector = "#obj15207";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15195
(function(){
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var selector = "#obj15195";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15187
(function(){
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var selector = "#obj15187";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15217
(function(){
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var selector = "#obj15217";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14974
(function(){
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;


	var selector = "#obj14974";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15221();
function playAudioFile_15221() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15221")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15221");
			$("#obj_audio_playSoundFile15221").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
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
				window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15047 
runActionList_15228();
function runActionList_15228() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	$("#obj15047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15058 
runActionList_15229();
function runActionList_15229() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	$("#obj15058").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15052 
runActionList_15232();
function runActionList_15232() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	$("#obj15052").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15247 
runActionList_15299();
function runActionList_15299() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	$("#obj15247").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15314 
runActionList_15368();
function runActionList_15368() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	$("#obj15314").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15371 
runActionList_15427();
function runActionList_15427() {
	window.obj15219_onTap_runningActionsCount = obj15219_onTap_runningActionsCount + 1;

	$("#obj15371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15219_onTap_runningActionsCount = window.obj15219_onTap_runningActionsCount - 1;

if (window.obj15219_onTap_runningActionsCount < 0) {
	window.obj15219_onTap_runningActionsCount = 0;
} else if (window.obj15219_onTap_runningActionsCount == 0) {
	obj15219_onTap_actionGroup1();
}		
	}, 1);
}







};
obj15219_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15219_onTap_activeActionGroupIndex = -1;
		$("#obj15219").trigger("obj15219_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15219) {
				console.warn("de-queueing event obj15219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15219_onTap_activeActionGroupIndex = 1;
	











































};
obj15207_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15207_onTap_activeActionGroupIndex = -1;
		$("#obj15207").trigger("obj15207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15207) {
				console.warn("de-queueing event obj15207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15207_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15034
(function(){
	window.obj15207_onTap_runningActionsCount = obj15207_onTap_runningActionsCount + 1;


	var selector = "#obj15034";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15209();
function playAudioFile_15209() {
	window.obj15207_onTap_runningActionsCount = obj15207_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15209")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15209");
			$("#obj_audio_playSoundFile15209").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
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
				window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15210();
function switchText_15210() {
	window.obj15207_onTap_runningActionsCount = obj15207_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&lt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15207_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15207_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15207").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15207_content");
			setTimeout(function () {
				window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15207 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15207_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15207_onTap_activeActionGroupIndex = -1;
		$("#obj15207").trigger("obj15207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15207) {
				console.warn("de-queueing event obj15207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15207_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15212();
function wait_15212() {
	window.obj15207_onTap_runningActionsCount = obj15207_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15207_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15207_onTap_activeActionGroupIndex = -1;
		$("#obj15207").trigger("obj15207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15207) {
				console.warn("de-queueing event obj15207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15207_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15213();
function switchText_15213() {
	window.obj15207_onTap_runningActionsCount = obj15207_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&lt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15207_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15207_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15207").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15207_content");
			setTimeout(function () {
				window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15207 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15207_onTap_runningActionsCount = window.obj15207_onTap_runningActionsCount - 1;

if (window.obj15207_onTap_runningActionsCount < 0) {
	window.obj15207_onTap_runningActionsCount = 0;
} else if (window.obj15207_onTap_runningActionsCount == 0) {
	obj15207_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15207_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15207_onTap_activeActionGroupIndex = -1;
		$("#obj15207").trigger("obj15207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15207) {
				console.warn("de-queueing event obj15207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15207_onTap_activeActionGroupIndex = 3;
	











































};
obj15195_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15195_onTap_activeActionGroupIndex = -1;
		$("#obj15195").trigger("obj15195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15195) {
				console.warn("de-queueing event obj15195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15195_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15217 
hide_15200();
function hide_15200() {
	var selector = "#obj15217";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15200(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14974 
hide_15202();
function hide_15202() {
	var selector = "#obj14974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15202(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14977
(function(){
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;


	var selector = "#obj14977";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15044
(function(){
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15215
(function(){
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;


	var selector = "#obj15215";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15197();
function playAudioFile_15197() {
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15197")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15197");
			$("#obj_audio_playSoundFile15197").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
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
				window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj15195_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15195_onTap_activeActionGroupIndex = -1;
		$("#obj15195").trigger("obj15195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15195) {
				console.warn("de-queueing event obj15195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15195_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj13998 
incrementCounter_15203();
function incrementCounter_15203() {
	window.obj15195_onTap_runningActionsCount = obj15195_onTap_runningActionsCount + 1;


	var oldValue = obj13998_counterValue;
	obj13998_counterValue = obj13998_counterValue + 1;
	if (! obj13998_counterCanExceedTargetValue && obj13998_counterValue > obj13998_counterTargetValue) {
		obj13998_counterValue = obj13998_counterTargetValue;
	}

	if (oldValue != obj13998_counterValue) {
		$("#obj13998").trigger('SCEventCounterValueChange');
		$("#obj13998").trigger('SCEventCounterIncrease');
		if (obj13998_counterValue == obj13998_counterTargetValue)
			$("#obj13998").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15195_onTap_runningActionsCount = window.obj15195_onTap_runningActionsCount - 1;

if (window.obj15195_onTap_runningActionsCount < 0) {
	window.obj15195_onTap_runningActionsCount = 0;
} else if (window.obj15195_onTap_runningActionsCount == 0) {
	obj15195_onTap_actionGroup2();
} }, 1);
}











};
obj15195_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15195_onTap_activeActionGroupIndex = -1;
		$("#obj15195").trigger("obj15195_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15195) {
				console.warn("de-queueing event obj15195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15195_onTap_activeActionGroupIndex = 2;
	











































};
obj15187_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15187_onTap_activeActionGroupIndex = -1;
		$("#obj15187").trigger("obj15187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15187) {
				console.warn("de-queueing event obj15187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15187_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15037
(function(){
	window.obj15187_onTap_runningActionsCount = obj15187_onTap_runningActionsCount + 1;


	var selector = "#obj15037";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15189();
function playAudioFile_15189() {
	window.obj15187_onTap_runningActionsCount = obj15187_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15189")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15189");
			$("#obj_audio_playSoundFile15189").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
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
				window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15190();
function switchText_15190() {
	window.obj15187_onTap_runningActionsCount = obj15187_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15187_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15187_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15187").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15187_content");
			setTimeout(function () {
				window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15187 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15187_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15187_onTap_activeActionGroupIndex = -1;
		$("#obj15187").trigger("obj15187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15187) {
				console.warn("de-queueing event obj15187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15187_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15192();
function wait_15192() {
	window.obj15187_onTap_runningActionsCount = obj15187_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15187_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15187_onTap_activeActionGroupIndex = -1;
		$("#obj15187").trigger("obj15187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15187) {
				console.warn("de-queueing event obj15187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15187_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15193();
function switchText_15193() {
	window.obj15187_onTap_runningActionsCount = obj15187_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15187_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15187_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15187").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15187_content");
			setTimeout(function () {
				window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15187 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15187_onTap_runningActionsCount = window.obj15187_onTap_runningActionsCount - 1;

if (window.obj15187_onTap_runningActionsCount < 0) {
	window.obj15187_onTap_runningActionsCount = 0;
} else if (window.obj15187_onTap_runningActionsCount == 0) {
	obj15187_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15187_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15187_onTap_activeActionGroupIndex = -1;
		$("#obj15187").trigger("obj15187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15187) {
				console.warn("de-queueing event obj15187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15187_onTap_activeActionGroupIndex = 3;
	











































};
obj15182_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15182_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15182").trigger("obj15182_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15182) {
				console.warn("de-queueing event obj15182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15182_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15207 
hide_15184();
function hide_15184() {
	var selector = "#obj15207";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15182_SCEventRun_runningActionsCount = obj15182_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15182_SCEventRun_runningActionsCount = window.obj15182_SCEventRun_runningActionsCount - 1;

if (window.obj15182_SCEventRun_runningActionsCount < 0) {
	window.obj15182_SCEventRun_runningActionsCount = 0;
} else if (window.obj15182_SCEventRun_runningActionsCount == 0) {
	obj15182_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15184(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15182_SCEventRun_runningActionsCount = window.obj15182_SCEventRun_runningActionsCount - 1;

if (window.obj15182_SCEventRun_runningActionsCount < 0) {
	window.obj15182_SCEventRun_runningActionsCount = 0;
} else if (window.obj15182_SCEventRun_runningActionsCount == 0) {
	obj15182_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15195 
hide_15185();
function hide_15185() {
	var selector = "#obj15195";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15182_SCEventRun_runningActionsCount = obj15182_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15182_SCEventRun_runningActionsCount = window.obj15182_SCEventRun_runningActionsCount - 1;

if (window.obj15182_SCEventRun_runningActionsCount < 0) {
	window.obj15182_SCEventRun_runningActionsCount = 0;
} else if (window.obj15182_SCEventRun_runningActionsCount == 0) {
	obj15182_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15185(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15182_SCEventRun_runningActionsCount = window.obj15182_SCEventRun_runningActionsCount - 1;

if (window.obj15182_SCEventRun_runningActionsCount < 0) {
	window.obj15182_SCEventRun_runningActionsCount = 0;
} else if (window.obj15182_SCEventRun_runningActionsCount == 0) {
	obj15182_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15187 
hide_15186();
function hide_15186() {
	var selector = "#obj15187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15182_SCEventRun_runningActionsCount = obj15182_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15182_SCEventRun_runningActionsCount = window.obj15182_SCEventRun_runningActionsCount - 1;

if (window.obj15182_SCEventRun_runningActionsCount < 0) {
	window.obj15182_SCEventRun_runningActionsCount = 0;
} else if (window.obj15182_SCEventRun_runningActionsCount == 0) {
	obj15182_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15186(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15182_SCEventRun_runningActionsCount = window.obj15182_SCEventRun_runningActionsCount - 1;

if (window.obj15182_SCEventRun_runningActionsCount < 0) {
	window.obj15182_SCEventRun_runningActionsCount = 0;
} else if (window.obj15182_SCEventRun_runningActionsCount == 0) {
	obj15182_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15182_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15182_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15182").trigger("obj15182_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15182) {
				console.warn("de-queueing event obj15182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15182_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15284_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15284_onTap_activeActionGroupIndex = -1;
		$("#obj15284").trigger("obj15284_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15284) {
				console.warn("de-queueing event obj15284." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15284").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15284_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14977 
hide_15292();
function hide_15292() {
	var selector = "#obj14977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15292(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15272
(function(){
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;


	var selector = "#obj15272";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15260
(function(){
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;


	var selector = "#obj15260";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15252
(function(){
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;


	var selector = "#obj15252";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15282
(function(){
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;


	var selector = "#obj15282";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14974
(function(){
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;


	var selector = "#obj14974";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15286();
function playAudioFile_15286() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15286")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15286");
			$("#obj_audio_playSoundFile15286").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
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
				window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15047 
runActionList_15293();
function runActionList_15293() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	$("#obj15047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15058 
runActionList_15294();
function runActionList_15294() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	$("#obj15058").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15052 
runActionList_15295();
function runActionList_15295() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	$("#obj15052").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15182 
runActionList_15298();
function runActionList_15298() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	$("#obj15182").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15314 
runActionList_15367();
function runActionList_15367() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	$("#obj15314").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15371 
runActionList_15426();
function runActionList_15426() {
	window.obj15284_onTap_runningActionsCount = obj15284_onTap_runningActionsCount + 1;

	$("#obj15371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15284_onTap_runningActionsCount = window.obj15284_onTap_runningActionsCount - 1;

if (window.obj15284_onTap_runningActionsCount < 0) {
	window.obj15284_onTap_runningActionsCount = 0;
} else if (window.obj15284_onTap_runningActionsCount == 0) {
	obj15284_onTap_actionGroup1();
}		
	}, 1);
}







};
obj15284_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15284_onTap_activeActionGroupIndex = -1;
		$("#obj15284").trigger("obj15284_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15284) {
				console.warn("de-queueing event obj15284." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15284").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15284_onTap_activeActionGroupIndex = 1;
	











































};
obj15272_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15272_onTap_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15034
(function(){
	window.obj15272_onTap_runningActionsCount = obj15272_onTap_runningActionsCount + 1;


	var selector = "#obj15034";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15274();
function playAudioFile_15274() {
	window.obj15272_onTap_runningActionsCount = obj15272_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15274")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15274");
			$("#obj_audio_playSoundFile15274").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
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
				window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15275();
function switchText_15275() {
	window.obj15272_onTap_runningActionsCount = obj15272_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&lt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15272_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15272_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15272").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15272_content");
			setTimeout(function () {
				window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15272 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15272_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15272_onTap_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15277();
function wait_15277() {
	window.obj15272_onTap_runningActionsCount = obj15272_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15272_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15272_onTap_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15278();
function switchText_15278() {
	window.obj15272_onTap_runningActionsCount = obj15272_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&lt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15272_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15272_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15272").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15272_content");
			setTimeout(function () {
				window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15272 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15272_onTap_runningActionsCount = window.obj15272_onTap_runningActionsCount - 1;

if (window.obj15272_onTap_runningActionsCount < 0) {
	window.obj15272_onTap_runningActionsCount = 0;
} else if (window.obj15272_onTap_runningActionsCount == 0) {
	obj15272_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15272_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15272_onTap_activeActionGroupIndex = -1;
		$("#obj15272").trigger("obj15272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15272) {
				console.warn("de-queueing event obj15272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15272_onTap_activeActionGroupIndex = 3;
	











































};
obj15260_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15260_onTap_activeActionGroupIndex = -1;
		$("#obj15260").trigger("obj15260_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15260) {
				console.warn("de-queueing event obj15260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15260_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15044
(function(){
	window.obj15260_onTap_runningActionsCount = obj15260_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15309();
function playAudioFile_15309() {
	window.obj15260_onTap_runningActionsCount = obj15260_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15309")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15309");
			$("#obj_audio_playSoundFile15309").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
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
				window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15310();
function switchText_15310() {
	window.obj15260_onTap_runningActionsCount = obj15260_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15260_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15260_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15260").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15260_content");
			setTimeout(function () {
				window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15260 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15260_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15260_onTap_activeActionGroupIndex = -1;
		$("#obj15260").trigger("obj15260_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15260) {
				console.warn("de-queueing event obj15260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15260_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15312();
function wait_15312() {
	window.obj15260_onTap_runningActionsCount = obj15260_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15260_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15260_onTap_activeActionGroupIndex = -1;
		$("#obj15260").trigger("obj15260_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15260) {
				console.warn("de-queueing event obj15260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15260_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15313();
function switchText_15313() {
	window.obj15260_onTap_runningActionsCount = obj15260_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15260_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15260_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15260").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15260_content");
			setTimeout(function () {
				window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15260 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15260_onTap_runningActionsCount = window.obj15260_onTap_runningActionsCount - 1;

if (window.obj15260_onTap_runningActionsCount < 0) {
	window.obj15260_onTap_runningActionsCount = 0;
} else if (window.obj15260_onTap_runningActionsCount == 0) {
	obj15260_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15260_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15260_onTap_activeActionGroupIndex = -1;
		$("#obj15260").trigger("obj15260_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15260) {
				console.warn("de-queueing event obj15260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15260_onTap_activeActionGroupIndex = 3;
	











































};
obj15252_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15252_onTap_activeActionGroupIndex = -1;
		$("#obj15252").trigger("obj15252_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15252) {
				console.warn("de-queueing event obj15252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15252_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15282 
hide_15305();
function hide_15305() {
	var selector = "#obj15282";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15305(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14974 
hide_15307();
function hide_15307() {
	var selector = "#obj14974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15307(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14977
(function(){
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;


	var selector = "#obj14977";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15037
(function(){
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;


	var selector = "#obj15037";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15280
(function(){
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;


	var selector = "#obj15280";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15302();
function playAudioFile_15302() {
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15302")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15302");
			$("#obj_audio_playSoundFile15302").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
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
				window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj15252_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15252_onTap_activeActionGroupIndex = -1;
		$("#obj15252").trigger("obj15252_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15252) {
				console.warn("de-queueing event obj15252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15252_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj13998 
incrementCounter_15308();
function incrementCounter_15308() {
	window.obj15252_onTap_runningActionsCount = obj15252_onTap_runningActionsCount + 1;


	var oldValue = obj13998_counterValue;
	obj13998_counterValue = obj13998_counterValue + 1;
	if (! obj13998_counterCanExceedTargetValue && obj13998_counterValue > obj13998_counterTargetValue) {
		obj13998_counterValue = obj13998_counterTargetValue;
	}

	if (oldValue != obj13998_counterValue) {
		$("#obj13998").trigger('SCEventCounterValueChange');
		$("#obj13998").trigger('SCEventCounterIncrease');
		if (obj13998_counterValue == obj13998_counterTargetValue)
			$("#obj13998").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15252_onTap_runningActionsCount = window.obj15252_onTap_runningActionsCount - 1;

if (window.obj15252_onTap_runningActionsCount < 0) {
	window.obj15252_onTap_runningActionsCount = 0;
} else if (window.obj15252_onTap_runningActionsCount == 0) {
	obj15252_onTap_actionGroup2();
} }, 1);
}











};
obj15252_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15252_onTap_activeActionGroupIndex = -1;
		$("#obj15252").trigger("obj15252_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15252) {
				console.warn("de-queueing event obj15252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15252_onTap_activeActionGroupIndex = 2;
	











































};
obj15247_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15247_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15247").trigger("obj15247_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15247) {
				console.warn("de-queueing event obj15247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15247_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15272 
hide_15249();
function hide_15249() {
	var selector = "#obj15272";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15247_SCEventRun_runningActionsCount = obj15247_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15247_SCEventRun_runningActionsCount = window.obj15247_SCEventRun_runningActionsCount - 1;

if (window.obj15247_SCEventRun_runningActionsCount < 0) {
	window.obj15247_SCEventRun_runningActionsCount = 0;
} else if (window.obj15247_SCEventRun_runningActionsCount == 0) {
	obj15247_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15249(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15247_SCEventRun_runningActionsCount = window.obj15247_SCEventRun_runningActionsCount - 1;

if (window.obj15247_SCEventRun_runningActionsCount < 0) {
	window.obj15247_SCEventRun_runningActionsCount = 0;
} else if (window.obj15247_SCEventRun_runningActionsCount == 0) {
	obj15247_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15260 
hide_15250();
function hide_15250() {
	var selector = "#obj15260";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15247_SCEventRun_runningActionsCount = obj15247_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15247_SCEventRun_runningActionsCount = window.obj15247_SCEventRun_runningActionsCount - 1;

if (window.obj15247_SCEventRun_runningActionsCount < 0) {
	window.obj15247_SCEventRun_runningActionsCount = 0;
} else if (window.obj15247_SCEventRun_runningActionsCount == 0) {
	obj15247_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15250(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15247_SCEventRun_runningActionsCount = window.obj15247_SCEventRun_runningActionsCount - 1;

if (window.obj15247_SCEventRun_runningActionsCount < 0) {
	window.obj15247_SCEventRun_runningActionsCount = 0;
} else if (window.obj15247_SCEventRun_runningActionsCount == 0) {
	obj15247_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15252 
hide_15251();
function hide_15251() {
	var selector = "#obj15252";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15247_SCEventRun_runningActionsCount = obj15247_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15247_SCEventRun_runningActionsCount = window.obj15247_SCEventRun_runningActionsCount - 1;

if (window.obj15247_SCEventRun_runningActionsCount < 0) {
	window.obj15247_SCEventRun_runningActionsCount = 0;
} else if (window.obj15247_SCEventRun_runningActionsCount == 0) {
	obj15247_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15251(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15247_SCEventRun_runningActionsCount = window.obj15247_SCEventRun_runningActionsCount - 1;

if (window.obj15247_SCEventRun_runningActionsCount < 0) {
	window.obj15247_SCEventRun_runningActionsCount = 0;
} else if (window.obj15247_SCEventRun_runningActionsCount == 0) {
	obj15247_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15247_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15247_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15247").trigger("obj15247_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15247) {
				console.warn("de-queueing event obj15247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15247_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15351_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15351_onTap_activeActionGroupIndex = -1;
		$("#obj15351").trigger("obj15351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15351) {
				console.warn("de-queueing event obj15351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15351_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14977 
hide_15359();
function hide_15359() {
	var selector = "#obj14977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15359(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15337
(function(){
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;


	var selector = "#obj15337";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15327
(function(){
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;


	var selector = "#obj15327";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15319
(function(){
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;


	var selector = "#obj15319";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15349
(function(){
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;


	var selector = "#obj15349";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14974
(function(){
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;


	var selector = "#obj14974";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15353();
function playAudioFile_15353() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15353")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15353");
			$("#obj_audio_playSoundFile15353").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
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
				window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15047 
runActionList_15360();
function runActionList_15360() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	$("#obj15047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15058 
runActionList_15361();
function runActionList_15361() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	$("#obj15058").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15182 
runActionList_15362();
function runActionList_15362() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	$("#obj15182").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15247 
runActionList_15363();
function runActionList_15363() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	$("#obj15247").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15052 
runActionList_15366();
function runActionList_15366() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	$("#obj15052").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15371 
runActionList_15425();
function runActionList_15425() {
	window.obj15351_onTap_runningActionsCount = obj15351_onTap_runningActionsCount + 1;

	$("#obj15371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15351_onTap_runningActionsCount = window.obj15351_onTap_runningActionsCount - 1;

if (window.obj15351_onTap_runningActionsCount < 0) {
	window.obj15351_onTap_runningActionsCount = 0;
} else if (window.obj15351_onTap_runningActionsCount == 0) {
	obj15351_onTap_actionGroup1();
}		
	}, 1);
}







};
obj15351_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15351_onTap_activeActionGroupIndex = -1;
		$("#obj15351").trigger("obj15351_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15351) {
				console.warn("de-queueing event obj15351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15351_onTap_activeActionGroupIndex = 1;
	











































};
obj15337_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15337_onTap_activeActionGroupIndex = -1;
		$("#obj15337").trigger("obj15337_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15337) {
				console.warn("de-queueing event obj15337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15337_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15349 
hide_15342();
function hide_15342() {
	var selector = "#obj15349";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15342(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14974 
hide_15344();
function hide_15344() {
	var selector = "#obj14974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15344(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14977
(function(){
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;


	var selector = "#obj14977";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15034
(function(){
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;


	var selector = "#obj15034";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15347
(function(){
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;


	var selector = "#obj15347";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15339();
function playAudioFile_15339() {
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15339")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15339");
			$("#obj_audio_playSoundFile15339").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
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
				window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj15337_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15337_onTap_activeActionGroupIndex = -1;
		$("#obj15337").trigger("obj15337_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15337) {
				console.warn("de-queueing event obj15337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15337_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj13998 
incrementCounter_15345();
function incrementCounter_15345() {
	window.obj15337_onTap_runningActionsCount = obj15337_onTap_runningActionsCount + 1;


	var oldValue = obj13998_counterValue;
	obj13998_counterValue = obj13998_counterValue + 1;
	if (! obj13998_counterCanExceedTargetValue && obj13998_counterValue > obj13998_counterTargetValue) {
		obj13998_counterValue = obj13998_counterTargetValue;
	}

	if (oldValue != obj13998_counterValue) {
		$("#obj13998").trigger('SCEventCounterValueChange');
		$("#obj13998").trigger('SCEventCounterIncrease');
		if (obj13998_counterValue == obj13998_counterTargetValue)
			$("#obj13998").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15337_onTap_runningActionsCount = window.obj15337_onTap_runningActionsCount - 1;

if (window.obj15337_onTap_runningActionsCount < 0) {
	window.obj15337_onTap_runningActionsCount = 0;
} else if (window.obj15337_onTap_runningActionsCount == 0) {
	obj15337_onTap_actionGroup2();
} }, 1);
}











};
obj15337_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15337_onTap_activeActionGroupIndex = -1;
		$("#obj15337").trigger("obj15337_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15337) {
				console.warn("de-queueing event obj15337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15337_onTap_activeActionGroupIndex = 2;
	











































};
obj15327_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15327_onTap_activeActionGroupIndex = -1;
		$("#obj15327").trigger("obj15327_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15327) {
				console.warn("de-queueing event obj15327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15327_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15044
(function(){
	window.obj15327_onTap_runningActionsCount = obj15327_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15329();
function playAudioFile_15329() {
	window.obj15327_onTap_runningActionsCount = obj15327_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15329")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15329");
			$("#obj_audio_playSoundFile15329").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
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
				window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15330();
function switchText_15330() {
	window.obj15327_onTap_runningActionsCount = obj15327_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15327_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15327_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15327").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15327_content");
			setTimeout(function () {
				window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15327 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15327_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15327_onTap_activeActionGroupIndex = -1;
		$("#obj15327").trigger("obj15327_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15327) {
				console.warn("de-queueing event obj15327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15327_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15332();
function wait_15332() {
	window.obj15327_onTap_runningActionsCount = obj15327_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15327_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15327_onTap_activeActionGroupIndex = -1;
		$("#obj15327").trigger("obj15327_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15327) {
				console.warn("de-queueing event obj15327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15327_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15333();
function switchText_15333() {
	window.obj15327_onTap_runningActionsCount = obj15327_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&gt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15327_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15327_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15327").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15327_content");
			setTimeout(function () {
				window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15327 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15327_onTap_runningActionsCount = window.obj15327_onTap_runningActionsCount - 1;

if (window.obj15327_onTap_runningActionsCount < 0) {
	window.obj15327_onTap_runningActionsCount = 0;
} else if (window.obj15327_onTap_runningActionsCount == 0) {
	obj15327_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15327_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15327_onTap_activeActionGroupIndex = -1;
		$("#obj15327").trigger("obj15327_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15327) {
				console.warn("de-queueing event obj15327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15327_onTap_activeActionGroupIndex = 3;
	











































};
obj15319_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15319_onTap_activeActionGroupIndex = -1;
		$("#obj15319").trigger("obj15319_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15319) {
				console.warn("de-queueing event obj15319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15319_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15037
(function(){
	window.obj15319_onTap_runningActionsCount = obj15319_onTap_runningActionsCount + 1;


	var selector = "#obj15037";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15321();
function playAudioFile_15321() {
	window.obj15319_onTap_runningActionsCount = obj15319_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15321")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15321");
			$("#obj_audio_playSoundFile15321").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
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
				window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15322();
function switchText_15322() {
	window.obj15319_onTap_runningActionsCount = obj15319_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15319_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15319_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15319").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15319_content");
			setTimeout(function () {
				window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15319 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15319_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15319_onTap_activeActionGroupIndex = -1;
		$("#obj15319").trigger("obj15319_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15319) {
				console.warn("de-queueing event obj15319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15319_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15324();
function wait_15324() {
	window.obj15319_onTap_runningActionsCount = obj15319_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15319_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15319_onTap_activeActionGroupIndex = -1;
		$("#obj15319").trigger("obj15319_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15319) {
				console.warn("de-queueing event obj15319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15319_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15325();
function switchText_15325() {
	window.obj15319_onTap_runningActionsCount = obj15319_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15319_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15319_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15319").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15319_content");
			setTimeout(function () {
				window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15319 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15319_onTap_runningActionsCount = window.obj15319_onTap_runningActionsCount - 1;

if (window.obj15319_onTap_runningActionsCount < 0) {
	window.obj15319_onTap_runningActionsCount = 0;
} else if (window.obj15319_onTap_runningActionsCount == 0) {
	obj15319_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15319_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15319_onTap_activeActionGroupIndex = -1;
		$("#obj15319").trigger("obj15319_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15319) {
				console.warn("de-queueing event obj15319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15319_onTap_activeActionGroupIndex = 3;
	











































};
obj15314_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15314_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15314").trigger("obj15314_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15314) {
				console.warn("de-queueing event obj15314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15314_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15337 
hide_15316();
function hide_15316() {
	var selector = "#obj15337";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15314_SCEventRun_runningActionsCount = obj15314_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15314_SCEventRun_runningActionsCount = window.obj15314_SCEventRun_runningActionsCount - 1;

if (window.obj15314_SCEventRun_runningActionsCount < 0) {
	window.obj15314_SCEventRun_runningActionsCount = 0;
} else if (window.obj15314_SCEventRun_runningActionsCount == 0) {
	obj15314_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15316(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15314_SCEventRun_runningActionsCount = window.obj15314_SCEventRun_runningActionsCount - 1;

if (window.obj15314_SCEventRun_runningActionsCount < 0) {
	window.obj15314_SCEventRun_runningActionsCount = 0;
} else if (window.obj15314_SCEventRun_runningActionsCount == 0) {
	obj15314_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15327 
hide_15317();
function hide_15317() {
	var selector = "#obj15327";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15314_SCEventRun_runningActionsCount = obj15314_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15314_SCEventRun_runningActionsCount = window.obj15314_SCEventRun_runningActionsCount - 1;

if (window.obj15314_SCEventRun_runningActionsCount < 0) {
	window.obj15314_SCEventRun_runningActionsCount = 0;
} else if (window.obj15314_SCEventRun_runningActionsCount == 0) {
	obj15314_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15317(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15314_SCEventRun_runningActionsCount = window.obj15314_SCEventRun_runningActionsCount - 1;

if (window.obj15314_SCEventRun_runningActionsCount < 0) {
	window.obj15314_SCEventRun_runningActionsCount = 0;
} else if (window.obj15314_SCEventRun_runningActionsCount == 0) {
	obj15314_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15319 
hide_15318();
function hide_15318() {
	var selector = "#obj15319";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15314_SCEventRun_runningActionsCount = obj15314_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15314_SCEventRun_runningActionsCount = window.obj15314_SCEventRun_runningActionsCount - 1;

if (window.obj15314_SCEventRun_runningActionsCount < 0) {
	window.obj15314_SCEventRun_runningActionsCount = 0;
} else if (window.obj15314_SCEventRun_runningActionsCount == 0) {
	obj15314_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15318(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15314_SCEventRun_runningActionsCount = window.obj15314_SCEventRun_runningActionsCount - 1;

if (window.obj15314_SCEventRun_runningActionsCount < 0) {
	window.obj15314_SCEventRun_runningActionsCount = 0;
} else if (window.obj15314_SCEventRun_runningActionsCount == 0) {
	obj15314_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15314_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15314_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15314").trigger("obj15314_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15314) {
				console.warn("de-queueing event obj15314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15314_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15408_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15408_onTap_activeActionGroupIndex = -1;
		$("#obj15408").trigger("obj15408_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15408) {
				console.warn("de-queueing event obj15408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15408_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj14977 
hide_15416();
function hide_15416() {
	var selector = "#obj14977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15416(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15396
(function(){
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;


	var selector = "#obj15396";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15384
(function(){
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;


	var selector = "#obj15384";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15376
(function(){
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;


	var selector = "#obj15376";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15406
(function(){
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;


	var selector = "#obj15406";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj14974
(function(){
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;


	var selector = "#obj14974";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15410();
function playAudioFile_15410() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15410")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15410");
			$("#obj_audio_playSoundFile15410").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
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
				window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15047 
runActionList_15417();
function runActionList_15417() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	$("#obj15047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15058 
runActionList_15418();
function runActionList_15418() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	$("#obj15058").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15182 
runActionList_15424();
function runActionList_15424() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	$("#obj15182").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15052 
runActionList_15419();
function runActionList_15419() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	$("#obj15052").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15247 
runActionList_15420();
function runActionList_15420() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	$("#obj15247").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15314 
runActionList_15421();
function runActionList_15421() {
	window.obj15408_onTap_runningActionsCount = obj15408_onTap_runningActionsCount + 1;

	$("#obj15314").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15408_onTap_runningActionsCount = window.obj15408_onTap_runningActionsCount - 1;

if (window.obj15408_onTap_runningActionsCount < 0) {
	window.obj15408_onTap_runningActionsCount = 0;
} else if (window.obj15408_onTap_runningActionsCount == 0) {
	obj15408_onTap_actionGroup1();
}		
	}, 1);
}







};
obj15408_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15408_onTap_activeActionGroupIndex = -1;
		$("#obj15408").trigger("obj15408_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15408) {
				console.warn("de-queueing event obj15408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15408_onTap_activeActionGroupIndex = 1;
	











































};
obj15396_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15396_onTap_activeActionGroupIndex = -1;
		$("#obj15396").trigger("obj15396_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15396) {
				console.warn("de-queueing event obj15396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15396_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15034
(function(){
	window.obj15396_onTap_runningActionsCount = obj15396_onTap_runningActionsCount + 1;


	var selector = "#obj15034";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15398();
function playAudioFile_15398() {
	window.obj15396_onTap_runningActionsCount = obj15396_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15398")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15398");
			$("#obj_audio_playSoundFile15398").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
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
				window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15399();
function switchText_15399() {
	window.obj15396_onTap_runningActionsCount = obj15396_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">&lt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15396_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15396_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15396").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15396_content");
			setTimeout(function () {
				window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15396 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15396_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15396_onTap_activeActionGroupIndex = -1;
		$("#obj15396").trigger("obj15396_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15396) {
				console.warn("de-queueing event obj15396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15396_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15401();
function wait_15401() {
	window.obj15396_onTap_runningActionsCount = obj15396_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15396_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15396_onTap_activeActionGroupIndex = -1;
		$("#obj15396").trigger("obj15396_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15396) {
				console.warn("de-queueing event obj15396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15396_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15402();
function switchText_15402() {
	window.obj15396_onTap_runningActionsCount = obj15396_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">&lt;</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15396_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15396_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15396").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15396_content");
			setTimeout(function () {
				window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15396 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15396_onTap_runningActionsCount = window.obj15396_onTap_runningActionsCount - 1;

if (window.obj15396_onTap_runningActionsCount < 0) {
	window.obj15396_onTap_runningActionsCount = 0;
} else if (window.obj15396_onTap_runningActionsCount == 0) {
	obj15396_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15396_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15396_onTap_activeActionGroupIndex = -1;
		$("#obj15396").trigger("obj15396_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15396) {
				console.warn("de-queueing event obj15396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15396_onTap_activeActionGroupIndex = 3;
	











































};
obj15384_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15384_onTap_activeActionGroupIndex = -1;
		$("#obj15384").trigger("obj15384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15384) {
				console.warn("de-queueing event obj15384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15384_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15406 
hide_15389();
function hide_15389() {
	var selector = "#obj15406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15389(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj14974 
hide_15391();
function hide_15391() {
	var selector = "#obj14974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15391(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj14977
(function(){
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;


	var selector = "#obj14977";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15044
(function(){
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;


	var selector = "#obj15044";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15404
(function(){
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;


	var selector = "#obj15404";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15386();
function playAudioFile_15386() {
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15386")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15386");
			$("#obj_audio_playSoundFile15386").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
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
				window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj15384_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15384_onTap_activeActionGroupIndex = -1;
		$("#obj15384").trigger("obj15384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15384) {
				console.warn("de-queueing event obj15384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15384_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj13998 
incrementCounter_15392();
function incrementCounter_15392() {
	window.obj15384_onTap_runningActionsCount = obj15384_onTap_runningActionsCount + 1;


	var oldValue = obj13998_counterValue;
	obj13998_counterValue = obj13998_counterValue + 1;
	if (! obj13998_counterCanExceedTargetValue && obj13998_counterValue > obj13998_counterTargetValue) {
		obj13998_counterValue = obj13998_counterTargetValue;
	}

	if (oldValue != obj13998_counterValue) {
		$("#obj13998").trigger('SCEventCounterValueChange');
		$("#obj13998").trigger('SCEventCounterIncrease');
		if (obj13998_counterValue == obj13998_counterTargetValue)
			$("#obj13998").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15384_onTap_runningActionsCount = window.obj15384_onTap_runningActionsCount - 1;

if (window.obj15384_onTap_runningActionsCount < 0) {
	window.obj15384_onTap_runningActionsCount = 0;
} else if (window.obj15384_onTap_runningActionsCount == 0) {
	obj15384_onTap_actionGroup2();
} }, 1);
}











};
obj15384_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15384_onTap_activeActionGroupIndex = -1;
		$("#obj15384").trigger("obj15384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15384) {
				console.warn("de-queueing event obj15384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15384_onTap_activeActionGroupIndex = 2;
	











































};
obj15376_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15376_onTap_activeActionGroupIndex = -1;
		$("#obj15376").trigger("obj15376_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15376) {
				console.warn("de-queueing event obj15376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15376_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15037
(function(){
	window.obj15376_onTap_runningActionsCount = obj15376_onTap_runningActionsCount + 1;


	var selector = "#obj15037";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15378();
function playAudioFile_15378() {
	window.obj15376_onTap_runningActionsCount = obj15376_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15378")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15378");
			$("#obj_audio_playSoundFile15378").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
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
				window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15379();
function switchText_15379() {
	window.obj15376_onTap_runningActionsCount = obj15376_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15376_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15376_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15376").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15376_content");
			setTimeout(function () {
				window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15376 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15376_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15376_onTap_activeActionGroupIndex = -1;
		$("#obj15376").trigger("obj15376_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15376) {
				console.warn("de-queueing event obj15376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15376_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15381();
function wait_15381() {
	window.obj15376_onTap_runningActionsCount = obj15376_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15376_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15376_onTap_activeActionGroupIndex = -1;
		$("#obj15376").trigger("obj15376_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15376) {
				console.warn("de-queueing event obj15376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15376_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15382();
function switchText_15382() {
	window.obj15376_onTap_runningActionsCount = obj15376_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 55px; font-family: Roboto-Bold;\">=</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15376_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15376_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15376").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15376_content");
			setTimeout(function () {
				window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15376 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15376_onTap_runningActionsCount = window.obj15376_onTap_runningActionsCount - 1;

if (window.obj15376_onTap_runningActionsCount < 0) {
	window.obj15376_onTap_runningActionsCount = 0;
} else if (window.obj15376_onTap_runningActionsCount == 0) {
	obj15376_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15376_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15376_onTap_activeActionGroupIndex = -1;
		$("#obj15376").trigger("obj15376_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15376) {
				console.warn("de-queueing event obj15376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15376_onTap_activeActionGroupIndex = 3;
	











































};
obj15371_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15371_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15371").trigger("obj15371_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15371) {
				console.warn("de-queueing event obj15371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15371_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15396 
hide_15373();
function hide_15373() {
	var selector = "#obj15396";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15371_SCEventRun_runningActionsCount = obj15371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15371_SCEventRun_runningActionsCount = window.obj15371_SCEventRun_runningActionsCount - 1;

if (window.obj15371_SCEventRun_runningActionsCount < 0) {
	window.obj15371_SCEventRun_runningActionsCount = 0;
} else if (window.obj15371_SCEventRun_runningActionsCount == 0) {
	obj15371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15373(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15371_SCEventRun_runningActionsCount = window.obj15371_SCEventRun_runningActionsCount - 1;

if (window.obj15371_SCEventRun_runningActionsCount < 0) {
	window.obj15371_SCEventRun_runningActionsCount = 0;
} else if (window.obj15371_SCEventRun_runningActionsCount == 0) {
	obj15371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15384 
hide_15374();
function hide_15374() {
	var selector = "#obj15384";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15371_SCEventRun_runningActionsCount = obj15371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15371_SCEventRun_runningActionsCount = window.obj15371_SCEventRun_runningActionsCount - 1;

if (window.obj15371_SCEventRun_runningActionsCount < 0) {
	window.obj15371_SCEventRun_runningActionsCount = 0;
} else if (window.obj15371_SCEventRun_runningActionsCount == 0) {
	obj15371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15374(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15371_SCEventRun_runningActionsCount = window.obj15371_SCEventRun_runningActionsCount - 1;

if (window.obj15371_SCEventRun_runningActionsCount < 0) {
	window.obj15371_SCEventRun_runningActionsCount = 0;
} else if (window.obj15371_SCEventRun_runningActionsCount == 0) {
	obj15371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15376 
hide_15375();
function hide_15375() {
	var selector = "#obj15376";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15371_SCEventRun_runningActionsCount = obj15371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15371_SCEventRun_runningActionsCount = window.obj15371_SCEventRun_runningActionsCount - 1;

if (window.obj15371_SCEventRun_runningActionsCount < 0) {
	window.obj15371_SCEventRun_runningActionsCount = 0;
} else if (window.obj15371_SCEventRun_runningActionsCount == 0) {
	obj15371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15375(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15371_SCEventRun_runningActionsCount = window.obj15371_SCEventRun_runningActionsCount - 1;

if (window.obj15371_SCEventRun_runningActionsCount < 0) {
	window.obj15371_SCEventRun_runningActionsCount = 0;
} else if (window.obj15371_SCEventRun_runningActionsCount == 0) {
	obj15371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15371_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15371_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15371").trigger("obj15371_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15371) {
				console.warn("de-queueing event obj15371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15371_SCEventRun_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj13969: Event Touch Down
 *
 */

$("#obj13969").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13969_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13969_onTap is still running");
	return;
}
var obj13969_onTap_runningActionsCount = 0;
var obj13969_onTap_loopCount = 0;
obj13969_onTap_actionGroup0();
});


















/*
 *
 *   obj13972: Event Touch Down
 *
 */

$("#obj13972").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13972_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13972_onTap is still running");
	return;
}
var obj13972_onTap_runningActionsCount = 0;
var obj13972_onTap_loopCount = 0;
obj13972_onTap_actionGroup0();
});
























































/*
 *
 *   obj13979: Event Touch Down
 *
 */

$("#obj13979").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13979_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13979_onTap is still running");
	return;
}
var obj13979_onTap_runningActionsCount = 0;
var obj13979_onTap_loopCount = 0;
obj13979_onTap_actionGroup0();
});


















/*
 *
 *   obj13982: Event Touch Down
 *
 */

$("#obj13982").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13982_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13982_onTap is still running");
	return;
}
var obj13982_onTap_runningActionsCount = 0;
var obj13982_onTap_loopCount = 0;
obj13982_onTap_actionGroup0();
});


















/*
 *
 *   obj13988: Event Touch Down
 *
 */

$("#obj13988").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13988_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13988_onTap is still running");
	return;
}
var obj13988_onTap_runningActionsCount = 0;
var obj13988_onTap_loopCount = 0;
obj13988_onTap_actionGroup0();
});

































































/*
 *
 *   obj13998: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13998").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13998_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13998_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13998_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13998_SCEventCounterReachedTargetValue_loopCount = 0;
obj13998_SCEventCounterReachedTargetValue_actionGroup0();
});


































































/*
 *
 *   obj14966: Event Touch Down
 *
 */

$("#obj14966").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14966_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14966_onTap is still running");
	return;
}
var obj14966_onTap_runningActionsCount = 0;
var obj14966_onTap_loopCount = 0;
obj14966_onTap_actionGroup0();
});
























































/*
 *
 *   obj14980: Event Touch Down
 *
 */

$("#obj14980").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14980_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14980_onTap is still running");
	return;
}
var obj14980_onTap_runningActionsCount = 0;
var obj14980_onTap_loopCount = 0;
obj14980_onTap_actionGroup0();
});


















/*
 *
 *   obj14994: Event Touch Down
 *
 */

$("#obj14994").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14994_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14994_onTap is still running");
	return;
}
var obj14994_onTap_runningActionsCount = 0;
var obj14994_onTap_loopCount = 0;
obj14994_onTap_actionGroup0();
});


















/*
 *
 *   obj15008: Event Touch Down
 *
 */

$("#obj15008").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15008_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15008_onTap is still running");
	return;
}
var obj15008_onTap_runningActionsCount = 0;
var obj15008_onTap_loopCount = 0;
obj15008_onTap_actionGroup0();
});



























/*
 *
 *   obj15047: Event SCEventRun
 *
 */

$("#obj15047").bind("SCEventRun", function(event) {
	if (window.obj15047_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15047_SCEventRun is still running");
	return;
}
var obj15047_SCEventRun_runningActionsCount = 0;
var obj15047_SCEventRun_loopCount = 0;
obj15047_SCEventRun_actionGroup0();
});


















/*
 *
 *   obj15052: Event SCEventRun
 *
 */

$("#obj15052").bind("SCEventRun", function(event) {
	if (window.obj15052_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15052_SCEventRun is still running");
	return;
}
var obj15052_SCEventRun_runningActionsCount = 0;
var obj15052_SCEventRun_loopCount = 0;
obj15052_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj15101: Event Touch Down
 *
 */

$("#obj15101").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15101_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15101_onTap is still running");
	return;
}
var obj15101_onTap_runningActionsCount = 0;
var obj15101_onTap_loopCount = 0;
obj15101_onTap_actionGroup0();
});
























































/*
 *
 *   obj15089: Event Touch Down
 *
 */

$("#obj15089").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15089_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15089_onTap is still running");
	return;
}
var obj15089_onTap_runningActionsCount = 0;
var obj15089_onTap_loopCount = 0;
obj15089_onTap_actionGroup0();
});


















/*
 *
 *   obj15077: Event Touch Down
 *
 */

$("#obj15077").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15077_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15077_onTap is still running");
	return;
}
var obj15077_onTap_runningActionsCount = 0;
var obj15077_onTap_loopCount = 0;
obj15077_onTap_actionGroup0();
});


















/*
 *
 *   obj15069: Event Touch Down
 *
 */

$("#obj15069").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15069_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15069_onTap is still running");
	return;
}
var obj15069_onTap_runningActionsCount = 0;
var obj15069_onTap_loopCount = 0;
obj15069_onTap_actionGroup0();
});



























/*
 *
 *   obj15058: Event SCEventRun
 *
 */

$("#obj15058").bind("SCEventRun", function(event) {
	if (window.obj15058_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15058_SCEventRun is still running");
	return;
}
var obj15058_SCEventRun_runningActionsCount = 0;
var obj15058_SCEventRun_loopCount = 0;
obj15058_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj15219: Event Touch Down
 *
 */

$("#obj15219").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15219_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15219_onTap is still running");
	return;
}
var obj15219_onTap_runningActionsCount = 0;
var obj15219_onTap_loopCount = 0;
obj15219_onTap_actionGroup0();
});
























































/*
 *
 *   obj15207: Event Touch Down
 *
 */

$("#obj15207").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15207_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15207_onTap is still running");
	return;
}
var obj15207_onTap_runningActionsCount = 0;
var obj15207_onTap_loopCount = 0;
obj15207_onTap_actionGroup0();
});


















/*
 *
 *   obj15195: Event Touch Down
 *
 */

$("#obj15195").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15195_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15195_onTap is still running");
	return;
}
var obj15195_onTap_runningActionsCount = 0;
var obj15195_onTap_loopCount = 0;
obj15195_onTap_actionGroup0();
});


















/*
 *
 *   obj15187: Event Touch Down
 *
 */

$("#obj15187").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15187_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15187_onTap is still running");
	return;
}
var obj15187_onTap_runningActionsCount = 0;
var obj15187_onTap_loopCount = 0;
obj15187_onTap_actionGroup0();
});



























/*
 *
 *   obj15182: Event SCEventRun
 *
 */

$("#obj15182").bind("SCEventRun", function(event) {
	if (window.obj15182_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15182_SCEventRun is still running");
	return;
}
var obj15182_SCEventRun_runningActionsCount = 0;
var obj15182_SCEventRun_loopCount = 0;
obj15182_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj15284: Event Touch Down
 *
 */

$("#obj15284").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15284_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15284_onTap is still running");
	return;
}
var obj15284_onTap_runningActionsCount = 0;
var obj15284_onTap_loopCount = 0;
obj15284_onTap_actionGroup0();
});
























































/*
 *
 *   obj15272: Event Touch Down
 *
 */

$("#obj15272").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15272_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15272_onTap is still running");
	return;
}
var obj15272_onTap_runningActionsCount = 0;
var obj15272_onTap_loopCount = 0;
obj15272_onTap_actionGroup0();
});


















/*
 *
 *   obj15260: Event Touch Down
 *
 */

$("#obj15260").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15260_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15260_onTap is still running");
	return;
}
var obj15260_onTap_runningActionsCount = 0;
var obj15260_onTap_loopCount = 0;
obj15260_onTap_actionGroup0();
});


















/*
 *
 *   obj15252: Event Touch Down
 *
 */

$("#obj15252").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15252_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15252_onTap is still running");
	return;
}
var obj15252_onTap_runningActionsCount = 0;
var obj15252_onTap_loopCount = 0;
obj15252_onTap_actionGroup0();
});



























/*
 *
 *   obj15247: Event SCEventRun
 *
 */

$("#obj15247").bind("SCEventRun", function(event) {
	if (window.obj15247_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15247_SCEventRun is still running");
	return;
}
var obj15247_SCEventRun_runningActionsCount = 0;
var obj15247_SCEventRun_loopCount = 0;
obj15247_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj15351: Event Touch Down
 *
 */

$("#obj15351").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15351_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15351_onTap is still running");
	return;
}
var obj15351_onTap_runningActionsCount = 0;
var obj15351_onTap_loopCount = 0;
obj15351_onTap_actionGroup0();
});
























































/*
 *
 *   obj15337: Event Touch Down
 *
 */

$("#obj15337").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15337_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15337_onTap is still running");
	return;
}
var obj15337_onTap_runningActionsCount = 0;
var obj15337_onTap_loopCount = 0;
obj15337_onTap_actionGroup0();
});


















/*
 *
 *   obj15327: Event Touch Down
 *
 */

$("#obj15327").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15327_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15327_onTap is still running");
	return;
}
var obj15327_onTap_runningActionsCount = 0;
var obj15327_onTap_loopCount = 0;
obj15327_onTap_actionGroup0();
});


















/*
 *
 *   obj15319: Event Touch Down
 *
 */

$("#obj15319").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15319_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15319_onTap is still running");
	return;
}
var obj15319_onTap_runningActionsCount = 0;
var obj15319_onTap_loopCount = 0;
obj15319_onTap_actionGroup0();
});



























/*
 *
 *   obj15314: Event SCEventRun
 *
 */

$("#obj15314").bind("SCEventRun", function(event) {
	if (window.obj15314_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15314_SCEventRun is still running");
	return;
}
var obj15314_SCEventRun_runningActionsCount = 0;
var obj15314_SCEventRun_loopCount = 0;
obj15314_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj15408: Event Touch Down
 *
 */

$("#obj15408").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15408_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15408_onTap is still running");
	return;
}
var obj15408_onTap_runningActionsCount = 0;
var obj15408_onTap_loopCount = 0;
obj15408_onTap_actionGroup0();
});
























































/*
 *
 *   obj15396: Event Touch Down
 *
 */

$("#obj15396").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15396_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15396_onTap is still running");
	return;
}
var obj15396_onTap_runningActionsCount = 0;
var obj15396_onTap_loopCount = 0;
obj15396_onTap_actionGroup0();
});


















/*
 *
 *   obj15384: Event Touch Down
 *
 */

$("#obj15384").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15384_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15384_onTap is still running");
	return;
}
var obj15384_onTap_runningActionsCount = 0;
var obj15384_onTap_loopCount = 0;
obj15384_onTap_actionGroup0();
});


















/*
 *
 *   obj15376: Event Touch Down
 *
 */

$("#obj15376").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15376_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15376_onTap is still running");
	return;
}
var obj15376_onTap_runningActionsCount = 0;
var obj15376_onTap_loopCount = 0;
obj15376_onTap_actionGroup0();
});



























/*
 *
 *   obj15371: Event SCEventRun
 *
 */

$("#obj15371").bind("SCEventRun", function(event) {
	if (window.obj15371_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15371_SCEventRun is still running");
	return;
}
var obj15371_SCEventRun_runningActionsCount = 0;
var obj15371_SCEventRun_loopCount = 0;
obj15371_SCEventRun_actionGroup0();
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
	
$("#obj13965").trigger('SCEventShow');
$("#obj13967").trigger('SCEventShow');
$("#obj13969").trigger('SCEventShow');
$("#obj13972").trigger('SCEventShow');
$("#obj13975").trigger('SCEventShow');
$("#obj13977").trigger('SCEventShow');
$("#obj13979").trigger('SCEventShow');
$("#obj13982").trigger('SCEventShow');
$("#obj14962").trigger('SCEventShow');
$("#obj14964").trigger('SCEventShow');
$("#obj14966").trigger('SCEventShow');
$("#obj14980").trigger('SCEventShow');
$("#obj14994").trigger('SCEventShow');
$("#obj15008").trigger('SCEventShow');
$("#obj15108").trigger('SCEventShow');
$("#obj15101").trigger('SCEventShow');
$("#obj15230").trigger('SCEventShow');
$("#obj15219").trigger('SCEventShow');
$("#obj15296").trigger('SCEventShow');
$("#obj15284").trigger('SCEventShow');
$("#obj15364").trigger('SCEventShow');
$("#obj15351").trigger('SCEventShow');
$("#obj15422").trigger('SCEventShow');
$("#obj15408").trigger('SCEventShow');
$("#obj14977").trigger('SCEventShow');
	

});