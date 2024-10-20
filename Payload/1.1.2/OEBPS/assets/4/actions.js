pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 78;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj83_onTap_activeActionGroupIndex = -1;
var obj83_onTap_runningActionsCount = 0;
var obj83_onTap_loopCount = 0;
var obj85_onTap_activeActionGroupIndex = -1;
var obj85_onTap_runningActionsCount = 0;
var obj85_onTap_loopCount = 0;
var obj123_onTap_activeActionGroupIndex = -1;
var obj123_onTap_runningActionsCount = 0;
var obj123_onTap_loopCount = 0;
var obj133_onTap_activeActionGroupIndex = -1;
var obj133_onTap_runningActionsCount = 0;
var obj133_onTap_loopCount = 0;
var obj145_onTap_activeActionGroupIndex = -1;
var obj145_onTap_runningActionsCount = 0;
var obj145_onTap_loopCount = 0;
var obj139_onTap_activeActionGroupIndex = -1;
var obj139_onTap_runningActionsCount = 0;
var obj139_onTap_loopCount = 0;
var obj151_onTap_activeActionGroupIndex = -1;
var obj151_onTap_runningActionsCount = 0;
var obj151_onTap_loopCount = 0;
var obj160_onTap_activeActionGroupIndex = -1;
var obj160_onTap_runningActionsCount = 0;
var obj160_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

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
		
obj83_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83_onTap_activeActionGroupIndex = -1;
		$("#obj83").trigger("obj83_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83) {
				console.warn("de-queueing event obj83." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4401();
function goToPage_4401() {
	window.obj83_onTap_runningActionsCount = obj83_onTap_runningActionsCount + 1;

	$("#anchor25")[0].click();
	window.obj83_onTap_runningActionsCount = window.obj83_onTap_runningActionsCount - 1;

if (window.obj83_onTap_runningActionsCount < 0) {
	window.obj83_onTap_runningActionsCount = 0;
} else if (window.obj83_onTap_runningActionsCount == 0) {
	obj83_onTap_actionGroup1();
}
}










































};
obj83_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83_onTap_activeActionGroupIndex = -1;
		$("#obj83").trigger("obj83_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83) {
				console.warn("de-queueing event obj83." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83_onTap_activeActionGroupIndex = 1;
	











































};
obj85_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85_onTap_activeActionGroupIndex = -1;
		$("#obj85").trigger("obj85_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85) {
				console.warn("de-queueing event obj85." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4402();
function goToPage_4402() {
	window.obj85_onTap_runningActionsCount = obj85_onTap_runningActionsCount + 1;

	$("#anchor26")[0].click();
	window.obj85_onTap_runningActionsCount = window.obj85_onTap_runningActionsCount - 1;

if (window.obj85_onTap_runningActionsCount < 0) {
	window.obj85_onTap_runningActionsCount = 0;
} else if (window.obj85_onTap_runningActionsCount == 0) {
	obj85_onTap_actionGroup1();
}
}










































};
obj85_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85_onTap_activeActionGroupIndex = -1;
		$("#obj85").trigger("obj85_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85) {
				console.warn("de-queueing event obj85." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85_onTap_activeActionGroupIndex = 1;
	











































};
obj123_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj123_onTap_activeActionGroupIndex = -1;
		$("#obj123").trigger("obj123_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 123) {
				console.warn("de-queueing event obj123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj123_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4386
(function(){
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;


	var selector = "#obj4386";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;

if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;

if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj123 
switchImage_4380();
function switchImage_4380() {
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj123";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj123_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper27"
	var switchHelperRef = "#switchHelper27"

	var switchId = "27";
	var toSwitchId = "27";

	var fadeDuration = "0s";

	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}

	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;

if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
			}, 1);
	};

	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}

	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}

	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}

	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);

}




































};
obj123_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj123_onTap_activeActionGroupIndex = -1;
		$("#obj123").trigger("obj123_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 123) {
				console.warn("de-queueing event obj123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj123_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_4390();
function wait_4390() {
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;

if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup2();
}
	}, 500);
}


























};
obj123_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj123_onTap_activeActionGroupIndex = -1;
		$("#obj123").trigger("obj123_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 123) {
				console.warn("de-queueing event obj123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj123_onTap_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_4389();
function goToPage_4389() {
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;

	$("#anchor28")[0].click();
	window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;

if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup3();
}
}










































};
obj123_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj123_onTap_activeActionGroupIndex = -1;
		$("#obj123").trigger("obj123_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 123) {
				console.warn("de-queueing event obj123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj123_onTap_activeActionGroupIndex = 3;
	











































};
obj133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj133_onTap_activeActionGroupIndex = -1;
		$("#obj133").trigger("obj133_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 133) {
				console.warn("de-queueing event obj133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj133_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4579();
function goToPage_4579() {
	window.obj133_onTap_runningActionsCount = obj133_onTap_runningActionsCount + 1;

	$("#anchor30")[0].click();
	window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;

if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
}

//	action: show 
//	selector: #obj4386
(function(){
	window.obj133_onTap_runningActionsCount = obj133_onTap_runningActionsCount + 1;


	var selector = "#obj4386";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;

if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;

if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj133 
switchImage_4392();
function switchImage_4392() {
	window.obj133_onTap_runningActionsCount = obj133_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj133";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj133_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper29"
	var switchHelperRef = "#switchHelper29"

	var switchId = "29";
	var toSwitchId = "29";

	var fadeDuration = "0s";

	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}

	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;

if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
			}, 1);
	};

	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}

	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}

	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}

	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);

}




































};
obj133_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj133_onTap_activeActionGroupIndex = -1;
		$("#obj133").trigger("obj133_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 133) {
				console.warn("de-queueing event obj133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj133_onTap_activeActionGroupIndex = 1;
	











































};
obj145_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj145_onTap_activeActionGroupIndex = -1;
		$("#obj145").trigger("obj145_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 145) {
				console.warn("de-queueing event obj145." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj145").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj145_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13223();
function goToPage_13223() {
	window.obj145_onTap_runningActionsCount = obj145_onTap_runningActionsCount + 1;

	$("#anchor32")[0].click();
	window.obj145_onTap_runningActionsCount = window.obj145_onTap_runningActionsCount - 1;

if (window.obj145_onTap_runningActionsCount < 0) {
	window.obj145_onTap_runningActionsCount = 0;
} else if (window.obj145_onTap_runningActionsCount == 0) {
	obj145_onTap_actionGroup1();
}
}

//	action: show 
//	selector: #obj4386
(function(){
	window.obj145_onTap_runningActionsCount = obj145_onTap_runningActionsCount + 1;


	var selector = "#obj4386";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj145_onTap_runningActionsCount = window.obj145_onTap_runningActionsCount - 1;

if (window.obj145_onTap_runningActionsCount < 0) {
	window.obj145_onTap_runningActionsCount = 0;
} else if (window.obj145_onTap_runningActionsCount == 0) {
	obj145_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj145_onTap_runningActionsCount = window.obj145_onTap_runningActionsCount - 1;

if (window.obj145_onTap_runningActionsCount < 0) {
	window.obj145_onTap_runningActionsCount = 0;
} else if (window.obj145_onTap_runningActionsCount == 0) {
	obj145_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj145 
switchImage_4394();
function switchImage_4394() {
	window.obj145_onTap_runningActionsCount = obj145_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj145";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj145_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper31"
	var switchHelperRef = "#switchHelper31"

	var switchId = "31";
	var toSwitchId = "31";

	var fadeDuration = "0s";

	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}

	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj145_onTap_runningActionsCount = window.obj145_onTap_runningActionsCount - 1;

if (window.obj145_onTap_runningActionsCount < 0) {
	window.obj145_onTap_runningActionsCount = 0;
} else if (window.obj145_onTap_runningActionsCount == 0) {
	obj145_onTap_actionGroup1();
}
			}, 1);
	};

	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}

	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}

	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}

	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);

}




































};
obj145_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj145_onTap_activeActionGroupIndex = -1;
		$("#obj145").trigger("obj145_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 145) {
				console.warn("de-queueing event obj145." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj145").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj145_onTap_activeActionGroupIndex = 1;
	











































};
obj139_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj139_onTap_activeActionGroupIndex = -1;
		$("#obj139").trigger("obj139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 139) {
				console.warn("de-queueing event obj139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj139_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13491();
function goToPage_13491() {
	window.obj139_onTap_runningActionsCount = obj139_onTap_runningActionsCount + 1;

	$("#anchor34")[0].click();
	window.obj139_onTap_runningActionsCount = window.obj139_onTap_runningActionsCount - 1;

if (window.obj139_onTap_runningActionsCount < 0) {
	window.obj139_onTap_runningActionsCount = 0;
} else if (window.obj139_onTap_runningActionsCount == 0) {
	obj139_onTap_actionGroup1();
}
}

//	action: show 
//	selector: #obj4386
(function(){
	window.obj139_onTap_runningActionsCount = obj139_onTap_runningActionsCount + 1;


	var selector = "#obj4386";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj139_onTap_runningActionsCount = window.obj139_onTap_runningActionsCount - 1;

if (window.obj139_onTap_runningActionsCount < 0) {
	window.obj139_onTap_runningActionsCount = 0;
} else if (window.obj139_onTap_runningActionsCount == 0) {
	obj139_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj139_onTap_runningActionsCount = window.obj139_onTap_runningActionsCount - 1;

if (window.obj139_onTap_runningActionsCount < 0) {
	window.obj139_onTap_runningActionsCount = 0;
} else if (window.obj139_onTap_runningActionsCount == 0) {
	obj139_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj139 
switchImage_4396();
function switchImage_4396() {
	window.obj139_onTap_runningActionsCount = obj139_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj139";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj139_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper33"
	var switchHelperRef = "#switchHelper33"

	var switchId = "33";
	var toSwitchId = "33";

	var fadeDuration = "0s";

	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}

	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj139_onTap_runningActionsCount = window.obj139_onTap_runningActionsCount - 1;

if (window.obj139_onTap_runningActionsCount < 0) {
	window.obj139_onTap_runningActionsCount = 0;
} else if (window.obj139_onTap_runningActionsCount == 0) {
	obj139_onTap_actionGroup1();
}
			}, 1);
	};

	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}

	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}

	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}

	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);

}




































};
obj139_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj139_onTap_activeActionGroupIndex = -1;
		$("#obj139").trigger("obj139_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 139) {
				console.warn("de-queueing event obj139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj139_onTap_activeActionGroupIndex = 1;
	











































};
obj151_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj151_onTap_activeActionGroupIndex = -1;
		$("#obj151").trigger("obj151_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 151) {
				console.warn("de-queueing event obj151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj151_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22205();
function goToPage_22205() {
	window.obj151_onTap_runningActionsCount = obj151_onTap_runningActionsCount + 1;

	$("#anchor36")[0].click();
	window.obj151_onTap_runningActionsCount = window.obj151_onTap_runningActionsCount - 1;

if (window.obj151_onTap_runningActionsCount < 0) {
	window.obj151_onTap_runningActionsCount = 0;
} else if (window.obj151_onTap_runningActionsCount == 0) {
	obj151_onTap_actionGroup1();
}
}

//	action: show 
//	selector: #obj4386
(function(){
	window.obj151_onTap_runningActionsCount = obj151_onTap_runningActionsCount + 1;


	var selector = "#obj4386";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj151_onTap_runningActionsCount = window.obj151_onTap_runningActionsCount - 1;

if (window.obj151_onTap_runningActionsCount < 0) {
	window.obj151_onTap_runningActionsCount = 0;
} else if (window.obj151_onTap_runningActionsCount == 0) {
	obj151_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj151_onTap_runningActionsCount = window.obj151_onTap_runningActionsCount - 1;

if (window.obj151_onTap_runningActionsCount < 0) {
	window.obj151_onTap_runningActionsCount = 0;
} else if (window.obj151_onTap_runningActionsCount == 0) {
	obj151_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj151 
switchImage_4398();
function switchImage_4398() {
	window.obj151_onTap_runningActionsCount = obj151_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj151";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj151_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper35"
	var switchHelperRef = "#switchHelper35"

	var switchId = "35";
	var toSwitchId = "35";

	var fadeDuration = "0s";

	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}

	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj151_onTap_runningActionsCount = window.obj151_onTap_runningActionsCount - 1;

if (window.obj151_onTap_runningActionsCount < 0) {
	window.obj151_onTap_runningActionsCount = 0;
} else if (window.obj151_onTap_runningActionsCount == 0) {
	obj151_onTap_actionGroup1();
}
			}, 1);
	};

	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}

	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}

	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}

	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);

}




































};
obj151_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj151_onTap_activeActionGroupIndex = -1;
		$("#obj151").trigger("obj151_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 151) {
				console.warn("de-queueing event obj151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj151_onTap_activeActionGroupIndex = 1;
	











































};
obj160_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 160) {
				console.warn("de-queueing event obj160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4386
(function(){
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;


	var selector = "#obj4386";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount < 0) {
	window.obj160_onTap_runningActionsCount = 0;
} else if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount < 0) {
	window.obj160_onTap_runningActionsCount = 0;
} else if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj160 
switchImage_4400();
function switchImage_4400() {
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj160";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj160_img";
	var fromImagePath = "../images/obj160_image.jpeg";
	var toImagePath = "../images/switch37_to.jpeg";

	var switchHelperId = "switchHelper37"
	var switchHelperRef = "#switchHelper37"

	var switchId = "37";
	var toSwitchId = "37";

	var fadeDuration = "0s";

	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}

	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount < 0) {
	window.obj160_onTap_runningActionsCount = 0;
} else if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
			}, 1);
	};

	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}

	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}

	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}

	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);

}




































};
obj160_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 160) {
				console.warn("de-queueing event obj160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj83: Event Touch Down
 *
 */

$("#obj83").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83_onTap is still running");
	return;
}
var obj83_onTap_runningActionsCount = 0;
var obj83_onTap_loopCount = 0;
obj83_onTap_actionGroup0();
});


















/*
 *
 *   obj85: Event Touch Down
 *
 */

$("#obj85").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85_onTap is still running");
	return;
}
var obj85_onTap_runningActionsCount = 0;
var obj85_onTap_loopCount = 0;
obj85_onTap_actionGroup0();
});




































































































































/*
 *
 *   obj123: Event Touch Down
 *
 */

$("#obj123").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj123_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj123_onTap is still running");
	return;
}
var obj123_onTap_runningActionsCount = 0;
var obj123_onTap_loopCount = 0;
obj123_onTap_actionGroup0();
});
























































/*
 *
 *   obj133: Event Touch Down
 *
 */

$("#obj133").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj133_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj133_onTap is still running");
	return;
}
var obj133_onTap_runningActionsCount = 0;
var obj133_onTap_loopCount = 0;
obj133_onTap_actionGroup0();
});
























































/*
 *
 *   obj145: Event Touch Down
 *
 */

$("#obj145").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj145_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj145_onTap is still running");
	return;
}
var obj145_onTap_runningActionsCount = 0;
var obj145_onTap_loopCount = 0;
obj145_onTap_actionGroup0();
});
























































/*
 *
 *   obj139: Event Touch Down
 *
 */

$("#obj139").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj139_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj139_onTap is still running");
	return;
}
var obj139_onTap_runningActionsCount = 0;
var obj139_onTap_loopCount = 0;
obj139_onTap_actionGroup0();
});
























































/*
 *
 *   obj151: Event Touch Down
 *
 */

$("#obj151").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj151_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj151_onTap is still running");
	return;
}
var obj151_onTap_runningActionsCount = 0;
var obj151_onTap_loopCount = 0;
obj151_onTap_actionGroup0();
});
























































/*
 *
 *   obj160: Event Touch Down
 *
 */

$("#obj160").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj160_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj160_onTap is still running");
	return;
}
var obj160_onTap_runningActionsCount = 0;
var obj160_onTap_loopCount = 0;
obj160_onTap_actionGroup0();
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
	
$("#obj81").trigger('SCEventShow');
$("#obj83").trigger('SCEventShow');
$("#obj85").trigger('SCEventShow');
$("#obj87").trigger('SCEventShow');
$("#obj89").trigger('SCEventShow');
$("#obj91").trigger('SCEventShow');
$("#obj115").trigger('SCEventShow');
$("#obj118").trigger('SCEventShow');
$("#obj120").trigger('SCEventShow');
$("#obj123").trigger('SCEventShow');
$("#obj125").trigger('SCEventShow');
$("#obj127").trigger('SCEventShow');
$("#obj133").trigger('SCEventShow');
$("#obj131").trigger('SCEventShow');
$("#obj129").trigger('SCEventShow');
$("#obj145").trigger('SCEventShow');
$("#obj143").trigger('SCEventShow');
$("#obj141").trigger('SCEventShow');
$("#obj139").trigger('SCEventShow');
$("#obj137").trigger('SCEventShow');
$("#obj135").trigger('SCEventShow');
$("#obj151").trigger('SCEventShow');
$("#obj149").trigger('SCEventShow');
$("#obj147").trigger('SCEventShow');
$("#obj160").trigger('SCEventShow');
$("#obj155").trigger('SCEventShow');
$("#obj153").trigger('SCEventShow');
	

});