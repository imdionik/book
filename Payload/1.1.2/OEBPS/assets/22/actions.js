pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 4708;
pubcoder.page.title = pubcoder.page.title || "22";
pubcoder.page.number = pubcoder.page.number || 22;
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
var obj4713_onTap_activeActionGroupIndex = -1;
var obj4713_onTap_runningActionsCount = 0;
var obj4713_onTap_loopCount = 0;
var obj4716_onTap_activeActionGroupIndex = -1;
var obj4716_onTap_runningActionsCount = 0;
var obj4716_onTap_loopCount = 0;
var obj4723_onTap_activeActionGroupIndex = -1;
var obj4723_onTap_runningActionsCount = 0;
var obj4723_onTap_loopCount = 0;
var obj5078_onTap_activeActionGroupIndex = -1;
var obj5078_onTap_runningActionsCount = 0;
var obj5078_onTap_loopCount = 0;
var obj5249_onTap_activeActionGroupIndex = -1;
var obj5249_onTap_runningActionsCount = 0;
var obj5249_onTap_loopCount = 0;
var obj5251_onTap_activeActionGroupIndex = -1;
var obj5251_onTap_runningActionsCount = 0;
var obj5251_onTap_loopCount = 0;
var obj5253_onTap_activeActionGroupIndex = -1;
var obj5253_onTap_runningActionsCount = 0;
var obj5253_onTap_loopCount = 0;
var obj5255_onTap_activeActionGroupIndex = -1;
var obj5255_onTap_runningActionsCount = 0;
var obj5255_onTap_loopCount = 0;
var obj9412_onTap_activeActionGroupIndex = -1;
var obj9412_onTap_runningActionsCount = 0;
var obj9412_onTap_loopCount = 0;
var obj5269_onTap_activeActionGroupIndex = -1;
var obj5269_onTap_runningActionsCount = 0;
var obj5269_onTap_loopCount = 0;
var obj5281_onTap_activeActionGroupIndex = -1;
var obj5281_onTap_runningActionsCount = 0;
var obj5281_onTap_loopCount = 0;
var obj5299_onTap_activeActionGroupIndex = -1;
var obj5299_onTap_runningActionsCount = 0;
var obj5299_onTap_loopCount = 0;
var obj5290_onTap_activeActionGroupIndex = -1;
var obj5290_onTap_runningActionsCount = 0;
var obj5290_onTap_loopCount = 0;
var obj5317_onTap_activeActionGroupIndex = -1;
var obj5317_onTap_runningActionsCount = 0;
var obj5317_onTap_loopCount = 0;
var obj5308_onTap_activeActionGroupIndex = -1;
var obj5308_onTap_runningActionsCount = 0;
var obj5308_onTap_loopCount = 0;
var obj5335_onTap_activeActionGroupIndex = -1;
var obj5335_onTap_runningActionsCount = 0;
var obj5335_onTap_loopCount = 0;
var obj5326_onTap_activeActionGroupIndex = -1;
var obj5326_onTap_runningActionsCount = 0;
var obj5326_onTap_loopCount = 0;
var obj5353_onTap_activeActionGroupIndex = -1;
var obj5353_onTap_runningActionsCount = 0;
var obj5353_onTap_loopCount = 0;
var obj5373_SCEventRun_activeActionGroupIndex = -1;
var obj5373_SCEventRun_runningActionsCount = 0;
var obj5373_SCEventRun_loopCount = 0;
var obj5386_SCEventRun_activeActionGroupIndex = -1;
var obj5386_SCEventRun_runningActionsCount = 0;
var obj5386_SCEventRun_loopCount = 0;
var obj9405_onTap_activeActionGroupIndex = -1;
var obj9405_onTap_runningActionsCount = 0;
var obj9405_onTap_loopCount = 0;
var obj5468_onTap_activeActionGroupIndex = -1;
var obj5468_onTap_runningActionsCount = 0;
var obj5468_onTap_loopCount = 0;
var obj5461_onTap_activeActionGroupIndex = -1;
var obj5461_onTap_runningActionsCount = 0;
var obj5461_onTap_loopCount = 0;
var obj5454_onTap_activeActionGroupIndex = -1;
var obj5454_onTap_runningActionsCount = 0;
var obj5454_onTap_loopCount = 0;
var obj5447_onTap_activeActionGroupIndex = -1;
var obj5447_onTap_runningActionsCount = 0;
var obj5447_onTap_loopCount = 0;
var obj5438_onTap_activeActionGroupIndex = -1;
var obj5438_onTap_runningActionsCount = 0;
var obj5438_onTap_loopCount = 0;
var obj5431_onTap_activeActionGroupIndex = -1;
var obj5431_onTap_runningActionsCount = 0;
var obj5431_onTap_loopCount = 0;
var obj5424_onTap_activeActionGroupIndex = -1;
var obj5424_onTap_runningActionsCount = 0;
var obj5424_onTap_loopCount = 0;
var obj5417_onTap_activeActionGroupIndex = -1;
var obj5417_onTap_runningActionsCount = 0;
var obj5417_onTap_loopCount = 0;
var obj5410_onTap_activeActionGroupIndex = -1;
var obj5410_onTap_runningActionsCount = 0;
var obj5410_onTap_loopCount = 0;
var obj5397_SCEventRun_activeActionGroupIndex = -1;
var obj5397_SCEventRun_runningActionsCount = 0;
var obj5397_SCEventRun_loopCount = 0;
var obj9398_onTap_activeActionGroupIndex = -1;
var obj9398_onTap_runningActionsCount = 0;
var obj9398_onTap_loopCount = 0;
var obj5589_onTap_activeActionGroupIndex = -1;
var obj5589_onTap_runningActionsCount = 0;
var obj5589_onTap_loopCount = 0;
var obj5582_onTap_activeActionGroupIndex = -1;
var obj5582_onTap_runningActionsCount = 0;
var obj5582_onTap_loopCount = 0;
var obj5575_onTap_activeActionGroupIndex = -1;
var obj5575_onTap_runningActionsCount = 0;
var obj5575_onTap_loopCount = 0;
var obj5568_onTap_activeActionGroupIndex = -1;
var obj5568_onTap_runningActionsCount = 0;
var obj5568_onTap_loopCount = 0;
var obj5561_onTap_activeActionGroupIndex = -1;
var obj5561_onTap_runningActionsCount = 0;
var obj5561_onTap_loopCount = 0;
var obj5552_onTap_activeActionGroupIndex = -1;
var obj5552_onTap_runningActionsCount = 0;
var obj5552_onTap_loopCount = 0;
var obj5545_onTap_activeActionGroupIndex = -1;
var obj5545_onTap_runningActionsCount = 0;
var obj5545_onTap_loopCount = 0;
var obj5538_onTap_activeActionGroupIndex = -1;
var obj5538_onTap_runningActionsCount = 0;
var obj5538_onTap_loopCount = 0;
var obj5531_onTap_activeActionGroupIndex = -1;
var obj5531_onTap_runningActionsCount = 0;
var obj5531_onTap_loopCount = 0;
var obj5518_SCEventRun_activeActionGroupIndex = -1;
var obj5518_SCEventRun_runningActionsCount = 0;
var obj5518_SCEventRun_loopCount = 0;
var obj9391_onTap_activeActionGroupIndex = -1;
var obj9391_onTap_runningActionsCount = 0;
var obj9391_onTap_loopCount = 0;
var obj5692_onTap_activeActionGroupIndex = -1;
var obj5692_onTap_runningActionsCount = 0;
var obj5692_onTap_loopCount = 0;
var obj5685_onTap_activeActionGroupIndex = -1;
var obj5685_onTap_runningActionsCount = 0;
var obj5685_onTap_loopCount = 0;
var obj5678_onTap_activeActionGroupIndex = -1;
var obj5678_onTap_runningActionsCount = 0;
var obj5678_onTap_loopCount = 0;
var obj5671_onTap_activeActionGroupIndex = -1;
var obj5671_onTap_runningActionsCount = 0;
var obj5671_onTap_loopCount = 0;
var obj5664_onTap_activeActionGroupIndex = -1;
var obj5664_onTap_runningActionsCount = 0;
var obj5664_onTap_loopCount = 0;
var obj5657_onTap_activeActionGroupIndex = -1;
var obj5657_onTap_runningActionsCount = 0;
var obj5657_onTap_loopCount = 0;
var obj5648_onTap_activeActionGroupIndex = -1;
var obj5648_onTap_runningActionsCount = 0;
var obj5648_onTap_loopCount = 0;
var obj5641_onTap_activeActionGroupIndex = -1;
var obj5641_onTap_runningActionsCount = 0;
var obj5641_onTap_loopCount = 0;
var obj5634_onTap_activeActionGroupIndex = -1;
var obj5634_onTap_runningActionsCount = 0;
var obj5634_onTap_loopCount = 0;
var obj5621_SCEventRun_activeActionGroupIndex = -1;
var obj5621_SCEventRun_runningActionsCount = 0;
var obj5621_SCEventRun_loopCount = 0;
var obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5723_SCEventCounterReachedTargetValue_loopCount = 0;
var obj9438_onTap_activeActionGroupIndex = -1;
var obj9438_onTap_runningActionsCount = 0;
var obj9438_onTap_loopCount = 0;
var obj9432_onTap_activeActionGroupIndex = -1;
var obj9432_onTap_runningActionsCount = 0;
var obj9432_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj5723_counterValue = 0;
var obj5723_counterTargetValue = 4;
var obj5723_counterCanExceedTargetValue = false;

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
		
obj4713_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4713_onTap_activeActionGroupIndex = -1;
		$("#obj4713").trigger("obj4713_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4713) {
				console.warn("de-queueing event obj4713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4713_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4715();
function goToPage_4715() {
	window.obj4713_onTap_runningActionsCount = obj4713_onTap_runningActionsCount + 1;

	$("#anchor223")[0].click();
	window.obj4713_onTap_runningActionsCount = window.obj4713_onTap_runningActionsCount - 1;

if (window.obj4713_onTap_runningActionsCount < 0) {
	window.obj4713_onTap_runningActionsCount = 0;
} else if (window.obj4713_onTap_runningActionsCount == 0) {
	obj4713_onTap_actionGroup1();
}
}










































};
obj4713_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4713_onTap_activeActionGroupIndex = -1;
		$("#obj4713").trigger("obj4713_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4713) {
				console.warn("de-queueing event obj4713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4713_onTap_activeActionGroupIndex = 1;
	











































};
obj4716_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4716_onTap_activeActionGroupIndex = -1;
		$("#obj4716").trigger("obj4716_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4716) {
				console.warn("de-queueing event obj4716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4716_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4718();
function goToPage_4718() {
	window.obj4716_onTap_runningActionsCount = obj4716_onTap_runningActionsCount + 1;

	$("#anchor224")[0].click();
	window.obj4716_onTap_runningActionsCount = window.obj4716_onTap_runningActionsCount - 1;

if (window.obj4716_onTap_runningActionsCount < 0) {
	window.obj4716_onTap_runningActionsCount = 0;
} else if (window.obj4716_onTap_runningActionsCount == 0) {
	obj4716_onTap_actionGroup1();
}
}










































};
obj4716_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4716_onTap_activeActionGroupIndex = -1;
		$("#obj4716").trigger("obj4716_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4716) {
				console.warn("de-queueing event obj4716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4716_onTap_activeActionGroupIndex = 1;
	











































};
obj4723_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4723_onTap_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4723) {
				console.warn("de-queueing event obj4723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4723_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4725();
function goToPage_4725() {
	window.obj4723_onTap_runningActionsCount = obj4723_onTap_runningActionsCount + 1;

	$("#anchor225")[0].click();
	window.obj4723_onTap_runningActionsCount = window.obj4723_onTap_runningActionsCount - 1;

if (window.obj4723_onTap_runningActionsCount < 0) {
	window.obj4723_onTap_runningActionsCount = 0;
} else if (window.obj4723_onTap_runningActionsCount == 0) {
	obj4723_onTap_actionGroup1();
}
}










































};
obj4723_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4723_onTap_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4723) {
				console.warn("de-queueing event obj4723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4723_onTap_activeActionGroupIndex = 1;
	











































};
obj5078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5078_onTap_activeActionGroupIndex = -1;
		$("#obj5078").trigger("obj5078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5078) {
				console.warn("de-queueing event obj5078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5078_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5080();
function goToPage_5080() {
	window.obj5078_onTap_runningActionsCount = obj5078_onTap_runningActionsCount + 1;

	$("#anchor226")[0].click();
	window.obj5078_onTap_runningActionsCount = window.obj5078_onTap_runningActionsCount - 1;

if (window.obj5078_onTap_runningActionsCount < 0) {
	window.obj5078_onTap_runningActionsCount = 0;
} else if (window.obj5078_onTap_runningActionsCount == 0) {
	obj5078_onTap_actionGroup1();
}
}










































};
obj5078_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5078_onTap_activeActionGroupIndex = -1;
		$("#obj5078").trigger("obj5078_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5078) {
				console.warn("de-queueing event obj5078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5078_onTap_activeActionGroupIndex = 1;
	











































};
obj5249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5249_onTap_activeActionGroupIndex = -1;
		$("#obj5249").trigger("obj5249_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5249) {
				console.warn("de-queueing event obj5249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5249_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5360 
hide_5362();
function hide_5362() {
	var selector = "#obj5360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5362(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5121
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5121";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5243
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5243";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5269
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5269";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5281
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5281";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5299
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5299";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5290
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5290";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5317
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5317";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5308
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5308";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5335
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5335";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5326
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5326";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5353
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj5353";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj9412
(function(){
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;


	var selector = "#obj9412";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5258();
function playAudioFile_5258() {
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5258")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5258");
			$("#obj_audio_playSoundFile5258").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
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
				window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj5397 
runActionList_5475();
function runActionList_5475() {
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;

	$("#obj5397").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5518 
runActionList_5607();
function runActionList_5607() {
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;

	$("#obj5518").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5621 
runActionList_5722();
function runActionList_5722() {
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;

	$("#obj5621").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;

if (window.obj5249_onTap_runningActionsCount < 0) {
	window.obj5249_onTap_runningActionsCount = 0;
} else if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5249_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5249_onTap_activeActionGroupIndex = -1;
		$("#obj5249").trigger("obj5249_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5249) {
				console.warn("de-queueing event obj5249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5249_onTap_activeActionGroupIndex = 1;
	











































};
obj5251_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5251_onTap_activeActionGroupIndex = -1;
		$("#obj5251").trigger("obj5251_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5251) {
				console.warn("de-queueing event obj5251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5251_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5360 
hide_5363();
function hide_5363() {
	var selector = "#obj5360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5363(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5235
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5235";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5243
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5243";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5634
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5634";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5641
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5641";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5648
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5648";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5657
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5657";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5664
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5664";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5671
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5671";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5678
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5678";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5685
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5685";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5692
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj5692";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj9391
(function(){
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;


	var selector = "#obj9391";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5264();
function playAudioFile_5264() {
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5264")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5264");
			$("#obj_audio_playSoundFile5264").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
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
				window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj5397 
runActionList_5481();
function runActionList_5481() {
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;

	$("#obj5397").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5386 
runActionList_5482();
function runActionList_5482() {
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;

	$("#obj5386").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5518 
runActionList_5605();
function runActionList_5605() {
	window.obj5251_onTap_runningActionsCount = obj5251_onTap_runningActionsCount + 1;

	$("#obj5518").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5251_onTap_runningActionsCount = window.obj5251_onTap_runningActionsCount - 1;

if (window.obj5251_onTap_runningActionsCount < 0) {
	window.obj5251_onTap_runningActionsCount = 0;
} else if (window.obj5251_onTap_runningActionsCount == 0) {
	obj5251_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5251_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5251_onTap_activeActionGroupIndex = -1;
		$("#obj5251").trigger("obj5251_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5251) {
				console.warn("de-queueing event obj5251." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5251").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5251_onTap_activeActionGroupIndex = 1;
	











































};
obj5253_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5253_onTap_activeActionGroupIndex = -1;
		$("#obj5253").trigger("obj5253_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5253) {
				console.warn("de-queueing event obj5253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5253_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5360 
hide_5364();
function hide_5364() {
	var selector = "#obj5360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5364(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5239
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5239";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5243
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5243";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5531
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5531";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5538
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5538";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5545
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5545";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5552
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5552";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5561
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5561";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5568
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5568";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5575
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5575";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5582
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5582";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5589
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj5589";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj9398
(function(){
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;


	var selector = "#obj9398";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5267();
function playAudioFile_5267() {
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5267")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5267");
			$("#obj_audio_playSoundFile5267").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
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
				window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj5397 
runActionList_5476();
function runActionList_5476() {
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;

	$("#obj5397").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5386 
runActionList_5479();
function runActionList_5479() {
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;

	$("#obj5386").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5621 
runActionList_5720();
function runActionList_5720() {
	window.obj5253_onTap_runningActionsCount = obj5253_onTap_runningActionsCount + 1;

	$("#obj5621").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5253_onTap_runningActionsCount = window.obj5253_onTap_runningActionsCount - 1;

if (window.obj5253_onTap_runningActionsCount < 0) {
	window.obj5253_onTap_runningActionsCount = 0;
} else if (window.obj5253_onTap_runningActionsCount == 0) {
	obj5253_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5253_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5253_onTap_activeActionGroupIndex = -1;
		$("#obj5253").trigger("obj5253_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5253) {
				console.warn("de-queueing event obj5253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5253_onTap_activeActionGroupIndex = 1;
	











































};
obj5255_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5255_onTap_activeActionGroupIndex = -1;
		$("#obj5255").trigger("obj5255_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5255) {
				console.warn("de-queueing event obj5255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5255_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5360 
hide_5365();
function hide_5365() {
	var selector = "#obj5360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5365(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5231
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5231";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5243
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5243";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5468
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5468";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5461
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5461";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5454
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5454";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5447
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5447";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5438
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5438";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5431
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5431";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5424
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5424";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5417
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5417";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5410
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj5410";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj9405
(function(){
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;


	var selector = "#obj9405";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5261();
function playAudioFile_5261() {
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5261")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5261");
			$("#obj_audio_playSoundFile5261").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
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
				window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj5386 
runActionList_5478();
function runActionList_5478() {
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;

	$("#obj5386").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5518 
runActionList_5608();
function runActionList_5608() {
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;

	$("#obj5518").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj5621 
runActionList_5721();
function runActionList_5721() {
	window.obj5255_onTap_runningActionsCount = obj5255_onTap_runningActionsCount + 1;

	$("#obj5621").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5255_onTap_runningActionsCount = window.obj5255_onTap_runningActionsCount - 1;

if (window.obj5255_onTap_runningActionsCount < 0) {
	window.obj5255_onTap_runningActionsCount = 0;
} else if (window.obj5255_onTap_runningActionsCount == 0) {
	obj5255_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5255_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5255_onTap_activeActionGroupIndex = -1;
		$("#obj5255").trigger("obj5255_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5255) {
				console.warn("de-queueing event obj5255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5255_onTap_activeActionGroupIndex = 1;
	











































};
obj9412_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_onTap_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9412) {
				console.warn("de-queueing event obj9412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9412_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9389
(function(){
	window.obj9412_onTap_runningActionsCount = obj9412_onTap_runningActionsCount + 1;


	var selector = "#obj9389";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_9414();
function playAudioFile_9414() {
	window.obj9412_onTap_runningActionsCount = obj9412_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9414")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9414");
			$("#obj_audio_playSoundFile9414").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
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
				window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_9415();
function switchText_9415() {
	window.obj9412_onTap_runningActionsCount = obj9412_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9412_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9412_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9412").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9412_content");
			setTimeout(function () {
				window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj9412 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj9412_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_onTap_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9412) {
				console.warn("de-queueing event obj9412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9412_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_9417();
function wait_9417() {
	window.obj9412_onTap_runningActionsCount = obj9412_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup2();
}
	}, 500);
}


























};
obj9412_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_onTap_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9412) {
				console.warn("de-queueing event obj9412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9412_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_9418();
function switchText_9418() {
	window.obj9412_onTap_runningActionsCount = obj9412_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9412_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9412_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9412").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9412_content");
			setTimeout(function () {
				window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj9412 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9412_onTap_runningActionsCount = window.obj9412_onTap_runningActionsCount - 1;

if (window.obj9412_onTap_runningActionsCount < 0) {
	window.obj9412_onTap_runningActionsCount = 0;
} else if (window.obj9412_onTap_runningActionsCount == 0) {
	obj9412_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj9412_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9412_onTap_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9412) {
				console.warn("de-queueing event obj9412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9412_onTap_activeActionGroupIndex = 3;
	











































};
obj5269_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5269_onTap_activeActionGroupIndex = -1;
		$("#obj5269").trigger("obj5269_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5269) {
				console.warn("de-queueing event obj5269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5269_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5276
(function(){
	window.obj5269_onTap_runningActionsCount = obj5269_onTap_runningActionsCount + 1;


	var selector = "#obj5276";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5272();
function playAudioFile_5272() {
	window.obj5269_onTap_runningActionsCount = obj5269_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5272")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5272");
			$("#obj_audio_playSoundFile5272").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
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
				window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5273();
function switchText_5273() {
	window.obj5269_onTap_runningActionsCount = obj5269_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5269_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5269_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5269").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5269_content");
			setTimeout(function () {
				window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5269 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5269_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5269_onTap_activeActionGroupIndex = -1;
		$("#obj5269").trigger("obj5269_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5269) {
				console.warn("de-queueing event obj5269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5269_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5274();
function wait_5274() {
	window.obj5269_onTap_runningActionsCount = obj5269_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5269_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5269_onTap_activeActionGroupIndex = -1;
		$("#obj5269").trigger("obj5269_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5269) {
				console.warn("de-queueing event obj5269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5269_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5275();
function switchText_5275() {
	window.obj5269_onTap_runningActionsCount = obj5269_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5269_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5269_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5269").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5269_content");
			setTimeout(function () {
				window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5269 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5269_onTap_runningActionsCount = window.obj5269_onTap_runningActionsCount - 1;

if (window.obj5269_onTap_runningActionsCount < 0) {
	window.obj5269_onTap_runningActionsCount = 0;
} else if (window.obj5269_onTap_runningActionsCount == 0) {
	obj5269_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5269_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5269_onTap_activeActionGroupIndex = -1;
		$("#obj5269").trigger("obj5269_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5269) {
				console.warn("de-queueing event obj5269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5269_onTap_activeActionGroupIndex = 3;
	











































};
obj5281_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5281_onTap_activeActionGroupIndex = -1;
		$("#obj5281").trigger("obj5281_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5281) {
				console.warn("de-queueing event obj5281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5281_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5279
(function(){
	window.obj5281_onTap_runningActionsCount = obj5281_onTap_runningActionsCount + 1;


	var selector = "#obj5279";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5283();
function playAudioFile_5283() {
	window.obj5281_onTap_runningActionsCount = obj5281_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5283")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5283");
			$("#obj_audio_playSoundFile5283").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
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
				window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5284();
function switchText_5284() {
	window.obj5281_onTap_runningActionsCount = obj5281_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5281_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5281_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5281").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5281_content");
			setTimeout(function () {
				window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5281 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5281_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5281_onTap_activeActionGroupIndex = -1;
		$("#obj5281").trigger("obj5281_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5281) {
				console.warn("de-queueing event obj5281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5281_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5286();
function wait_5286() {
	window.obj5281_onTap_runningActionsCount = obj5281_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5281_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5281_onTap_activeActionGroupIndex = -1;
		$("#obj5281").trigger("obj5281_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5281) {
				console.warn("de-queueing event obj5281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5281_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5287();
function switchText_5287() {
	window.obj5281_onTap_runningActionsCount = obj5281_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5281_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5281_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5281").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5281_content");
			setTimeout(function () {
				window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5281 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5281_onTap_runningActionsCount = window.obj5281_onTap_runningActionsCount - 1;

if (window.obj5281_onTap_runningActionsCount < 0) {
	window.obj5281_onTap_runningActionsCount = 0;
} else if (window.obj5281_onTap_runningActionsCount == 0) {
	obj5281_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5281_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5281_onTap_activeActionGroupIndex = -1;
		$("#obj5281").trigger("obj5281_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5281) {
				console.warn("de-queueing event obj5281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5281_onTap_activeActionGroupIndex = 3;
	











































};
obj5299_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5299_onTap_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5299) {
				console.warn("de-queueing event obj5299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5299_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5297
(function(){
	window.obj5299_onTap_runningActionsCount = obj5299_onTap_runningActionsCount + 1;


	var selector = "#obj5297";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5301();
function playAudioFile_5301() {
	window.obj5299_onTap_runningActionsCount = obj5299_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5301")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5301");
			$("#obj_audio_playSoundFile5301").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
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
				window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5302();
function switchText_5302() {
	window.obj5299_onTap_runningActionsCount = obj5299_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5299_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5299_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5299").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5299_content");
			setTimeout(function () {
				window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5299 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5299_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5299_onTap_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5299) {
				console.warn("de-queueing event obj5299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5299_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5304();
function wait_5304() {
	window.obj5299_onTap_runningActionsCount = obj5299_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5299_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5299_onTap_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5299) {
				console.warn("de-queueing event obj5299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5299_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5305();
function switchText_5305() {
	window.obj5299_onTap_runningActionsCount = obj5299_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5299_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5299_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5299").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5299_content");
			setTimeout(function () {
				window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5299 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5299_onTap_runningActionsCount = window.obj5299_onTap_runningActionsCount - 1;

if (window.obj5299_onTap_runningActionsCount < 0) {
	window.obj5299_onTap_runningActionsCount = 0;
} else if (window.obj5299_onTap_runningActionsCount == 0) {
	obj5299_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5299_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5299_onTap_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5299) {
				console.warn("de-queueing event obj5299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5299_onTap_activeActionGroupIndex = 3;
	











































};
obj5290_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5290_onTap_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5290) {
				console.warn("de-queueing event obj5290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5290_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5288
(function(){
	window.obj5290_onTap_runningActionsCount = obj5290_onTap_runningActionsCount + 1;


	var selector = "#obj5288";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5292();
function playAudioFile_5292() {
	window.obj5290_onTap_runningActionsCount = obj5290_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5292")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5292");
			$("#obj_audio_playSoundFile5292").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
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
				window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5293();
function switchText_5293() {
	window.obj5290_onTap_runningActionsCount = obj5290_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5290_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5290_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5290").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5290_content");
			setTimeout(function () {
				window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5290 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5290_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5290_onTap_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5290) {
				console.warn("de-queueing event obj5290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5290_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5295();
function wait_5295() {
	window.obj5290_onTap_runningActionsCount = obj5290_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5290_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5290_onTap_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5290) {
				console.warn("de-queueing event obj5290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5290_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5296();
function switchText_5296() {
	window.obj5290_onTap_runningActionsCount = obj5290_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5290_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5290_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5290").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5290_content");
			setTimeout(function () {
				window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5290 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5290_onTap_runningActionsCount = window.obj5290_onTap_runningActionsCount - 1;

if (window.obj5290_onTap_runningActionsCount < 0) {
	window.obj5290_onTap_runningActionsCount = 0;
} else if (window.obj5290_onTap_runningActionsCount == 0) {
	obj5290_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5290_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5290_onTap_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5290) {
				console.warn("de-queueing event obj5290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5290_onTap_activeActionGroupIndex = 3;
	











































};
obj5317_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5317_onTap_activeActionGroupIndex = -1;
		$("#obj5317").trigger("obj5317_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5317) {
				console.warn("de-queueing event obj5317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5317_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5243 
hide_5371();
function hide_5371() {
	var selector = "#obj5243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5371(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5249 
hide_5372();
function hide_5372() {
	var selector = "#obj5249";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5372(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5121 
hide_5368();
function hide_5368() {
	var selector = "#obj5121";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5368(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5360
(function(){
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;


	var selector = "#obj5360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5366
(function(){
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;


	var selector = "#obj5366";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5319();
function playAudioFile_5319() {
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5319")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5319");
			$("#obj_audio_playSoundFile5319").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
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
				window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj5723 
incrementCounter_5730();
function incrementCounter_5730() {
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;


	var oldValue = obj5723_counterValue;
	obj5723_counterValue = obj5723_counterValue + 1;
	if (! obj5723_counterCanExceedTargetValue && obj5723_counterValue > obj5723_counterTargetValue) {
		obj5723_counterValue = obj5723_counterTargetValue;
	}

	if (oldValue != obj5723_counterValue) {
		$("#obj5723").trigger('SCEventCounterValueChange');
		$("#obj5723").trigger('SCEventCounterIncrease');
		if (obj5723_counterValue == obj5723_counterTargetValue)
			$("#obj5723").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
} }, 1);
}



//	action: run action list container
//	target: obj5373 
runActionList_5385();
function runActionList_5385() {
	window.obj5317_onTap_runningActionsCount = obj5317_onTap_runningActionsCount + 1;

	$("#obj5373").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5317_onTap_runningActionsCount = window.obj5317_onTap_runningActionsCount - 1;

if (window.obj5317_onTap_runningActionsCount < 0) {
	window.obj5317_onTap_runningActionsCount = 0;
} else if (window.obj5317_onTap_runningActionsCount == 0) {
	obj5317_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5317_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5317_onTap_activeActionGroupIndex = -1;
		$("#obj5317").trigger("obj5317_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5317) {
				console.warn("de-queueing event obj5317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5317_onTap_activeActionGroupIndex = 1;
	











































};
obj5308_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5308_onTap_activeActionGroupIndex = -1;
		$("#obj5308").trigger("obj5308_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5308) {
				console.warn("de-queueing event obj5308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5308_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5306
(function(){
	window.obj5308_onTap_runningActionsCount = obj5308_onTap_runningActionsCount + 1;


	var selector = "#obj5306";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5310();
function playAudioFile_5310() {
	window.obj5308_onTap_runningActionsCount = obj5308_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5310")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5310");
			$("#obj_audio_playSoundFile5310").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
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
				window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5311();
function switchText_5311() {
	window.obj5308_onTap_runningActionsCount = obj5308_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">6</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5308_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5308_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5308").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5308_content");
			setTimeout(function () {
				window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5308 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5308_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5308_onTap_activeActionGroupIndex = -1;
		$("#obj5308").trigger("obj5308_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5308) {
				console.warn("de-queueing event obj5308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5308_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5313();
function wait_5313() {
	window.obj5308_onTap_runningActionsCount = obj5308_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5308_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5308_onTap_activeActionGroupIndex = -1;
		$("#obj5308").trigger("obj5308_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5308) {
				console.warn("de-queueing event obj5308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5308_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5314();
function switchText_5314() {
	window.obj5308_onTap_runningActionsCount = obj5308_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">6</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5308_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5308_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5308").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5308_content");
			setTimeout(function () {
				window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5308 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5308_onTap_runningActionsCount = window.obj5308_onTap_runningActionsCount - 1;

if (window.obj5308_onTap_runningActionsCount < 0) {
	window.obj5308_onTap_runningActionsCount = 0;
} else if (window.obj5308_onTap_runningActionsCount == 0) {
	obj5308_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5308_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5308_onTap_activeActionGroupIndex = -1;
		$("#obj5308").trigger("obj5308_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5308) {
				console.warn("de-queueing event obj5308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5308_onTap_activeActionGroupIndex = 3;
	











































};
obj5335_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5335_onTap_activeActionGroupIndex = -1;
		$("#obj5335").trigger("obj5335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5335) {
				console.warn("de-queueing event obj5335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5335_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5333
(function(){
	window.obj5335_onTap_runningActionsCount = obj5335_onTap_runningActionsCount + 1;


	var selector = "#obj5333";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5337();
function playAudioFile_5337() {
	window.obj5335_onTap_runningActionsCount = obj5335_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5337")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5337");
			$("#obj_audio_playSoundFile5337").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
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
				window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5338();
function switchText_5338() {
	window.obj5335_onTap_runningActionsCount = obj5335_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5335").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5335_content");
			setTimeout(function () {
				window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5335_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5335_onTap_activeActionGroupIndex = -1;
		$("#obj5335").trigger("obj5335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5335) {
				console.warn("de-queueing event obj5335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5335_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5340();
function wait_5340() {
	window.obj5335_onTap_runningActionsCount = obj5335_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5335_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5335_onTap_activeActionGroupIndex = -1;
		$("#obj5335").trigger("obj5335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5335) {
				console.warn("de-queueing event obj5335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5335_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5341();
function switchText_5341() {
	window.obj5335_onTap_runningActionsCount = obj5335_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5335").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5335_content");
			setTimeout(function () {
				window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5335_onTap_runningActionsCount = window.obj5335_onTap_runningActionsCount - 1;

if (window.obj5335_onTap_runningActionsCount < 0) {
	window.obj5335_onTap_runningActionsCount = 0;
} else if (window.obj5335_onTap_runningActionsCount == 0) {
	obj5335_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5335_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5335_onTap_activeActionGroupIndex = -1;
		$("#obj5335").trigger("obj5335_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5335) {
				console.warn("de-queueing event obj5335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5335_onTap_activeActionGroupIndex = 3;
	











































};
obj5326_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5326_onTap_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5326) {
				console.warn("de-queueing event obj5326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5326_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5324
(function(){
	window.obj5326_onTap_runningActionsCount = obj5326_onTap_runningActionsCount + 1;


	var selector = "#obj5324";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5328();
function playAudioFile_5328() {
	window.obj5326_onTap_runningActionsCount = obj5326_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5328")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5328");
			$("#obj_audio_playSoundFile5328").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
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
				window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5329();
function switchText_5329() {
	window.obj5326_onTap_runningActionsCount = obj5326_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">8</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5326_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5326_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5326").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5326_content");
			setTimeout(function () {
				window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5326 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5326_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5326_onTap_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5326) {
				console.warn("de-queueing event obj5326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5326_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5331();
function wait_5331() {
	window.obj5326_onTap_runningActionsCount = obj5326_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5326_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5326_onTap_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5326) {
				console.warn("de-queueing event obj5326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5326_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5332();
function switchText_5332() {
	window.obj5326_onTap_runningActionsCount = obj5326_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">8</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5326_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5326_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5326").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5326_content");
			setTimeout(function () {
				window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5326 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5326_onTap_runningActionsCount = window.obj5326_onTap_runningActionsCount - 1;

if (window.obj5326_onTap_runningActionsCount < 0) {
	window.obj5326_onTap_runningActionsCount = 0;
} else if (window.obj5326_onTap_runningActionsCount == 0) {
	obj5326_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5326_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5326_onTap_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5326) {
				console.warn("de-queueing event obj5326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5326_onTap_activeActionGroupIndex = 3;
	











































};
obj5353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5353_onTap_activeActionGroupIndex = -1;
		$("#obj5353").trigger("obj5353_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5353) {
				console.warn("de-queueing event obj5353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5353_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5351
(function(){
	window.obj5353_onTap_runningActionsCount = obj5353_onTap_runningActionsCount + 1;


	var selector = "#obj5351";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5355();
function playAudioFile_5355() {
	window.obj5353_onTap_runningActionsCount = obj5353_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5355")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5355");
			$("#obj_audio_playSoundFile5355").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
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
				window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5356();
function switchText_5356() {
	window.obj5353_onTap_runningActionsCount = obj5353_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5353_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5353_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5353").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5353_content");
			setTimeout(function () {
				window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5353 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5353_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5353_onTap_activeActionGroupIndex = -1;
		$("#obj5353").trigger("obj5353_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5353) {
				console.warn("de-queueing event obj5353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5353_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5358();
function wait_5358() {
	window.obj5353_onTap_runningActionsCount = obj5353_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5353_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5353_onTap_activeActionGroupIndex = -1;
		$("#obj5353").trigger("obj5353_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5353) {
				console.warn("de-queueing event obj5353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5353_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5359();
function switchText_5359() {
	window.obj5353_onTap_runningActionsCount = obj5353_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5353_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5353_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5353").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5353_content");
			setTimeout(function () {
				window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5353 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;

if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5353_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5353_onTap_activeActionGroupIndex = -1;
		$("#obj5353").trigger("obj5353_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5353) {
				console.warn("de-queueing event obj5353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5353_onTap_activeActionGroupIndex = 3;
	











































};
obj5373_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5373_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5373").trigger("obj5373_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5373) {
				console.warn("de-queueing event obj5373." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5373").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5373_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5351 
hide_5375();
function hide_5375() {
	var selector = "#obj5351";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5375(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5324 
hide_5376();
function hide_5376() {
	var selector = "#obj5324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5376(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5306 
hide_5378();
function hide_5378() {
	var selector = "#obj5306";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5378(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5315 
hide_5379();
function hide_5379() {
	var selector = "#obj5315";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5379(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5288 
hide_5380();
function hide_5380() {
	var selector = "#obj5288";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5380(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5297 
hide_5381();
function hide_5381() {
	var selector = "#obj5297";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5381(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5279 
hide_5382();
function hide_5382() {
	var selector = "#obj5279";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5382(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5276 
hide_5383();
function hide_5383() {
	var selector = "#obj5276";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5383(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5333 
hide_5377();
function hide_5377() {
	var selector = "#obj5333";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5377(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj9389 
hide_9423();
function hide_9423() {
	var selector = "#obj9389";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5373_SCEventRun_runningActionsCount = obj5373_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9423(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5373_SCEventRun_runningActionsCount = window.obj5373_SCEventRun_runningActionsCount - 1;

if (window.obj5373_SCEventRun_runningActionsCount < 0) {
	window.obj5373_SCEventRun_runningActionsCount = 0;
} else if (window.obj5373_SCEventRun_runningActionsCount == 0) {
	obj5373_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5373_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5373_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5373").trigger("obj5373_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5373) {
				console.warn("de-queueing event obj5373." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5373").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5373_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj5386_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5386_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5386").trigger("obj5386_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5386) {
				console.warn("de-queueing event obj5386." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5386").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5386_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5353 
hide_5388();
function hide_5388() {
	var selector = "#obj5353";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5388(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5326 
hide_5389();
function hide_5389() {
	var selector = "#obj5326";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5389(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5335 
hide_5390();
function hide_5390() {
	var selector = "#obj5335";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5390(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5308 
hide_5391();
function hide_5391() {
	var selector = "#obj5308";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5391(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5317 
hide_5392();
function hide_5392() {
	var selector = "#obj5317";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5392(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5290 
hide_5393();
function hide_5393() {
	var selector = "#obj5290";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5393(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5269 
hide_5396();
function hide_5396() {
	var selector = "#obj5269";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5396(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5299 
hide_5394();
function hide_5394() {
	var selector = "#obj5299";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5394(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5281 
hide_5395();
function hide_5395() {
	var selector = "#obj5281";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5395(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj9412 
hide_9422();
function hide_9422() {
	var selector = "#obj9412";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5386_SCEventRun_runningActionsCount = obj5386_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9422(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5386_SCEventRun_runningActionsCount = window.obj5386_SCEventRun_runningActionsCount - 1;

if (window.obj5386_SCEventRun_runningActionsCount < 0) {
	window.obj5386_SCEventRun_runningActionsCount = 0;
} else if (window.obj5386_SCEventRun_runningActionsCount == 0) {
	obj5386_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5386_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5386_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5386").trigger("obj5386_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5386) {
				console.warn("de-queueing event obj5386." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5386").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5386_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj9405_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9405_onTap_activeActionGroupIndex = -1;
		$("#obj9405").trigger("obj9405_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9405) {
				console.warn("de-queueing event obj9405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9405_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9389
(function(){
	window.obj9405_onTap_runningActionsCount = obj9405_onTap_runningActionsCount + 1;


	var selector = "#obj9389";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_9407();
function playAudioFile_9407() {
	window.obj9405_onTap_runningActionsCount = obj9405_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9407")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9407");
			$("#obj_audio_playSoundFile9407").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
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
				window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_9408();
function switchText_9408() {
	window.obj9405_onTap_runningActionsCount = obj9405_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9405_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9405_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9405").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9405_content");
			setTimeout(function () {
				window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj9405 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj9405_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9405_onTap_activeActionGroupIndex = -1;
		$("#obj9405").trigger("obj9405_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9405) {
				console.warn("de-queueing event obj9405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9405_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_9410();
function wait_9410() {
	window.obj9405_onTap_runningActionsCount = obj9405_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup2();
}
	}, 500);
}


























};
obj9405_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9405_onTap_activeActionGroupIndex = -1;
		$("#obj9405").trigger("obj9405_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9405) {
				console.warn("de-queueing event obj9405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9405_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_9411();
function switchText_9411() {
	window.obj9405_onTap_runningActionsCount = obj9405_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9405_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9405_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9405").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9405_content");
			setTimeout(function () {
				window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj9405 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9405_onTap_runningActionsCount = window.obj9405_onTap_runningActionsCount - 1;

if (window.obj9405_onTap_runningActionsCount < 0) {
	window.obj9405_onTap_runningActionsCount = 0;
} else if (window.obj9405_onTap_runningActionsCount == 0) {
	obj9405_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj9405_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9405_onTap_activeActionGroupIndex = -1;
		$("#obj9405").trigger("obj9405_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9405) {
				console.warn("de-queueing event obj9405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9405_onTap_activeActionGroupIndex = 3;
	











































};
obj5468_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5468_onTap_activeActionGroupIndex = -1;
		$("#obj5468").trigger("obj5468_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5468) {
				console.warn("de-queueing event obj5468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5468_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5276
(function(){
	window.obj5468_onTap_runningActionsCount = obj5468_onTap_runningActionsCount + 1;


	var selector = "#obj5276";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5470();
function playAudioFile_5470() {
	window.obj5468_onTap_runningActionsCount = obj5468_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5470")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5470");
			$("#obj_audio_playSoundFile5470").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
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
				window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5471();
function switchText_5471() {
	window.obj5468_onTap_runningActionsCount = obj5468_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5468_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5468_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5468").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5468_content");
			setTimeout(function () {
				window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5468 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5468_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5468_onTap_activeActionGroupIndex = -1;
		$("#obj5468").trigger("obj5468_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5468) {
				console.warn("de-queueing event obj5468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5468_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5473();
function wait_5473() {
	window.obj5468_onTap_runningActionsCount = obj5468_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5468_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5468_onTap_activeActionGroupIndex = -1;
		$("#obj5468").trigger("obj5468_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5468) {
				console.warn("de-queueing event obj5468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5468_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5474();
function switchText_5474() {
	window.obj5468_onTap_runningActionsCount = obj5468_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5468_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5468_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5468").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5468_content");
			setTimeout(function () {
				window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5468 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5468_onTap_runningActionsCount = window.obj5468_onTap_runningActionsCount - 1;

if (window.obj5468_onTap_runningActionsCount < 0) {
	window.obj5468_onTap_runningActionsCount = 0;
} else if (window.obj5468_onTap_runningActionsCount == 0) {
	obj5468_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5468_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5468_onTap_activeActionGroupIndex = -1;
		$("#obj5468").trigger("obj5468_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5468) {
				console.warn("de-queueing event obj5468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5468_onTap_activeActionGroupIndex = 3;
	











































};
obj5461_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5461_onTap_activeActionGroupIndex = -1;
		$("#obj5461").trigger("obj5461_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5461) {
				console.warn("de-queueing event obj5461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5461_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5279
(function(){
	window.obj5461_onTap_runningActionsCount = obj5461_onTap_runningActionsCount + 1;


	var selector = "#obj5279";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5463();
function playAudioFile_5463() {
	window.obj5461_onTap_runningActionsCount = obj5461_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5463")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5463");
			$("#obj_audio_playSoundFile5463").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
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
				window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5464();
function switchText_5464() {
	window.obj5461_onTap_runningActionsCount = obj5461_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5461_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5461_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5461").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5461_content");
			setTimeout(function () {
				window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5461 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5461_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5461_onTap_activeActionGroupIndex = -1;
		$("#obj5461").trigger("obj5461_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5461) {
				console.warn("de-queueing event obj5461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5461_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5466();
function wait_5466() {
	window.obj5461_onTap_runningActionsCount = obj5461_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5461_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5461_onTap_activeActionGroupIndex = -1;
		$("#obj5461").trigger("obj5461_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5461) {
				console.warn("de-queueing event obj5461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5461_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5467();
function switchText_5467() {
	window.obj5461_onTap_runningActionsCount = obj5461_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5461_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5461_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5461").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5461_content");
			setTimeout(function () {
				window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5461 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5461_onTap_runningActionsCount = window.obj5461_onTap_runningActionsCount - 1;

if (window.obj5461_onTap_runningActionsCount < 0) {
	window.obj5461_onTap_runningActionsCount = 0;
} else if (window.obj5461_onTap_runningActionsCount == 0) {
	obj5461_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5461_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5461_onTap_activeActionGroupIndex = -1;
		$("#obj5461").trigger("obj5461_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5461) {
				console.warn("de-queueing event obj5461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5461_onTap_activeActionGroupIndex = 3;
	











































};
obj5454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5454_onTap_activeActionGroupIndex = -1;
		$("#obj5454").trigger("obj5454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5454) {
				console.warn("de-queueing event obj5454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5454_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5297
(function(){
	window.obj5454_onTap_runningActionsCount = obj5454_onTap_runningActionsCount + 1;


	var selector = "#obj5297";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5456();
function playAudioFile_5456() {
	window.obj5454_onTap_runningActionsCount = obj5454_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5456")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5456");
			$("#obj_audio_playSoundFile5456").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
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
				window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5457();
function switchText_5457() {
	window.obj5454_onTap_runningActionsCount = obj5454_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5454_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5454_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5454").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5454_content");
			setTimeout(function () {
				window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5454 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5454_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5454_onTap_activeActionGroupIndex = -1;
		$("#obj5454").trigger("obj5454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5454) {
				console.warn("de-queueing event obj5454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5454_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5459();
function wait_5459() {
	window.obj5454_onTap_runningActionsCount = obj5454_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5454_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5454_onTap_activeActionGroupIndex = -1;
		$("#obj5454").trigger("obj5454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5454) {
				console.warn("de-queueing event obj5454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5454_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5460();
function switchText_5460() {
	window.obj5454_onTap_runningActionsCount = obj5454_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5454_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5454_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5454").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5454_content");
			setTimeout(function () {
				window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5454 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5454_onTap_runningActionsCount = window.obj5454_onTap_runningActionsCount - 1;

if (window.obj5454_onTap_runningActionsCount < 0) {
	window.obj5454_onTap_runningActionsCount = 0;
} else if (window.obj5454_onTap_runningActionsCount == 0) {
	obj5454_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5454_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5454_onTap_activeActionGroupIndex = -1;
		$("#obj5454").trigger("obj5454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5454) {
				console.warn("de-queueing event obj5454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5454_onTap_activeActionGroupIndex = 3;
	











































};
obj5447_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5447_onTap_activeActionGroupIndex = -1;
		$("#obj5447").trigger("obj5447_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5447) {
				console.warn("de-queueing event obj5447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5447_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5288
(function(){
	window.obj5447_onTap_runningActionsCount = obj5447_onTap_runningActionsCount + 1;


	var selector = "#obj5288";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5449();
function playAudioFile_5449() {
	window.obj5447_onTap_runningActionsCount = obj5447_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5449")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5449");
			$("#obj_audio_playSoundFile5449").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
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
				window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5450();
function switchText_5450() {
	window.obj5447_onTap_runningActionsCount = obj5447_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5447_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5447_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5447").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5447_content");
			setTimeout(function () {
				window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5447 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5447_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5447_onTap_activeActionGroupIndex = -1;
		$("#obj5447").trigger("obj5447_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5447) {
				console.warn("de-queueing event obj5447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5447_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5452();
function wait_5452() {
	window.obj5447_onTap_runningActionsCount = obj5447_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5447_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5447_onTap_activeActionGroupIndex = -1;
		$("#obj5447").trigger("obj5447_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5447) {
				console.warn("de-queueing event obj5447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5447_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5453();
function switchText_5453() {
	window.obj5447_onTap_runningActionsCount = obj5447_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5447_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5447_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5447").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5447_content");
			setTimeout(function () {
				window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5447 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5447_onTap_runningActionsCount = window.obj5447_onTap_runningActionsCount - 1;

if (window.obj5447_onTap_runningActionsCount < 0) {
	window.obj5447_onTap_runningActionsCount = 0;
} else if (window.obj5447_onTap_runningActionsCount == 0) {
	obj5447_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5447_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5447_onTap_activeActionGroupIndex = -1;
		$("#obj5447").trigger("obj5447_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5447) {
				console.warn("de-queueing event obj5447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5447_onTap_activeActionGroupIndex = 3;
	











































};
obj5438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5438_onTap_activeActionGroupIndex = -1;
		$("#obj5438").trigger("obj5438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5438) {
				console.warn("de-queueing event obj5438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5438_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5315
(function(){
	window.obj5438_onTap_runningActionsCount = obj5438_onTap_runningActionsCount + 1;


	var selector = "#obj5315";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5513();
function playAudioFile_5513() {
	window.obj5438_onTap_runningActionsCount = obj5438_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5513")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5513");
			$("#obj_audio_playSoundFile5513").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
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
				window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5514();
function switchText_5514() {
	window.obj5438_onTap_runningActionsCount = obj5438_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">5</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5438_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5438_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5438").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5438_content");
			setTimeout(function () {
				window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5438 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5438_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5438_onTap_activeActionGroupIndex = -1;
		$("#obj5438").trigger("obj5438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5438) {
				console.warn("de-queueing event obj5438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5438_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5516();
function wait_5516() {
	window.obj5438_onTap_runningActionsCount = obj5438_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5438_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5438_onTap_activeActionGroupIndex = -1;
		$("#obj5438").trigger("obj5438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5438) {
				console.warn("de-queueing event obj5438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5438_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5517();
function switchText_5517() {
	window.obj5438_onTap_runningActionsCount = obj5438_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">5</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5438_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5438_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5438").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5438_content");
			setTimeout(function () {
				window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5438 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5438_onTap_runningActionsCount = window.obj5438_onTap_runningActionsCount - 1;

if (window.obj5438_onTap_runningActionsCount < 0) {
	window.obj5438_onTap_runningActionsCount = 0;
} else if (window.obj5438_onTap_runningActionsCount == 0) {
	obj5438_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5438_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5438_onTap_activeActionGroupIndex = -1;
		$("#obj5438").trigger("obj5438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5438) {
				console.warn("de-queueing event obj5438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5438_onTap_activeActionGroupIndex = 3;
	











































};
obj5431_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5431_onTap_activeActionGroupIndex = -1;
		$("#obj5431").trigger("obj5431_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5431) {
				console.warn("de-queueing event obj5431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5431_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5243 
hide_5508();
function hide_5508() {
	var selector = "#obj5243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5508(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5255 
hide_5509();
function hide_5509() {
	var selector = "#obj5255";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5509(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5231 
hide_5510();
function hide_5510() {
	var selector = "#obj5231";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5510(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5360
(function(){
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;


	var selector = "#obj5360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5408
(function(){
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;


	var selector = "#obj5408";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5506();
function playAudioFile_5506() {
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5506")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5506");
			$("#obj_audio_playSoundFile5506").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
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
				window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj5723 
incrementCounter_5731();
function incrementCounter_5731() {
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;


	var oldValue = obj5723_counterValue;
	obj5723_counterValue = obj5723_counterValue + 1;
	if (! obj5723_counterCanExceedTargetValue && obj5723_counterValue > obj5723_counterTargetValue) {
		obj5723_counterValue = obj5723_counterTargetValue;
	}

	if (oldValue != obj5723_counterValue) {
		$("#obj5723").trigger('SCEventCounterValueChange');
		$("#obj5723").trigger('SCEventCounterIncrease');
		if (obj5723_counterValue == obj5723_counterTargetValue)
			$("#obj5723").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
} }, 1);
}



//	action: run action list container
//	target: obj5373 
runActionList_5512();
function runActionList_5512() {
	window.obj5431_onTap_runningActionsCount = obj5431_onTap_runningActionsCount + 1;

	$("#obj5373").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5431_onTap_runningActionsCount = window.obj5431_onTap_runningActionsCount - 1;

if (window.obj5431_onTap_runningActionsCount < 0) {
	window.obj5431_onTap_runningActionsCount = 0;
} else if (window.obj5431_onTap_runningActionsCount == 0) {
	obj5431_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5431_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5431_onTap_activeActionGroupIndex = -1;
		$("#obj5431").trigger("obj5431_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5431) {
				console.warn("de-queueing event obj5431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5431_onTap_activeActionGroupIndex = 1;
	











































};
obj5424_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5424_onTap_activeActionGroupIndex = -1;
		$("#obj5424").trigger("obj5424_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5424) {
				console.warn("de-queueing event obj5424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5424_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5333
(function(){
	window.obj5424_onTap_runningActionsCount = obj5424_onTap_runningActionsCount + 1;


	var selector = "#obj5333";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5426();
function playAudioFile_5426() {
	window.obj5424_onTap_runningActionsCount = obj5424_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5426")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5426");
			$("#obj_audio_playSoundFile5426").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
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
				window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5427();
function switchText_5427() {
	window.obj5424_onTap_runningActionsCount = obj5424_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5424_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5424_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5424").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5424_content");
			setTimeout(function () {
				window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5424 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5424_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5424_onTap_activeActionGroupIndex = -1;
		$("#obj5424").trigger("obj5424_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5424) {
				console.warn("de-queueing event obj5424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5424_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5429();
function wait_5429() {
	window.obj5424_onTap_runningActionsCount = obj5424_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5424_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5424_onTap_activeActionGroupIndex = -1;
		$("#obj5424").trigger("obj5424_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5424) {
				console.warn("de-queueing event obj5424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5424_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5430();
function switchText_5430() {
	window.obj5424_onTap_runningActionsCount = obj5424_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5424_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5424_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5424").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5424_content");
			setTimeout(function () {
				window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5424 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5424_onTap_runningActionsCount = window.obj5424_onTap_runningActionsCount - 1;

if (window.obj5424_onTap_runningActionsCount < 0) {
	window.obj5424_onTap_runningActionsCount = 0;
} else if (window.obj5424_onTap_runningActionsCount == 0) {
	obj5424_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5424_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5424_onTap_activeActionGroupIndex = -1;
		$("#obj5424").trigger("obj5424_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5424) {
				console.warn("de-queueing event obj5424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5424_onTap_activeActionGroupIndex = 3;
	











































};
obj5417_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5417_onTap_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5324
(function(){
	window.obj5417_onTap_runningActionsCount = obj5417_onTap_runningActionsCount + 1;


	var selector = "#obj5324";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5419();
function playAudioFile_5419() {
	window.obj5417_onTap_runningActionsCount = obj5417_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5419")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5419");
			$("#obj_audio_playSoundFile5419").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
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
				window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5420();
function switchText_5420() {
	window.obj5417_onTap_runningActionsCount = obj5417_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">8</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5417").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5417_content");
			setTimeout(function () {
				window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5417_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5417_onTap_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5422();
function wait_5422() {
	window.obj5417_onTap_runningActionsCount = obj5417_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5417_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5417_onTap_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5423();
function switchText_5423() {
	window.obj5417_onTap_runningActionsCount = obj5417_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">8</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5417").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5417_content");
			setTimeout(function () {
				window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5417_onTap_runningActionsCount = window.obj5417_onTap_runningActionsCount - 1;

if (window.obj5417_onTap_runningActionsCount < 0) {
	window.obj5417_onTap_runningActionsCount = 0;
} else if (window.obj5417_onTap_runningActionsCount == 0) {
	obj5417_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5417_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5417_onTap_activeActionGroupIndex = -1;
		$("#obj5417").trigger("obj5417_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5417) {
				console.warn("de-queueing event obj5417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5417_onTap_activeActionGroupIndex = 3;
	











































};
obj5410_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5410_onTap_activeActionGroupIndex = -1;
		$("#obj5410").trigger("obj5410_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5410) {
				console.warn("de-queueing event obj5410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5410_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5351
(function(){
	window.obj5410_onTap_runningActionsCount = obj5410_onTap_runningActionsCount + 1;


	var selector = "#obj5351";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5412();
function playAudioFile_5412() {
	window.obj5410_onTap_runningActionsCount = obj5410_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5412")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5412");
			$("#obj_audio_playSoundFile5412").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
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
				window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5413();
function switchText_5413() {
	window.obj5410_onTap_runningActionsCount = obj5410_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5410_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5410_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5410").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5410_content");
			setTimeout(function () {
				window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5410 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5410_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5410_onTap_activeActionGroupIndex = -1;
		$("#obj5410").trigger("obj5410_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5410) {
				console.warn("de-queueing event obj5410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5410_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5415();
function wait_5415() {
	window.obj5410_onTap_runningActionsCount = obj5410_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5410_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5410_onTap_activeActionGroupIndex = -1;
		$("#obj5410").trigger("obj5410_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5410) {
				console.warn("de-queueing event obj5410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5410_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5416();
function switchText_5416() {
	window.obj5410_onTap_runningActionsCount = obj5410_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5410_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5410_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5410").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5410_content");
			setTimeout(function () {
				window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5410 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5410_onTap_runningActionsCount = window.obj5410_onTap_runningActionsCount - 1;

if (window.obj5410_onTap_runningActionsCount < 0) {
	window.obj5410_onTap_runningActionsCount = 0;
} else if (window.obj5410_onTap_runningActionsCount == 0) {
	obj5410_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5410_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5410_onTap_activeActionGroupIndex = -1;
		$("#obj5410").trigger("obj5410_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5410) {
				console.warn("de-queueing event obj5410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5410_onTap_activeActionGroupIndex = 3;
	











































};
obj5397_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5397_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5397").trigger("obj5397_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5397) {
				console.warn("de-queueing event obj5397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5397_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5410 
hide_5399();
function hide_5399() {
	var selector = "#obj5410";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5399(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5417 
hide_5400();
function hide_5400() {
	var selector = "#obj5417";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5400(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5424 
hide_5401();
function hide_5401() {
	var selector = "#obj5424";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5401(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5431 
hide_5402();
function hide_5402() {
	var selector = "#obj5431";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5402(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5438 
hide_5403();
function hide_5403() {
	var selector = "#obj5438";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5403(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5447 
hide_5404();
function hide_5404() {
	var selector = "#obj5447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5404(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5454 
hide_5405();
function hide_5405() {
	var selector = "#obj5454";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5405(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5468 
hide_5407();
function hide_5407() {
	var selector = "#obj5468";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5407(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5461 
hide_5406();
function hide_5406() {
	var selector = "#obj5461";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5406(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj9405 
hide_9421();
function hide_9421() {
	var selector = "#obj9405";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5397_SCEventRun_runningActionsCount = obj5397_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9421(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5397_SCEventRun_runningActionsCount = window.obj5397_SCEventRun_runningActionsCount - 1;

if (window.obj5397_SCEventRun_runningActionsCount < 0) {
	window.obj5397_SCEventRun_runningActionsCount = 0;
} else if (window.obj5397_SCEventRun_runningActionsCount == 0) {
	obj5397_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5397_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5397_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5397").trigger("obj5397_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5397) {
				console.warn("de-queueing event obj5397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5397_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj9398_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_onTap_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9398) {
				console.warn("de-queueing event obj9398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9398_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9389
(function(){
	window.obj9398_onTap_runningActionsCount = obj9398_onTap_runningActionsCount + 1;


	var selector = "#obj9389";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_9400();
function playAudioFile_9400() {
	window.obj9398_onTap_runningActionsCount = obj9398_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9400")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9400");
			$("#obj_audio_playSoundFile9400").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
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
				window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_9401();
function switchText_9401() {
	window.obj9398_onTap_runningActionsCount = obj9398_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9398_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9398_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9398").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9398_content");
			setTimeout(function () {
				window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj9398 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj9398_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_onTap_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9398) {
				console.warn("de-queueing event obj9398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9398_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_9403();
function wait_9403() {
	window.obj9398_onTap_runningActionsCount = obj9398_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup2();
}
	}, 500);
}


























};
obj9398_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_onTap_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9398) {
				console.warn("de-queueing event obj9398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9398_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_9404();
function switchText_9404() {
	window.obj9398_onTap_runningActionsCount = obj9398_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9398_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9398_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9398").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9398_content");
			setTimeout(function () {
				window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj9398 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9398_onTap_runningActionsCount = window.obj9398_onTap_runningActionsCount - 1;

if (window.obj9398_onTap_runningActionsCount < 0) {
	window.obj9398_onTap_runningActionsCount = 0;
} else if (window.obj9398_onTap_runningActionsCount == 0) {
	obj9398_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj9398_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9398_onTap_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9398) {
				console.warn("de-queueing event obj9398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9398_onTap_activeActionGroupIndex = 3;
	











































};
obj5589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5589_onTap_activeActionGroupIndex = -1;
		$("#obj5589").trigger("obj5589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5589) {
				console.warn("de-queueing event obj5589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5589_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5276
(function(){
	window.obj5589_onTap_runningActionsCount = obj5589_onTap_runningActionsCount + 1;


	var selector = "#obj5276";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5591();
function playAudioFile_5591() {
	window.obj5589_onTap_runningActionsCount = obj5589_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5591")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5591");
			$("#obj_audio_playSoundFile5591").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
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
				window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5592();
function switchText_5592() {
	window.obj5589_onTap_runningActionsCount = obj5589_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5589_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5589_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5589").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5589_content");
			setTimeout(function () {
				window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5589 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5589_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5589_onTap_activeActionGroupIndex = -1;
		$("#obj5589").trigger("obj5589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5589) {
				console.warn("de-queueing event obj5589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5589_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5594();
function wait_5594() {
	window.obj5589_onTap_runningActionsCount = obj5589_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5589_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5589_onTap_activeActionGroupIndex = -1;
		$("#obj5589").trigger("obj5589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5589) {
				console.warn("de-queueing event obj5589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5589_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5595();
function switchText_5595() {
	window.obj5589_onTap_runningActionsCount = obj5589_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5589_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5589_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5589").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5589_content");
			setTimeout(function () {
				window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5589 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5589_onTap_runningActionsCount = window.obj5589_onTap_runningActionsCount - 1;

if (window.obj5589_onTap_runningActionsCount < 0) {
	window.obj5589_onTap_runningActionsCount = 0;
} else if (window.obj5589_onTap_runningActionsCount == 0) {
	obj5589_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5589_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5589_onTap_activeActionGroupIndex = -1;
		$("#obj5589").trigger("obj5589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5589) {
				console.warn("de-queueing event obj5589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5589_onTap_activeActionGroupIndex = 3;
	











































};
obj5582_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5582_onTap_activeActionGroupIndex = -1;
		$("#obj5582").trigger("obj5582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5582) {
				console.warn("de-queueing event obj5582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5582_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5279
(function(){
	window.obj5582_onTap_runningActionsCount = obj5582_onTap_runningActionsCount + 1;


	var selector = "#obj5279";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5584();
function playAudioFile_5584() {
	window.obj5582_onTap_runningActionsCount = obj5582_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5584")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5584");
			$("#obj_audio_playSoundFile5584").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
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
				window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5585();
function switchText_5585() {
	window.obj5582_onTap_runningActionsCount = obj5582_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5582_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5582_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5582").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5582_content");
			setTimeout(function () {
				window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5582 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5582_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5582_onTap_activeActionGroupIndex = -1;
		$("#obj5582").trigger("obj5582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5582) {
				console.warn("de-queueing event obj5582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5582_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5587();
function wait_5587() {
	window.obj5582_onTap_runningActionsCount = obj5582_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5582_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5582_onTap_activeActionGroupIndex = -1;
		$("#obj5582").trigger("obj5582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5582) {
				console.warn("de-queueing event obj5582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5582_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5588();
function switchText_5588() {
	window.obj5582_onTap_runningActionsCount = obj5582_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5582_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5582_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5582").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5582_content");
			setTimeout(function () {
				window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5582 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5582_onTap_runningActionsCount = window.obj5582_onTap_runningActionsCount - 1;

if (window.obj5582_onTap_runningActionsCount < 0) {
	window.obj5582_onTap_runningActionsCount = 0;
} else if (window.obj5582_onTap_runningActionsCount == 0) {
	obj5582_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5582_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5582_onTap_activeActionGroupIndex = -1;
		$("#obj5582").trigger("obj5582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5582) {
				console.warn("de-queueing event obj5582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5582_onTap_activeActionGroupIndex = 3;
	











































};
obj5575_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5575_onTap_activeActionGroupIndex = -1;
		$("#obj5575").trigger("obj5575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5575) {
				console.warn("de-queueing event obj5575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5575_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5297
(function(){
	window.obj5575_onTap_runningActionsCount = obj5575_onTap_runningActionsCount + 1;


	var selector = "#obj5297";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5577();
function playAudioFile_5577() {
	window.obj5575_onTap_runningActionsCount = obj5575_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5577")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5577");
			$("#obj_audio_playSoundFile5577").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
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
				window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5578();
function switchText_5578() {
	window.obj5575_onTap_runningActionsCount = obj5575_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5575_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5575_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5575").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5575_content");
			setTimeout(function () {
				window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5575 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5575_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5575_onTap_activeActionGroupIndex = -1;
		$("#obj5575").trigger("obj5575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5575) {
				console.warn("de-queueing event obj5575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5575_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5580();
function wait_5580() {
	window.obj5575_onTap_runningActionsCount = obj5575_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5575_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5575_onTap_activeActionGroupIndex = -1;
		$("#obj5575").trigger("obj5575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5575) {
				console.warn("de-queueing event obj5575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5575_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5581();
function switchText_5581() {
	window.obj5575_onTap_runningActionsCount = obj5575_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5575_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5575_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5575").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5575_content");
			setTimeout(function () {
				window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5575 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5575_onTap_runningActionsCount = window.obj5575_onTap_runningActionsCount - 1;

if (window.obj5575_onTap_runningActionsCount < 0) {
	window.obj5575_onTap_runningActionsCount = 0;
} else if (window.obj5575_onTap_runningActionsCount == 0) {
	obj5575_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5575_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5575_onTap_activeActionGroupIndex = -1;
		$("#obj5575").trigger("obj5575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5575) {
				console.warn("de-queueing event obj5575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5575_onTap_activeActionGroupIndex = 3;
	











































};
obj5568_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5568_onTap_activeActionGroupIndex = -1;
		$("#obj5568").trigger("obj5568_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5568) {
				console.warn("de-queueing event obj5568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5568_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5288
(function(){
	window.obj5568_onTap_runningActionsCount = obj5568_onTap_runningActionsCount + 1;


	var selector = "#obj5288";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5570();
function playAudioFile_5570() {
	window.obj5568_onTap_runningActionsCount = obj5568_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5570")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5570");
			$("#obj_audio_playSoundFile5570").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
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
				window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5571();
function switchText_5571() {
	window.obj5568_onTap_runningActionsCount = obj5568_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5568_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5568_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5568").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5568_content");
			setTimeout(function () {
				window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5568 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5568_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5568_onTap_activeActionGroupIndex = -1;
		$("#obj5568").trigger("obj5568_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5568) {
				console.warn("de-queueing event obj5568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5568_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5573();
function wait_5573() {
	window.obj5568_onTap_runningActionsCount = obj5568_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5568_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5568_onTap_activeActionGroupIndex = -1;
		$("#obj5568").trigger("obj5568_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5568) {
				console.warn("de-queueing event obj5568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5568_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5574();
function switchText_5574() {
	window.obj5568_onTap_runningActionsCount = obj5568_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5568_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5568_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5568").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5568_content");
			setTimeout(function () {
				window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5568 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5568_onTap_runningActionsCount = window.obj5568_onTap_runningActionsCount - 1;

if (window.obj5568_onTap_runningActionsCount < 0) {
	window.obj5568_onTap_runningActionsCount = 0;
} else if (window.obj5568_onTap_runningActionsCount == 0) {
	obj5568_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5568_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5568_onTap_activeActionGroupIndex = -1;
		$("#obj5568").trigger("obj5568_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5568) {
				console.warn("de-queueing event obj5568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5568_onTap_activeActionGroupIndex = 3;
	











































};
obj5561_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5561_onTap_activeActionGroupIndex = -1;
		$("#obj5561").trigger("obj5561_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5561) {
				console.warn("de-queueing event obj5561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5561_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5315
(function(){
	window.obj5561_onTap_runningActionsCount = obj5561_onTap_runningActionsCount + 1;


	var selector = "#obj5315";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5563();
function playAudioFile_5563() {
	window.obj5561_onTap_runningActionsCount = obj5561_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5563")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5563");
			$("#obj_audio_playSoundFile5563").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
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
				window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5564();
function switchText_5564() {
	window.obj5561_onTap_runningActionsCount = obj5561_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">5</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5561_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5561_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5561").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5561_content");
			setTimeout(function () {
				window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5561 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5561_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5561_onTap_activeActionGroupIndex = -1;
		$("#obj5561").trigger("obj5561_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5561) {
				console.warn("de-queueing event obj5561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5561_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5566();
function wait_5566() {
	window.obj5561_onTap_runningActionsCount = obj5561_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5561_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5561_onTap_activeActionGroupIndex = -1;
		$("#obj5561").trigger("obj5561_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5561) {
				console.warn("de-queueing event obj5561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5561_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5567();
function switchText_5567() {
	window.obj5561_onTap_runningActionsCount = obj5561_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">5</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5561_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5561_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5561").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5561_content");
			setTimeout(function () {
				window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5561 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5561_onTap_runningActionsCount = window.obj5561_onTap_runningActionsCount - 1;

if (window.obj5561_onTap_runningActionsCount < 0) {
	window.obj5561_onTap_runningActionsCount = 0;
} else if (window.obj5561_onTap_runningActionsCount == 0) {
	obj5561_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5561_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5561_onTap_activeActionGroupIndex = -1;
		$("#obj5561").trigger("obj5561_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5561) {
				console.warn("de-queueing event obj5561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5561_onTap_activeActionGroupIndex = 3;
	











































};
obj5552_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5552_onTap_activeActionGroupIndex = -1;
		$("#obj5552").trigger("obj5552_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5552) {
				console.warn("de-queueing event obj5552." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5552").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5552_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5306
(function(){
	window.obj5552_onTap_runningActionsCount = obj5552_onTap_runningActionsCount + 1;


	var selector = "#obj5306";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5616();
function playAudioFile_5616() {
	window.obj5552_onTap_runningActionsCount = obj5552_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5616")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5616");
			$("#obj_audio_playSoundFile5616").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
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
				window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5617();
function switchText_5617() {
	window.obj5552_onTap_runningActionsCount = obj5552_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">6</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5552_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5552_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5552").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5552_content");
			setTimeout(function () {
				window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5552 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5552_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5552_onTap_activeActionGroupIndex = -1;
		$("#obj5552").trigger("obj5552_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5552) {
				console.warn("de-queueing event obj5552." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5552").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5552_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5619();
function wait_5619() {
	window.obj5552_onTap_runningActionsCount = obj5552_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5552_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5552_onTap_activeActionGroupIndex = -1;
		$("#obj5552").trigger("obj5552_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5552) {
				console.warn("de-queueing event obj5552." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5552").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5552_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5620();
function switchText_5620() {
	window.obj5552_onTap_runningActionsCount = obj5552_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">6</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5552_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5552_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5552").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5552_content");
			setTimeout(function () {
				window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5552 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5552_onTap_runningActionsCount = window.obj5552_onTap_runningActionsCount - 1;

if (window.obj5552_onTap_runningActionsCount < 0) {
	window.obj5552_onTap_runningActionsCount = 0;
} else if (window.obj5552_onTap_runningActionsCount == 0) {
	obj5552_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5552_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5552_onTap_activeActionGroupIndex = -1;
		$("#obj5552").trigger("obj5552_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5552) {
				console.warn("de-queueing event obj5552." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5552").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5552_onTap_activeActionGroupIndex = 3;
	











































};
obj5545_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5545_onTap_activeActionGroupIndex = -1;
		$("#obj5545").trigger("obj5545_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5545) {
				console.warn("de-queueing event obj5545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5545_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5243 
hide_5611();
function hide_5611() {
	var selector = "#obj5243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5611(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5253 
hide_5612();
function hide_5612() {
	var selector = "#obj5253";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5612(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5239 
hide_5613();
function hide_5613() {
	var selector = "#obj5239";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5613(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5360
(function(){
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;


	var selector = "#obj5360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5529
(function(){
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;


	var selector = "#obj5529";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5609();
function playAudioFile_5609() {
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5609")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5609");
			$("#obj_audio_playSoundFile5609").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
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
				window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj5723 
incrementCounter_5732();
function incrementCounter_5732() {
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;


	var oldValue = obj5723_counterValue;
	obj5723_counterValue = obj5723_counterValue + 1;
	if (! obj5723_counterCanExceedTargetValue && obj5723_counterValue > obj5723_counterTargetValue) {
		obj5723_counterValue = obj5723_counterTargetValue;
	}

	if (oldValue != obj5723_counterValue) {
		$("#obj5723").trigger('SCEventCounterValueChange');
		$("#obj5723").trigger('SCEventCounterIncrease');
		if (obj5723_counterValue == obj5723_counterTargetValue)
			$("#obj5723").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
} }, 1);
}



//	action: run action list container
//	target: obj5373 
runActionList_5615();
function runActionList_5615() {
	window.obj5545_onTap_runningActionsCount = obj5545_onTap_runningActionsCount + 1;

	$("#obj5373").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5545_onTap_runningActionsCount = window.obj5545_onTap_runningActionsCount - 1;

if (window.obj5545_onTap_runningActionsCount < 0) {
	window.obj5545_onTap_runningActionsCount = 0;
} else if (window.obj5545_onTap_runningActionsCount == 0) {
	obj5545_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5545_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5545_onTap_activeActionGroupIndex = -1;
		$("#obj5545").trigger("obj5545_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5545) {
				console.warn("de-queueing event obj5545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5545_onTap_activeActionGroupIndex = 1;
	











































};
obj5538_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5538_onTap_activeActionGroupIndex = -1;
		$("#obj5538").trigger("obj5538_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5538) {
				console.warn("de-queueing event obj5538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5538_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5324
(function(){
	window.obj5538_onTap_runningActionsCount = obj5538_onTap_runningActionsCount + 1;


	var selector = "#obj5324";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5540();
function playAudioFile_5540() {
	window.obj5538_onTap_runningActionsCount = obj5538_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5540")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5540");
			$("#obj_audio_playSoundFile5540").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
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
				window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5541();
function switchText_5541() {
	window.obj5538_onTap_runningActionsCount = obj5538_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">8</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5538_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5538_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5538").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5538_content");
			setTimeout(function () {
				window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5538 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5538_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5538_onTap_activeActionGroupIndex = -1;
		$("#obj5538").trigger("obj5538_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5538) {
				console.warn("de-queueing event obj5538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5538_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5543();
function wait_5543() {
	window.obj5538_onTap_runningActionsCount = obj5538_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5538_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5538_onTap_activeActionGroupIndex = -1;
		$("#obj5538").trigger("obj5538_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5538) {
				console.warn("de-queueing event obj5538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5538_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5544();
function switchText_5544() {
	window.obj5538_onTap_runningActionsCount = obj5538_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">8</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5538_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5538_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5538").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5538_content");
			setTimeout(function () {
				window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5538 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5538_onTap_runningActionsCount = window.obj5538_onTap_runningActionsCount - 1;

if (window.obj5538_onTap_runningActionsCount < 0) {
	window.obj5538_onTap_runningActionsCount = 0;
} else if (window.obj5538_onTap_runningActionsCount == 0) {
	obj5538_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5538_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5538_onTap_activeActionGroupIndex = -1;
		$("#obj5538").trigger("obj5538_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5538) {
				console.warn("de-queueing event obj5538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5538_onTap_activeActionGroupIndex = 3;
	











































};
obj5531_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5531_onTap_activeActionGroupIndex = -1;
		$("#obj5531").trigger("obj5531_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5531) {
				console.warn("de-queueing event obj5531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5531_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5351
(function(){
	window.obj5531_onTap_runningActionsCount = obj5531_onTap_runningActionsCount + 1;


	var selector = "#obj5351";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5533();
function playAudioFile_5533() {
	window.obj5531_onTap_runningActionsCount = obj5531_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5533")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5533");
			$("#obj_audio_playSoundFile5533").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
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
				window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5534();
function switchText_5534() {
	window.obj5531_onTap_runningActionsCount = obj5531_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5531_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5531_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5531").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5531_content");
			setTimeout(function () {
				window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5531 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5531_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5531_onTap_activeActionGroupIndex = -1;
		$("#obj5531").trigger("obj5531_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5531) {
				console.warn("de-queueing event obj5531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5531_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5536();
function wait_5536() {
	window.obj5531_onTap_runningActionsCount = obj5531_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5531_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5531_onTap_activeActionGroupIndex = -1;
		$("#obj5531").trigger("obj5531_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5531) {
				console.warn("de-queueing event obj5531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5531_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5537();
function switchText_5537() {
	window.obj5531_onTap_runningActionsCount = obj5531_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5531_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5531_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5531").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5531_content");
			setTimeout(function () {
				window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5531 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5531_onTap_runningActionsCount = window.obj5531_onTap_runningActionsCount - 1;

if (window.obj5531_onTap_runningActionsCount < 0) {
	window.obj5531_onTap_runningActionsCount = 0;
} else if (window.obj5531_onTap_runningActionsCount == 0) {
	obj5531_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5531_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5531_onTap_activeActionGroupIndex = -1;
		$("#obj5531").trigger("obj5531_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5531) {
				console.warn("de-queueing event obj5531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5531_onTap_activeActionGroupIndex = 3;
	











































};
obj5518_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5518_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5518").trigger("obj5518_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5518) {
				console.warn("de-queueing event obj5518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5518_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5531 
hide_5520();
function hide_5520() {
	var selector = "#obj5531";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5520(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5538 
hide_5521();
function hide_5521() {
	var selector = "#obj5538";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5521(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5545 
hide_5522();
function hide_5522() {
	var selector = "#obj5545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5522(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5552 
hide_5523();
function hide_5523() {
	var selector = "#obj5552";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5523(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5561 
hide_5524();
function hide_5524() {
	var selector = "#obj5561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5524(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5568 
hide_5525();
function hide_5525() {
	var selector = "#obj5568";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5525(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5575 
hide_5526();
function hide_5526() {
	var selector = "#obj5575";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5526(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5582 
hide_5527();
function hide_5527() {
	var selector = "#obj5582";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5527(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5589 
hide_5528();
function hide_5528() {
	var selector = "#obj5589";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5528(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj9398 
hide_9420();
function hide_9420() {
	var selector = "#obj9398";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5518_SCEventRun_runningActionsCount = obj5518_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9420(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5518_SCEventRun_runningActionsCount = window.obj5518_SCEventRun_runningActionsCount - 1;

if (window.obj5518_SCEventRun_runningActionsCount < 0) {
	window.obj5518_SCEventRun_runningActionsCount = 0;
} else if (window.obj5518_SCEventRun_runningActionsCount == 0) {
	obj5518_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5518_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5518_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5518").trigger("obj5518_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5518) {
				console.warn("de-queueing event obj5518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5518_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj9391_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9391_onTap_activeActionGroupIndex = -1;
		$("#obj9391").trigger("obj9391_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9391) {
				console.warn("de-queueing event obj9391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9391_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9389
(function(){
	window.obj9391_onTap_runningActionsCount = obj9391_onTap_runningActionsCount + 1;


	var selector = "#obj9389";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_9393();
function playAudioFile_9393() {
	window.obj9391_onTap_runningActionsCount = obj9391_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile9393")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9393");
			$("#obj_audio_playSoundFile9393").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
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
				window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_9394();
function switchText_9394() {
	window.obj9391_onTap_runningActionsCount = obj9391_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9391_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9391_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9391").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9391_content");
			setTimeout(function () {
				window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj9391 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj9391_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9391_onTap_activeActionGroupIndex = -1;
		$("#obj9391").trigger("obj9391_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9391) {
				console.warn("de-queueing event obj9391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9391_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_9396();
function wait_9396() {
	window.obj9391_onTap_runningActionsCount = obj9391_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup2();
}
	}, 500);
}


























};
obj9391_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9391_onTap_activeActionGroupIndex = -1;
		$("#obj9391").trigger("obj9391_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9391) {
				console.warn("de-queueing event obj9391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9391_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_9397();
function switchText_9397() {
	window.obj9391_onTap_runningActionsCount = obj9391_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">0</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj9391_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj9391_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj9391").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj9391_content");
			setTimeout(function () {
				window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj9391 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj9391_onTap_runningActionsCount = window.obj9391_onTap_runningActionsCount - 1;

if (window.obj9391_onTap_runningActionsCount < 0) {
	window.obj9391_onTap_runningActionsCount = 0;
} else if (window.obj9391_onTap_runningActionsCount == 0) {
	obj9391_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj9391_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9391_onTap_activeActionGroupIndex = -1;
		$("#obj9391").trigger("obj9391_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9391) {
				console.warn("de-queueing event obj9391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9391_onTap_activeActionGroupIndex = 3;
	











































};
obj5692_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5692_onTap_activeActionGroupIndex = -1;
		$("#obj5692").trigger("obj5692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5692) {
				console.warn("de-queueing event obj5692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5692_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5276
(function(){
	window.obj5692_onTap_runningActionsCount = obj5692_onTap_runningActionsCount + 1;


	var selector = "#obj5276";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5694();
function playAudioFile_5694() {
	window.obj5692_onTap_runningActionsCount = obj5692_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5694")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5694");
			$("#obj_audio_playSoundFile5694").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
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
				window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5695();
function switchText_5695() {
	window.obj5692_onTap_runningActionsCount = obj5692_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5692_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5692_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5692").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5692_content");
			setTimeout(function () {
				window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5692 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5692_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5692_onTap_activeActionGroupIndex = -1;
		$("#obj5692").trigger("obj5692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5692) {
				console.warn("de-queueing event obj5692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5692_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5697();
function wait_5697() {
	window.obj5692_onTap_runningActionsCount = obj5692_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5692_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5692_onTap_activeActionGroupIndex = -1;
		$("#obj5692").trigger("obj5692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5692) {
				console.warn("de-queueing event obj5692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5692_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5698();
function switchText_5698() {
	window.obj5692_onTap_runningActionsCount = obj5692_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">1</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5692_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5692_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5692").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5692_content");
			setTimeout(function () {
				window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5692 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5692_onTap_runningActionsCount = window.obj5692_onTap_runningActionsCount - 1;

if (window.obj5692_onTap_runningActionsCount < 0) {
	window.obj5692_onTap_runningActionsCount = 0;
} else if (window.obj5692_onTap_runningActionsCount == 0) {
	obj5692_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5692_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5692_onTap_activeActionGroupIndex = -1;
		$("#obj5692").trigger("obj5692_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5692) {
				console.warn("de-queueing event obj5692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5692_onTap_activeActionGroupIndex = 3;
	











































};
obj5685_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5685_onTap_activeActionGroupIndex = -1;
		$("#obj5685").trigger("obj5685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5685) {
				console.warn("de-queueing event obj5685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5685_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5279
(function(){
	window.obj5685_onTap_runningActionsCount = obj5685_onTap_runningActionsCount + 1;


	var selector = "#obj5279";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5687();
function playAudioFile_5687() {
	window.obj5685_onTap_runningActionsCount = obj5685_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5687")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5687");
			$("#obj_audio_playSoundFile5687").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
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
				window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5688();
function switchText_5688() {
	window.obj5685_onTap_runningActionsCount = obj5685_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5685_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5685_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5685").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5685_content");
			setTimeout(function () {
				window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5685 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5685_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5685_onTap_activeActionGroupIndex = -1;
		$("#obj5685").trigger("obj5685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5685) {
				console.warn("de-queueing event obj5685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5685_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5690();
function wait_5690() {
	window.obj5685_onTap_runningActionsCount = obj5685_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5685_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5685_onTap_activeActionGroupIndex = -1;
		$("#obj5685").trigger("obj5685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5685) {
				console.warn("de-queueing event obj5685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5685_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5691();
function switchText_5691() {
	window.obj5685_onTap_runningActionsCount = obj5685_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">2</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5685_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5685_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5685").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5685_content");
			setTimeout(function () {
				window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5685 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5685_onTap_runningActionsCount = window.obj5685_onTap_runningActionsCount - 1;

if (window.obj5685_onTap_runningActionsCount < 0) {
	window.obj5685_onTap_runningActionsCount = 0;
} else if (window.obj5685_onTap_runningActionsCount == 0) {
	obj5685_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5685_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5685_onTap_activeActionGroupIndex = -1;
		$("#obj5685").trigger("obj5685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5685) {
				console.warn("de-queueing event obj5685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5685_onTap_activeActionGroupIndex = 3;
	











































};
obj5678_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5678_onTap_activeActionGroupIndex = -1;
		$("#obj5678").trigger("obj5678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5678) {
				console.warn("de-queueing event obj5678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5678_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5297
(function(){
	window.obj5678_onTap_runningActionsCount = obj5678_onTap_runningActionsCount + 1;


	var selector = "#obj5297";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5680();
function playAudioFile_5680() {
	window.obj5678_onTap_runningActionsCount = obj5678_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5680")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5680");
			$("#obj_audio_playSoundFile5680").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
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
				window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5681();
function switchText_5681() {
	window.obj5678_onTap_runningActionsCount = obj5678_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5678_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5678_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5678").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5678_content");
			setTimeout(function () {
				window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5678 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5678_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5678_onTap_activeActionGroupIndex = -1;
		$("#obj5678").trigger("obj5678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5678) {
				console.warn("de-queueing event obj5678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5678_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5683();
function wait_5683() {
	window.obj5678_onTap_runningActionsCount = obj5678_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5678_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5678_onTap_activeActionGroupIndex = -1;
		$("#obj5678").trigger("obj5678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5678) {
				console.warn("de-queueing event obj5678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5678_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5684();
function switchText_5684() {
	window.obj5678_onTap_runningActionsCount = obj5678_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5678_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5678_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5678").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5678_content");
			setTimeout(function () {
				window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5678 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5678_onTap_runningActionsCount = window.obj5678_onTap_runningActionsCount - 1;

if (window.obj5678_onTap_runningActionsCount < 0) {
	window.obj5678_onTap_runningActionsCount = 0;
} else if (window.obj5678_onTap_runningActionsCount == 0) {
	obj5678_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5678_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5678_onTap_activeActionGroupIndex = -1;
		$("#obj5678").trigger("obj5678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5678) {
				console.warn("de-queueing event obj5678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5678_onTap_activeActionGroupIndex = 3;
	











































};
obj5671_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5671_onTap_activeActionGroupIndex = -1;
		$("#obj5671").trigger("obj5671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5671) {
				console.warn("de-queueing event obj5671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5671_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5288
(function(){
	window.obj5671_onTap_runningActionsCount = obj5671_onTap_runningActionsCount + 1;


	var selector = "#obj5288";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5673();
function playAudioFile_5673() {
	window.obj5671_onTap_runningActionsCount = obj5671_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5673")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5673");
			$("#obj_audio_playSoundFile5673").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
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
				window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5674();
function switchText_5674() {
	window.obj5671_onTap_runningActionsCount = obj5671_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5671_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5671_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5671").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5671_content");
			setTimeout(function () {
				window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5671 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5671_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5671_onTap_activeActionGroupIndex = -1;
		$("#obj5671").trigger("obj5671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5671) {
				console.warn("de-queueing event obj5671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5671_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5676();
function wait_5676() {
	window.obj5671_onTap_runningActionsCount = obj5671_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5671_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5671_onTap_activeActionGroupIndex = -1;
		$("#obj5671").trigger("obj5671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5671) {
				console.warn("de-queueing event obj5671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5671_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5677();
function switchText_5677() {
	window.obj5671_onTap_runningActionsCount = obj5671_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">4</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5671_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5671_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5671").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5671_content");
			setTimeout(function () {
				window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5671 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5671_onTap_runningActionsCount = window.obj5671_onTap_runningActionsCount - 1;

if (window.obj5671_onTap_runningActionsCount < 0) {
	window.obj5671_onTap_runningActionsCount = 0;
} else if (window.obj5671_onTap_runningActionsCount == 0) {
	obj5671_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5671_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5671_onTap_activeActionGroupIndex = -1;
		$("#obj5671").trigger("obj5671_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5671) {
				console.warn("de-queueing event obj5671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5671_onTap_activeActionGroupIndex = 3;
	











































};
obj5664_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5664_onTap_activeActionGroupIndex = -1;
		$("#obj5664").trigger("obj5664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5664) {
				console.warn("de-queueing event obj5664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5664_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5315
(function(){
	window.obj5664_onTap_runningActionsCount = obj5664_onTap_runningActionsCount + 1;


	var selector = "#obj5315";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5666();
function playAudioFile_5666() {
	window.obj5664_onTap_runningActionsCount = obj5664_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5666")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5666");
			$("#obj_audio_playSoundFile5666").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
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
				window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5667();
function switchText_5667() {
	window.obj5664_onTap_runningActionsCount = obj5664_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">5</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5664_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5664_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5664").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5664_content");
			setTimeout(function () {
				window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5664 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5664_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5664_onTap_activeActionGroupIndex = -1;
		$("#obj5664").trigger("obj5664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5664) {
				console.warn("de-queueing event obj5664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5664_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5669();
function wait_5669() {
	window.obj5664_onTap_runningActionsCount = obj5664_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5664_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5664_onTap_activeActionGroupIndex = -1;
		$("#obj5664").trigger("obj5664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5664) {
				console.warn("de-queueing event obj5664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5664_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5670();
function switchText_5670() {
	window.obj5664_onTap_runningActionsCount = obj5664_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">5</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5664_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5664_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5664").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5664_content");
			setTimeout(function () {
				window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5664 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5664_onTap_runningActionsCount = window.obj5664_onTap_runningActionsCount - 1;

if (window.obj5664_onTap_runningActionsCount < 0) {
	window.obj5664_onTap_runningActionsCount = 0;
} else if (window.obj5664_onTap_runningActionsCount == 0) {
	obj5664_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5664_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5664_onTap_activeActionGroupIndex = -1;
		$("#obj5664").trigger("obj5664_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5664) {
				console.warn("de-queueing event obj5664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5664_onTap_activeActionGroupIndex = 3;
	











































};
obj5657_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5657_onTap_activeActionGroupIndex = -1;
		$("#obj5657").trigger("obj5657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5657) {
				console.warn("de-queueing event obj5657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5657_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5306
(function(){
	window.obj5657_onTap_runningActionsCount = obj5657_onTap_runningActionsCount + 1;


	var selector = "#obj5306";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5659();
function playAudioFile_5659() {
	window.obj5657_onTap_runningActionsCount = obj5657_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5659")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5659");
			$("#obj_audio_playSoundFile5659").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
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
				window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5660();
function switchText_5660() {
	window.obj5657_onTap_runningActionsCount = obj5657_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">6</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5657_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5657_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5657").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5657_content");
			setTimeout(function () {
				window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5657 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5657_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5657_onTap_activeActionGroupIndex = -1;
		$("#obj5657").trigger("obj5657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5657) {
				console.warn("de-queueing event obj5657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5657_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5662();
function wait_5662() {
	window.obj5657_onTap_runningActionsCount = obj5657_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5657_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5657_onTap_activeActionGroupIndex = -1;
		$("#obj5657").trigger("obj5657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5657) {
				console.warn("de-queueing event obj5657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5657_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5663();
function switchText_5663() {
	window.obj5657_onTap_runningActionsCount = obj5657_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">6</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5657_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5657_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5657").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5657_content");
			setTimeout(function () {
				window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5657 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5657_onTap_runningActionsCount = window.obj5657_onTap_runningActionsCount - 1;

if (window.obj5657_onTap_runningActionsCount < 0) {
	window.obj5657_onTap_runningActionsCount = 0;
} else if (window.obj5657_onTap_runningActionsCount == 0) {
	obj5657_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5657_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5657_onTap_activeActionGroupIndex = -1;
		$("#obj5657").trigger("obj5657_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5657) {
				console.warn("de-queueing event obj5657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5657_onTap_activeActionGroupIndex = 3;
	











































};
obj5648_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5648_onTap_activeActionGroupIndex = -1;
		$("#obj5648").trigger("obj5648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5648) {
				console.warn("de-queueing event obj5648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5648_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5333
(function(){
	window.obj5648_onTap_runningActionsCount = obj5648_onTap_runningActionsCount + 1;


	var selector = "#obj5333";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5706();
function playAudioFile_5706() {
	window.obj5648_onTap_runningActionsCount = obj5648_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5706")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5706");
			$("#obj_audio_playSoundFile5706").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
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
				window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5707();
function switchText_5707() {
	window.obj5648_onTap_runningActionsCount = obj5648_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5648_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5648_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5648").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5648_content");
			setTimeout(function () {
				window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5648 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5648_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5648_onTap_activeActionGroupIndex = -1;
		$("#obj5648").trigger("obj5648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5648) {
				console.warn("de-queueing event obj5648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5648_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5709();
function wait_5709() {
	window.obj5648_onTap_runningActionsCount = obj5648_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5648_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5648_onTap_activeActionGroupIndex = -1;
		$("#obj5648").trigger("obj5648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5648) {
				console.warn("de-queueing event obj5648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5648_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5710();
function switchText_5710() {
	window.obj5648_onTap_runningActionsCount = obj5648_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5648_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5648_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5648").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5648_content");
			setTimeout(function () {
				window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5648 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5648_onTap_runningActionsCount = window.obj5648_onTap_runningActionsCount - 1;

if (window.obj5648_onTap_runningActionsCount < 0) {
	window.obj5648_onTap_runningActionsCount = 0;
} else if (window.obj5648_onTap_runningActionsCount == 0) {
	obj5648_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5648_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5648_onTap_activeActionGroupIndex = -1;
		$("#obj5648").trigger("obj5648_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5648) {
				console.warn("de-queueing event obj5648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5648_onTap_activeActionGroupIndex = 3;
	











































};
obj5641_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5641_onTap_activeActionGroupIndex = -1;
		$("#obj5641").trigger("obj5641_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5641) {
				console.warn("de-queueing event obj5641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5641_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5243 
hide_5701();
function hide_5701() {
	var selector = "#obj5243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5701(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5251 
hide_5702();
function hide_5702() {
	var selector = "#obj5251";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5702(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5235 
hide_5703();
function hide_5703() {
	var selector = "#obj5235";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5703(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj5360
(function(){
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;


	var selector = "#obj5360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5632
(function(){
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;


	var selector = "#obj5632";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5699();
function playAudioFile_5699() {
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5699")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5699");
			$("#obj_audio_playSoundFile5699").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
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
				window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj5723 
incrementCounter_5733();
function incrementCounter_5733() {
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;


	var oldValue = obj5723_counterValue;
	obj5723_counterValue = obj5723_counterValue + 1;
	if (! obj5723_counterCanExceedTargetValue && obj5723_counterValue > obj5723_counterTargetValue) {
		obj5723_counterValue = obj5723_counterTargetValue;
	}

	if (oldValue != obj5723_counterValue) {
		$("#obj5723").trigger('SCEventCounterValueChange');
		$("#obj5723").trigger('SCEventCounterIncrease');
		if (obj5723_counterValue == obj5723_counterTargetValue)
			$("#obj5723").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
} }, 1);
}



//	action: run action list container
//	target: obj5373 
runActionList_5705();
function runActionList_5705() {
	window.obj5641_onTap_runningActionsCount = obj5641_onTap_runningActionsCount + 1;

	$("#obj5373").trigger('SCEventRun');
	setTimeout(function() {
		window.obj5641_onTap_runningActionsCount = window.obj5641_onTap_runningActionsCount - 1;

if (window.obj5641_onTap_runningActionsCount < 0) {
	window.obj5641_onTap_runningActionsCount = 0;
} else if (window.obj5641_onTap_runningActionsCount == 0) {
	obj5641_onTap_actionGroup1();
}		
	}, 1);
}







};
obj5641_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5641_onTap_activeActionGroupIndex = -1;
		$("#obj5641").trigger("obj5641_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5641) {
				console.warn("de-queueing event obj5641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5641_onTap_activeActionGroupIndex = 1;
	











































};
obj5634_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5634_onTap_activeActionGroupIndex = -1;
		$("#obj5634").trigger("obj5634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5634) {
				console.warn("de-queueing event obj5634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5634_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5351
(function(){
	window.obj5634_onTap_runningActionsCount = obj5634_onTap_runningActionsCount + 1;


	var selector = "#obj5351";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_5636();
function playAudioFile_5636() {
	window.obj5634_onTap_runningActionsCount = obj5634_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5636")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5636");
			$("#obj_audio_playSoundFile5636").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
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
				window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_5637();
function switchText_5637() {
	window.obj5634_onTap_runningActionsCount = obj5634_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 32px;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5634_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5634_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5634").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5634_content");
			setTimeout(function () {
				window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj5634 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj5634_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5634_onTap_activeActionGroupIndex = -1;
		$("#obj5634").trigger("obj5634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5634) {
				console.warn("de-queueing event obj5634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5634_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5639();
function wait_5639() {
	window.obj5634_onTap_runningActionsCount = obj5634_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup2();
}
	}, 500);
}


























};
obj5634_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5634_onTap_activeActionGroupIndex = -1;
		$("#obj5634").trigger("obj5634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5634) {
				console.warn("de-queueing event obj5634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5634_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_5640();
function switchText_5640() {
	window.obj5634_onTap_runningActionsCount = obj5634_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px; font-family: Roboto-Bold;\">9</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5634_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5634_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj5634").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5634_content");
			setTimeout(function () {
				window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj5634 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5634_onTap_runningActionsCount = window.obj5634_onTap_runningActionsCount - 1;

if (window.obj5634_onTap_runningActionsCount < 0) {
	window.obj5634_onTap_runningActionsCount = 0;
} else if (window.obj5634_onTap_runningActionsCount == 0) {
	obj5634_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj5634_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5634_onTap_activeActionGroupIndex = -1;
		$("#obj5634").trigger("obj5634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5634) {
				console.warn("de-queueing event obj5634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5634_onTap_activeActionGroupIndex = 3;
	











































};
obj5621_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5621_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5621").trigger("obj5621_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5621) {
				console.warn("de-queueing event obj5621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5621_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj5634 
hide_5623();
function hide_5623() {
	var selector = "#obj5634";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5623(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5641 
hide_5624();
function hide_5624() {
	var selector = "#obj5641";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5624(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5648 
hide_5625();
function hide_5625() {
	var selector = "#obj5648";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5625(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5657 
hide_5626();
function hide_5626() {
	var selector = "#obj5657";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5626(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5664 
hide_5627();
function hide_5627() {
	var selector = "#obj5664";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5627(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5671 
hide_5628();
function hide_5628() {
	var selector = "#obj5671";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5628(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj9391 
hide_9419();
function hide_9419() {
	var selector = "#obj9391";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9419(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5678 
hide_5629();
function hide_5629() {
	var selector = "#obj5678";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5629(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5685 
hide_5630();
function hide_5630() {
	var selector = "#obj5685";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5630(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj5692 
hide_5631();
function hide_5631() {
	var selector = "#obj5692";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5621_SCEventRun_runningActionsCount = obj5621_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5631(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5621_SCEventRun_runningActionsCount = window.obj5621_SCEventRun_runningActionsCount - 1;

if (window.obj5621_SCEventRun_runningActionsCount < 0) {
	window.obj5621_SCEventRun_runningActionsCount = 0;
} else if (window.obj5621_SCEventRun_runningActionsCount == 0) {
	obj5621_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj5621_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5621_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5621").trigger("obj5621_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5621) {
				console.warn("de-queueing event obj5621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5621_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj5723_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5723").trigger("obj5723_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5723) {
				console.warn("de-queueing event obj5723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj5243
(function(){
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = obj5723_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5243";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5723_SCEventCounterReachedTargetValue_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5723_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj5360
(function(){
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = obj5723_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj5360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5723_SCEventCounterReachedTargetValue_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5723_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj5723_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5723").trigger("obj5723_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5723) {
				console.warn("de-queueing event obj5723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5725();
function wait_5725() {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = obj5723_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5723_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 1000);
}


























};
obj5723_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5723").trigger("obj5723_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5723) {
				console.warn("de-queueing event obj5723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_5727();
function goToPage_5727() {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = obj5723_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor271")[0].click();
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj5723_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5723_SCEventCounterReachedTargetValue_actionGroup3();
}
}










































};
obj5723_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5723").trigger("obj5723_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5723) {
				console.warn("de-queueing event obj5723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	











































};
obj9438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9438_onTap_activeActionGroupIndex = -1;
		$("#obj9438").trigger("obj9438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9438) {
				console.warn("de-queueing event obj9438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9438_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9432
(function(){
	window.obj9438_onTap_runningActionsCount = obj9438_onTap_runningActionsCount + 1;


	var selector = "#obj9432";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9438_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9438_onTap_activeActionGroupIndex = -1;
		$("#obj9438").trigger("obj9438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9438) {
				console.warn("de-queueing event obj9438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9438_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9438 
hide_9441();
function hide_9441() {
	var selector = "#obj9438";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9438_onTap_runningActionsCount = obj9438_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9441(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9438_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9438_onTap_activeActionGroupIndex = -1;
		$("#obj9438").trigger("obj9438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9438) {
				console.warn("de-queueing event obj9438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9438_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj9428
(function(){
	window.obj9438_onTap_runningActionsCount = obj9438_onTap_runningActionsCount + 1;


	var selector = "#obj9428";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj9430
(function(){
	window.obj9438_onTap_runningActionsCount = obj9438_onTap_runningActionsCount + 1;


	var selector = "#obj9430";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9438_onTap_runningActionsCount = window.obj9438_onTap_runningActionsCount - 1;

if (window.obj9438_onTap_runningActionsCount < 0) {
	window.obj9438_onTap_runningActionsCount = 0;
} else if (window.obj9438_onTap_runningActionsCount == 0) {
	obj9438_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9438_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9438_onTap_activeActionGroupIndex = -1;
		$("#obj9438").trigger("obj9438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9438) {
				console.warn("de-queueing event obj9438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9438_onTap_activeActionGroupIndex = 3;
	











































};
obj9432_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9432_onTap_activeActionGroupIndex = -1;
		$("#obj9432").trigger("obj9432_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9432) {
				console.warn("de-queueing event obj9432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9432_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj9438
(function(){
	window.obj9432_onTap_runningActionsCount = obj9432_onTap_runningActionsCount + 1;


	var selector = "#obj9438";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj9432_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9432_onTap_activeActionGroupIndex = -1;
		$("#obj9432").trigger("obj9432_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9432) {
				console.warn("de-queueing event obj9432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9432_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9432 
hide_9435();
function hide_9435() {
	var selector = "#obj9432";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9432_onTap_runningActionsCount = obj9432_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9435(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9432_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9432_onTap_activeActionGroupIndex = -1;
		$("#obj9432").trigger("obj9432_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9432) {
				console.warn("de-queueing event obj9432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9432_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj9430 
hide_9436();
function hide_9436() {
	var selector = "#obj9430";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9432_onTap_runningActionsCount = obj9432_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9436(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj9428 
hide_9437();
function hide_9437() {
	var selector = "#obj9428";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9432_onTap_runningActionsCount = obj9432_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9437(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9432_onTap_runningActionsCount = window.obj9432_onTap_runningActionsCount - 1;

if (window.obj9432_onTap_runningActionsCount < 0) {
	window.obj9432_onTap_runningActionsCount = 0;
} else if (window.obj9432_onTap_runningActionsCount == 0) {
	obj9432_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj9432_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9432_onTap_activeActionGroupIndex = -1;
		$("#obj9432").trigger("obj9432_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9432) {
				console.warn("de-queueing event obj9432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9432_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj4713: Event Touch Down
 *
 */

$("#obj4713").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4713_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4713_onTap is still running");
	return;
}
var obj4713_onTap_runningActionsCount = 0;
var obj4713_onTap_loopCount = 0;
obj4713_onTap_actionGroup0();
});


















/*
 *
 *   obj4716: Event Touch Down
 *
 */

$("#obj4716").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4716_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4716_onTap is still running");
	return;
}
var obj4716_onTap_runningActionsCount = 0;
var obj4716_onTap_loopCount = 0;
obj4716_onTap_actionGroup0();
});
























































/*
 *
 *   obj4723: Event Touch Down
 *
 */

$("#obj4723").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4723_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4723_onTap is still running");
	return;
}
var obj4723_onTap_runningActionsCount = 0;
var obj4723_onTap_loopCount = 0;
obj4723_onTap_actionGroup0();
});


















/*
 *
 *   obj5078: Event Touch Down
 *
 */

$("#obj5078").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5078_onTap is still running");
	return;
}
var obj5078_onTap_runningActionsCount = 0;
var obj5078_onTap_loopCount = 0;
obj5078_onTap_actionGroup0();
});








































































































































































































































































































































































/*
 *
 *   obj5249: Event Touch Down
 *
 */

$("#obj5249").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5249_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5249_onTap is still running");
	return;
}
var obj5249_onTap_runningActionsCount = 0;
var obj5249_onTap_loopCount = 0;
obj5249_onTap_actionGroup0();
});


















/*
 *
 *   obj5251: Event Touch Down
 *
 */

$("#obj5251").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5251_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5251_onTap is still running");
	return;
}
var obj5251_onTap_runningActionsCount = 0;
var obj5251_onTap_loopCount = 0;
obj5251_onTap_actionGroup0();
});


















/*
 *
 *   obj5253: Event Touch Down
 *
 */

$("#obj5253").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5253_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5253_onTap is still running");
	return;
}
var obj5253_onTap_runningActionsCount = 0;
var obj5253_onTap_loopCount = 0;
obj5253_onTap_actionGroup0();
});


















/*
 *
 *   obj5255: Event Touch Down
 *
 */

$("#obj5255").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5255_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5255_onTap is still running");
	return;
}
var obj5255_onTap_runningActionsCount = 0;
var obj5255_onTap_loopCount = 0;
obj5255_onTap_actionGroup0();
});





































/*
 *
 *   obj9412: Event Touch Down
 *
 */

$("#obj9412").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9412_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9412_onTap is still running");
	return;
}
var obj9412_onTap_runningActionsCount = 0;
var obj9412_onTap_loopCount = 0;
obj9412_onTap_actionGroup0();
});


















/*
 *
 *   obj5269: Event Touch Down
 *
 */

$("#obj5269").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5269_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5269_onTap is still running");
	return;
}
var obj5269_onTap_runningActionsCount = 0;
var obj5269_onTap_loopCount = 0;
obj5269_onTap_actionGroup0();
});


















/*
 *
 *   obj5281: Event Touch Down
 *
 */

$("#obj5281").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5281_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5281_onTap is still running");
	return;
}
var obj5281_onTap_runningActionsCount = 0;
var obj5281_onTap_loopCount = 0;
obj5281_onTap_actionGroup0();
});


















/*
 *
 *   obj5299: Event Touch Down
 *
 */

$("#obj5299").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5299_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5299_onTap is still running");
	return;
}
var obj5299_onTap_runningActionsCount = 0;
var obj5299_onTap_loopCount = 0;
obj5299_onTap_actionGroup0();
});


















/*
 *
 *   obj5290: Event Touch Down
 *
 */

$("#obj5290").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5290_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5290_onTap is still running");
	return;
}
var obj5290_onTap_runningActionsCount = 0;
var obj5290_onTap_loopCount = 0;
obj5290_onTap_actionGroup0();
});


















/*
 *
 *   obj5317: Event Touch Down
 *
 */

$("#obj5317").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5317_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5317_onTap is still running");
	return;
}
var obj5317_onTap_runningActionsCount = 0;
var obj5317_onTap_loopCount = 0;
obj5317_onTap_actionGroup0();
});


















/*
 *
 *   obj5308: Event Touch Down
 *
 */

$("#obj5308").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5308_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5308_onTap is still running");
	return;
}
var obj5308_onTap_runningActionsCount = 0;
var obj5308_onTap_loopCount = 0;
obj5308_onTap_actionGroup0();
});


















/*
 *
 *   obj5335: Event Touch Down
 *
 */

$("#obj5335").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5335_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5335_onTap is still running");
	return;
}
var obj5335_onTap_runningActionsCount = 0;
var obj5335_onTap_loopCount = 0;
obj5335_onTap_actionGroup0();
});


















/*
 *
 *   obj5326: Event Touch Down
 *
 */

$("#obj5326").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5326_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5326_onTap is still running");
	return;
}
var obj5326_onTap_runningActionsCount = 0;
var obj5326_onTap_loopCount = 0;
obj5326_onTap_actionGroup0();
});


















/*
 *
 *   obj5353: Event Touch Down
 *
 */

$("#obj5353").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5353_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5353_onTap is still running");
	return;
}
var obj5353_onTap_runningActionsCount = 0;
var obj5353_onTap_loopCount = 0;
obj5353_onTap_actionGroup0();
});














































/*
 *
 *   obj5373: Event SCEventRun
 *
 */

$("#obj5373").bind("SCEventRun", function(event) {
	if (window.obj5373_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5373_SCEventRun is still running");
	return;
}
var obj5373_SCEventRun_runningActionsCount = 0;
var obj5373_SCEventRun_loopCount = 0;
obj5373_SCEventRun_actionGroup0();
});


















/*
 *
 *   obj5386: Event SCEventRun
 *
 */

$("#obj5386").bind("SCEventRun", function(event) {
	if (window.obj5386_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5386_SCEventRun is still running");
	return;
}
var obj5386_SCEventRun_runningActionsCount = 0;
var obj5386_SCEventRun_loopCount = 0;
obj5386_SCEventRun_actionGroup0();
});









/*
 *
 *   obj9405: Event Touch Down
 *
 */

$("#obj9405").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9405_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9405_onTap is still running");
	return;
}
var obj9405_onTap_runningActionsCount = 0;
var obj9405_onTap_loopCount = 0;
obj9405_onTap_actionGroup0();
});


















/*
 *
 *   obj5468: Event Touch Down
 *
 */

$("#obj5468").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5468_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5468_onTap is still running");
	return;
}
var obj5468_onTap_runningActionsCount = 0;
var obj5468_onTap_loopCount = 0;
obj5468_onTap_actionGroup0();
});


















/*
 *
 *   obj5461: Event Touch Down
 *
 */

$("#obj5461").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5461_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5461_onTap is still running");
	return;
}
var obj5461_onTap_runningActionsCount = 0;
var obj5461_onTap_loopCount = 0;
obj5461_onTap_actionGroup0();
});


















/*
 *
 *   obj5454: Event Touch Down
 *
 */

$("#obj5454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5454_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5454_onTap is still running");
	return;
}
var obj5454_onTap_runningActionsCount = 0;
var obj5454_onTap_loopCount = 0;
obj5454_onTap_actionGroup0();
});


















/*
 *
 *   obj5447: Event Touch Down
 *
 */

$("#obj5447").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5447_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5447_onTap is still running");
	return;
}
var obj5447_onTap_runningActionsCount = 0;
var obj5447_onTap_loopCount = 0;
obj5447_onTap_actionGroup0();
});


















/*
 *
 *   obj5438: Event Touch Down
 *
 */

$("#obj5438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5438_onTap is still running");
	return;
}
var obj5438_onTap_runningActionsCount = 0;
var obj5438_onTap_loopCount = 0;
obj5438_onTap_actionGroup0();
});


















/*
 *
 *   obj5431: Event Touch Down
 *
 */

$("#obj5431").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5431_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5431_onTap is still running");
	return;
}
var obj5431_onTap_runningActionsCount = 0;
var obj5431_onTap_loopCount = 0;
obj5431_onTap_actionGroup0();
});


















/*
 *
 *   obj5424: Event Touch Down
 *
 */

$("#obj5424").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5424_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5424_onTap is still running");
	return;
}
var obj5424_onTap_runningActionsCount = 0;
var obj5424_onTap_loopCount = 0;
obj5424_onTap_actionGroup0();
});


















/*
 *
 *   obj5417: Event Touch Down
 *
 */

$("#obj5417").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5417_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5417_onTap is still running");
	return;
}
var obj5417_onTap_runningActionsCount = 0;
var obj5417_onTap_loopCount = 0;
obj5417_onTap_actionGroup0();
});


















/*
 *
 *   obj5410: Event Touch Down
 *
 */

$("#obj5410").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5410_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5410_onTap is still running");
	return;
}
var obj5410_onTap_runningActionsCount = 0;
var obj5410_onTap_loopCount = 0;
obj5410_onTap_actionGroup0();
});














































/*
 *
 *   obj5397: Event SCEventRun
 *
 */

$("#obj5397").bind("SCEventRun", function(event) {
	if (window.obj5397_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5397_SCEventRun is still running");
	return;
}
var obj5397_SCEventRun_runningActionsCount = 0;
var obj5397_SCEventRun_loopCount = 0;
obj5397_SCEventRun_actionGroup0();
});









/*
 *
 *   obj9398: Event Touch Down
 *
 */

$("#obj9398").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9398_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9398_onTap is still running");
	return;
}
var obj9398_onTap_runningActionsCount = 0;
var obj9398_onTap_loopCount = 0;
obj9398_onTap_actionGroup0();
});


















/*
 *
 *   obj5589: Event Touch Down
 *
 */

$("#obj5589").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5589_onTap is still running");
	return;
}
var obj5589_onTap_runningActionsCount = 0;
var obj5589_onTap_loopCount = 0;
obj5589_onTap_actionGroup0();
});


















/*
 *
 *   obj5582: Event Touch Down
 *
 */

$("#obj5582").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5582_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5582_onTap is still running");
	return;
}
var obj5582_onTap_runningActionsCount = 0;
var obj5582_onTap_loopCount = 0;
obj5582_onTap_actionGroup0();
});


















/*
 *
 *   obj5575: Event Touch Down
 *
 */

$("#obj5575").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5575_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5575_onTap is still running");
	return;
}
var obj5575_onTap_runningActionsCount = 0;
var obj5575_onTap_loopCount = 0;
obj5575_onTap_actionGroup0();
});


















/*
 *
 *   obj5568: Event Touch Down
 *
 */

$("#obj5568").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5568_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5568_onTap is still running");
	return;
}
var obj5568_onTap_runningActionsCount = 0;
var obj5568_onTap_loopCount = 0;
obj5568_onTap_actionGroup0();
});


















/*
 *
 *   obj5561: Event Touch Down
 *
 */

$("#obj5561").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5561_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5561_onTap is still running");
	return;
}
var obj5561_onTap_runningActionsCount = 0;
var obj5561_onTap_loopCount = 0;
obj5561_onTap_actionGroup0();
});


















/*
 *
 *   obj5552: Event Touch Down
 *
 */

$("#obj5552").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5552_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5552_onTap is still running");
	return;
}
var obj5552_onTap_runningActionsCount = 0;
var obj5552_onTap_loopCount = 0;
obj5552_onTap_actionGroup0();
});


















/*
 *
 *   obj5545: Event Touch Down
 *
 */

$("#obj5545").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5545_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5545_onTap is still running");
	return;
}
var obj5545_onTap_runningActionsCount = 0;
var obj5545_onTap_loopCount = 0;
obj5545_onTap_actionGroup0();
});


















/*
 *
 *   obj5538: Event Touch Down
 *
 */

$("#obj5538").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5538_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5538_onTap is still running");
	return;
}
var obj5538_onTap_runningActionsCount = 0;
var obj5538_onTap_loopCount = 0;
obj5538_onTap_actionGroup0();
});


















/*
 *
 *   obj5531: Event Touch Down
 *
 */

$("#obj5531").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5531_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5531_onTap is still running");
	return;
}
var obj5531_onTap_runningActionsCount = 0;
var obj5531_onTap_loopCount = 0;
obj5531_onTap_actionGroup0();
});














































/*
 *
 *   obj5518: Event SCEventRun
 *
 */

$("#obj5518").bind("SCEventRun", function(event) {
	if (window.obj5518_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5518_SCEventRun is still running");
	return;
}
var obj5518_SCEventRun_runningActionsCount = 0;
var obj5518_SCEventRun_loopCount = 0;
obj5518_SCEventRun_actionGroup0();
});









/*
 *
 *   obj9391: Event Touch Down
 *
 */

$("#obj9391").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9391_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9391_onTap is still running");
	return;
}
var obj9391_onTap_runningActionsCount = 0;
var obj9391_onTap_loopCount = 0;
obj9391_onTap_actionGroup0();
});


















/*
 *
 *   obj5692: Event Touch Down
 *
 */

$("#obj5692").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5692_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5692_onTap is still running");
	return;
}
var obj5692_onTap_runningActionsCount = 0;
var obj5692_onTap_loopCount = 0;
obj5692_onTap_actionGroup0();
});


















/*
 *
 *   obj5685: Event Touch Down
 *
 */

$("#obj5685").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5685_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5685_onTap is still running");
	return;
}
var obj5685_onTap_runningActionsCount = 0;
var obj5685_onTap_loopCount = 0;
obj5685_onTap_actionGroup0();
});


















/*
 *
 *   obj5678: Event Touch Down
 *
 */

$("#obj5678").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5678_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5678_onTap is still running");
	return;
}
var obj5678_onTap_runningActionsCount = 0;
var obj5678_onTap_loopCount = 0;
obj5678_onTap_actionGroup0();
});


















/*
 *
 *   obj5671: Event Touch Down
 *
 */

$("#obj5671").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5671_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5671_onTap is still running");
	return;
}
var obj5671_onTap_runningActionsCount = 0;
var obj5671_onTap_loopCount = 0;
obj5671_onTap_actionGroup0();
});


















/*
 *
 *   obj5664: Event Touch Down
 *
 */

$("#obj5664").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5664_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5664_onTap is still running");
	return;
}
var obj5664_onTap_runningActionsCount = 0;
var obj5664_onTap_loopCount = 0;
obj5664_onTap_actionGroup0();
});


















/*
 *
 *   obj5657: Event Touch Down
 *
 */

$("#obj5657").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5657_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5657_onTap is still running");
	return;
}
var obj5657_onTap_runningActionsCount = 0;
var obj5657_onTap_loopCount = 0;
obj5657_onTap_actionGroup0();
});


















/*
 *
 *   obj5648: Event Touch Down
 *
 */

$("#obj5648").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5648_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5648_onTap is still running");
	return;
}
var obj5648_onTap_runningActionsCount = 0;
var obj5648_onTap_loopCount = 0;
obj5648_onTap_actionGroup0();
});


















/*
 *
 *   obj5641: Event Touch Down
 *
 */

$("#obj5641").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5641_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5641_onTap is still running");
	return;
}
var obj5641_onTap_runningActionsCount = 0;
var obj5641_onTap_loopCount = 0;
obj5641_onTap_actionGroup0();
});


















/*
 *
 *   obj5634: Event Touch Down
 *
 */

$("#obj5634").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5634_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5634_onTap is still running");
	return;
}
var obj5634_onTap_runningActionsCount = 0;
var obj5634_onTap_loopCount = 0;
obj5634_onTap_actionGroup0();
});














































/*
 *
 *   obj5621: Event SCEventRun
 *
 */

$("#obj5621").bind("SCEventRun", function(event) {
	if (window.obj5621_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5621_SCEventRun is still running");
	return;
}
var obj5621_SCEventRun_runningActionsCount = 0;
var obj5621_SCEventRun_loopCount = 0;
obj5621_SCEventRun_actionGroup0();
});



































































































































































































































/*
 *
 *   obj5723: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj5723").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5723_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5723_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj5723_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5723_SCEventCounterReachedTargetValue_loopCount = 0;
obj5723_SCEventCounterReachedTargetValue_actionGroup0();
});









/*
 *
 *   obj9438: Event Touch Down
 *
 */

$("#obj9438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9438_onTap is still running");
	return;
}
var obj9438_onTap_runningActionsCount = 0;
var obj9438_onTap_loopCount = 0;
obj9438_onTap_actionGroup0();
});


















/*
 *
 *   obj9432: Event Touch Down
 *
 */

$("#obj9432").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9432_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9432_onTap is still running");
	return;
}
var obj9432_onTap_runningActionsCount = 0;
var obj9432_onTap_loopCount = 0;
obj9432_onTap_actionGroup0();
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
	
$("#obj5086").trigger('SCEventShow');
$("#obj4709").trigger('SCEventShow');
$("#obj4711").trigger('SCEventShow');
$("#obj4713").trigger('SCEventShow');
$("#obj4716").trigger('SCEventShow');
$("#obj4719").trigger('SCEventShow');
$("#obj4721").trigger('SCEventShow');
$("#obj4723").trigger('SCEventShow');
$("#obj5078").trigger('SCEventShow');
$("#obj5081").trigger('SCEventShow');
$("#obj5084").trigger('SCEventShow');
$("#obj5089").trigger('SCEventShow');
$("#obj5092").trigger('SCEventShow');
$("#obj5103").trigger('SCEventShow');
$("#obj5105").trigger('SCEventShow');
$("#obj5107").trigger('SCEventShow');
$("#obj5109").trigger('SCEventShow');
$("#obj5111").trigger('SCEventShow');
$("#obj5099").trigger('SCEventShow');
$("#obj5113").trigger('SCEventShow');
$("#obj5115").trigger('SCEventShow');
$("#obj5117").trigger('SCEventShow');
$("#obj5119").trigger('SCEventShow');
$("#obj5249").trigger('SCEventShow');
$("#obj5251").trigger('SCEventShow');
$("#obj5253").trigger('SCEventShow');
$("#obj5255").trigger('SCEventShow');
$("#obj9412").trigger('SCEventShow');
$("#obj5269").trigger('SCEventShow');
$("#obj5281").trigger('SCEventShow');
$("#obj5299").trigger('SCEventShow');
$("#obj5290").trigger('SCEventShow');
$("#obj5317").trigger('SCEventShow');
$("#obj5308").trigger('SCEventShow');
$("#obj5335").trigger('SCEventShow');
$("#obj5326").trigger('SCEventShow');
$("#obj5353").trigger('SCEventShow');
$("#obj9405").trigger('SCEventShow');
$("#obj5468").trigger('SCEventShow');
$("#obj5461").trigger('SCEventShow');
$("#obj5454").trigger('SCEventShow');
$("#obj5447").trigger('SCEventShow');
$("#obj5438").trigger('SCEventShow');
$("#obj5431").trigger('SCEventShow');
$("#obj5424").trigger('SCEventShow');
$("#obj5417").trigger('SCEventShow');
$("#obj5410").trigger('SCEventShow');
$("#obj9398").trigger('SCEventShow');
$("#obj5589").trigger('SCEventShow');
$("#obj5582").trigger('SCEventShow');
$("#obj5575").trigger('SCEventShow');
$("#obj5568").trigger('SCEventShow');
$("#obj5561").trigger('SCEventShow');
$("#obj5552").trigger('SCEventShow');
$("#obj5545").trigger('SCEventShow');
$("#obj5538").trigger('SCEventShow');
$("#obj5531").trigger('SCEventShow');
$("#obj9391").trigger('SCEventShow');
$("#obj5692").trigger('SCEventShow');
$("#obj5685").trigger('SCEventShow');
$("#obj5678").trigger('SCEventShow');
$("#obj5671").trigger('SCEventShow');
$("#obj5664").trigger('SCEventShow');
$("#obj5657").trigger('SCEventShow');
$("#obj5648").trigger('SCEventShow');
$("#obj5641").trigger('SCEventShow');
$("#obj5634").trigger('SCEventShow');
$("#obj5360").trigger('SCEventShow');
$("#obj9438").trigger('SCEventShow');
	

});