pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 162;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj165_onTap_activeActionGroupIndex = -1;
var obj165_onTap_runningActionsCount = 0;
var obj165_onTap_loopCount = 0;
var obj167_onTap_activeActionGroupIndex = -1;
var obj167_onTap_runningActionsCount = 0;
var obj167_onTap_loopCount = 0;
var obj181_onTap_activeActionGroupIndex = -1;
var obj181_onTap_runningActionsCount = 0;
var obj181_onTap_loopCount = 0;
var obj187_onTap_activeActionGroupIndex = -1;
var obj187_onTap_runningActionsCount = 0;
var obj187_onTap_loopCount = 0;
var obj193_onTap_activeActionGroupIndex = -1;
var obj193_onTap_runningActionsCount = 0;
var obj193_onTap_loopCount = 0;
var obj199_onTap_activeActionGroupIndex = -1;
var obj199_onTap_runningActionsCount = 0;
var obj199_onTap_loopCount = 0;
var obj221_onTap_activeActionGroupIndex = -1;
var obj221_onTap_runningActionsCount = 0;
var obj221_onTap_loopCount = 0;
var obj230_onTap_activeActionGroupIndex = -1;
var obj230_onTap_runningActionsCount = 0;
var obj230_onTap_loopCount = 0;

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
		
obj165_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj165_onTap_activeActionGroupIndex = -1;
		$("#obj165").trigger("obj165_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 165) {
				console.warn("de-queueing event obj165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj165_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4431();
function goToPage_4431() {
	window.obj165_onTap_runningActionsCount = obj165_onTap_runningActionsCount + 1;

	$("#anchor38")[0].click();
	window.obj165_onTap_runningActionsCount = window.obj165_onTap_runningActionsCount - 1;

if (window.obj165_onTap_runningActionsCount < 0) {
	window.obj165_onTap_runningActionsCount = 0;
} else if (window.obj165_onTap_runningActionsCount == 0) {
	obj165_onTap_actionGroup1();
}
}










































};
obj165_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj165_onTap_activeActionGroupIndex = -1;
		$("#obj165").trigger("obj165_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 165) {
				console.warn("de-queueing event obj165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj165_onTap_activeActionGroupIndex = 1;
	











































};
obj167_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj167_onTap_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 167) {
				console.warn("de-queueing event obj167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj167_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4432();
function goToPage_4432() {
	window.obj167_onTap_runningActionsCount = obj167_onTap_runningActionsCount + 1;

	$("#anchor39")[0].click();
	window.obj167_onTap_runningActionsCount = window.obj167_onTap_runningActionsCount - 1;

if (window.obj167_onTap_runningActionsCount < 0) {
	window.obj167_onTap_runningActionsCount = 0;
} else if (window.obj167_onTap_runningActionsCount == 0) {
	obj167_onTap_actionGroup1();
}
}










































};
obj167_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj167_onTap_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 167) {
				console.warn("de-queueing event obj167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj167_onTap_activeActionGroupIndex = 1;
	











































};
obj181_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj181_onTap_activeActionGroupIndex = -1;
		$("#obj181").trigger("obj181_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 181) {
				console.warn("de-queueing event obj181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj181_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4403
(function(){
	window.obj181_onTap_runningActionsCount = obj181_onTap_runningActionsCount + 1;


	var selector = "#obj4403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj181_onTap_runningActionsCount = window.obj181_onTap_runningActionsCount - 1;

if (window.obj181_onTap_runningActionsCount < 0) {
	window.obj181_onTap_runningActionsCount = 0;
} else if (window.obj181_onTap_runningActionsCount == 0) {
	obj181_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj181_onTap_runningActionsCount = window.obj181_onTap_runningActionsCount - 1;

if (window.obj181_onTap_runningActionsCount < 0) {
	window.obj181_onTap_runningActionsCount = 0;
} else if (window.obj181_onTap_runningActionsCount == 0) {
	obj181_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj181 
switchImage_4406();
function switchImage_4406() {
	window.obj181_onTap_runningActionsCount = obj181_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj181";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj181_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper40"
	var switchHelperRef = "#switchHelper40"

	var switchId = "40";
	var toSwitchId = "40";

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
				window.obj181_onTap_runningActionsCount = window.obj181_onTap_runningActionsCount - 1;

if (window.obj181_onTap_runningActionsCount < 0) {
	window.obj181_onTap_runningActionsCount = 0;
} else if (window.obj181_onTap_runningActionsCount == 0) {
	obj181_onTap_actionGroup1();
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
obj181_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj181_onTap_activeActionGroupIndex = -1;
		$("#obj181").trigger("obj181_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 181) {
				console.warn("de-queueing event obj181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj181_onTap_activeActionGroupIndex = 1;
	











































};
obj187_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj187_onTap_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 187) {
				console.warn("de-queueing event obj187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj187_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4403
(function(){
	window.obj187_onTap_runningActionsCount = obj187_onTap_runningActionsCount + 1;


	var selector = "#obj4403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;

if (window.obj187_onTap_runningActionsCount < 0) {
	window.obj187_onTap_runningActionsCount = 0;
} else if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;

if (window.obj187_onTap_runningActionsCount < 0) {
	window.obj187_onTap_runningActionsCount = 0;
} else if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj187 
switchImage_4408();
function switchImage_4408() {
	window.obj187_onTap_runningActionsCount = obj187_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj187";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj187_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper41"
	var switchHelperRef = "#switchHelper41"

	var switchId = "41";
	var toSwitchId = "41";

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
				window.obj187_onTap_runningActionsCount = window.obj187_onTap_runningActionsCount - 1;

if (window.obj187_onTap_runningActionsCount < 0) {
	window.obj187_onTap_runningActionsCount = 0;
} else if (window.obj187_onTap_runningActionsCount == 0) {
	obj187_onTap_actionGroup1();
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
obj187_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj187_onTap_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 187) {
				console.warn("de-queueing event obj187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj187_onTap_activeActionGroupIndex = 1;
	











































};
obj193_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_onTap_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 193) {
				console.warn("de-queueing event obj193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj193_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4403
(function(){
	window.obj193_onTap_runningActionsCount = obj193_onTap_runningActionsCount + 1;


	var selector = "#obj4403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj193_onTap_runningActionsCount = window.obj193_onTap_runningActionsCount - 1;

if (window.obj193_onTap_runningActionsCount < 0) {
	window.obj193_onTap_runningActionsCount = 0;
} else if (window.obj193_onTap_runningActionsCount == 0) {
	obj193_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj193_onTap_runningActionsCount = window.obj193_onTap_runningActionsCount - 1;

if (window.obj193_onTap_runningActionsCount < 0) {
	window.obj193_onTap_runningActionsCount = 0;
} else if (window.obj193_onTap_runningActionsCount == 0) {
	obj193_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj193 
switchImage_4410();
function switchImage_4410() {
	window.obj193_onTap_runningActionsCount = obj193_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj193";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj193_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper42"
	var switchHelperRef = "#switchHelper42"

	var switchId = "42";
	var toSwitchId = "42";

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
				window.obj193_onTap_runningActionsCount = window.obj193_onTap_runningActionsCount - 1;

if (window.obj193_onTap_runningActionsCount < 0) {
	window.obj193_onTap_runningActionsCount = 0;
} else if (window.obj193_onTap_runningActionsCount == 0) {
	obj193_onTap_actionGroup1();
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
obj193_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj193_onTap_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 193) {
				console.warn("de-queueing event obj193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj193_onTap_activeActionGroupIndex = 1;
	











































};
obj199_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj199_onTap_activeActionGroupIndex = -1;
		$("#obj199").trigger("obj199_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 199) {
				console.warn("de-queueing event obj199." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj199").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj199_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4403
(function(){
	window.obj199_onTap_runningActionsCount = obj199_onTap_runningActionsCount + 1;


	var selector = "#obj4403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj199_onTap_runningActionsCount = window.obj199_onTap_runningActionsCount - 1;

if (window.obj199_onTap_runningActionsCount < 0) {
	window.obj199_onTap_runningActionsCount = 0;
} else if (window.obj199_onTap_runningActionsCount == 0) {
	obj199_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj199_onTap_runningActionsCount = window.obj199_onTap_runningActionsCount - 1;

if (window.obj199_onTap_runningActionsCount < 0) {
	window.obj199_onTap_runningActionsCount = 0;
} else if (window.obj199_onTap_runningActionsCount == 0) {
	obj199_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj199 
switchImage_4412();
function switchImage_4412() {
	window.obj199_onTap_runningActionsCount = obj199_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj199";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj199_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper43"
	var switchHelperRef = "#switchHelper43"

	var switchId = "43";
	var toSwitchId = "43";

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
				window.obj199_onTap_runningActionsCount = window.obj199_onTap_runningActionsCount - 1;

if (window.obj199_onTap_runningActionsCount < 0) {
	window.obj199_onTap_runningActionsCount = 0;
} else if (window.obj199_onTap_runningActionsCount == 0) {
	obj199_onTap_actionGroup1();
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
obj199_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj199_onTap_activeActionGroupIndex = -1;
		$("#obj199").trigger("obj199_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 199) {
				console.warn("de-queueing event obj199." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj199").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj199_onTap_activeActionGroupIndex = 1;
	











































};
obj221_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj221_onTap_activeActionGroupIndex = -1;
		$("#obj221").trigger("obj221_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 221) {
				console.warn("de-queueing event obj221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj221_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4403
(function(){
	window.obj221_onTap_runningActionsCount = obj221_onTap_runningActionsCount + 1;


	var selector = "#obj4403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj221_onTap_runningActionsCount = window.obj221_onTap_runningActionsCount - 1;

if (window.obj221_onTap_runningActionsCount < 0) {
	window.obj221_onTap_runningActionsCount = 0;
} else if (window.obj221_onTap_runningActionsCount == 0) {
	obj221_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj221_onTap_runningActionsCount = window.obj221_onTap_runningActionsCount - 1;

if (window.obj221_onTap_runningActionsCount < 0) {
	window.obj221_onTap_runningActionsCount = 0;
} else if (window.obj221_onTap_runningActionsCount == 0) {
	obj221_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj221 
switchImage_4414();
function switchImage_4414() {
	window.obj221_onTap_runningActionsCount = obj221_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj221";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj221_img";
	var fromImagePath = "../images/obj221_image.jpeg";
	var toImagePath = "../images/switch44_to.jpeg";

	var switchHelperId = "switchHelper44"
	var switchHelperRef = "#switchHelper44"

	var switchId = "44";
	var toSwitchId = "44";

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
				window.obj221_onTap_runningActionsCount = window.obj221_onTap_runningActionsCount - 1;

if (window.obj221_onTap_runningActionsCount < 0) {
	window.obj221_onTap_runningActionsCount = 0;
} else if (window.obj221_onTap_runningActionsCount == 0) {
	obj221_onTap_actionGroup1();
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
obj221_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj221_onTap_activeActionGroupIndex = -1;
		$("#obj221").trigger("obj221_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 221) {
				console.warn("de-queueing event obj221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj221_onTap_activeActionGroupIndex = 1;
	











































};
obj230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj230_onTap_activeActionGroupIndex = -1;
		$("#obj230").trigger("obj230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 230) {
				console.warn("de-queueing event obj230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj230_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4403
(function(){
	window.obj230_onTap_runningActionsCount = obj230_onTap_runningActionsCount + 1;


	var selector = "#obj4403";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj230_onTap_runningActionsCount = window.obj230_onTap_runningActionsCount - 1;

if (window.obj230_onTap_runningActionsCount < 0) {
	window.obj230_onTap_runningActionsCount = 0;
} else if (window.obj230_onTap_runningActionsCount == 0) {
	obj230_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj230_onTap_runningActionsCount = window.obj230_onTap_runningActionsCount - 1;

if (window.obj230_onTap_runningActionsCount < 0) {
	window.obj230_onTap_runningActionsCount = 0;
} else if (window.obj230_onTap_runningActionsCount == 0) {
	obj230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj230 
switchImage_4416();
function switchImage_4416() {
	window.obj230_onTap_runningActionsCount = obj230_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj230";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj230_img";
	var fromImagePath = "../images/obj230_image.jpeg";
	var toImagePath = "../images/switch45_to.jpeg";

	var switchHelperId = "switchHelper45"
	var switchHelperRef = "#switchHelper45"

	var switchId = "45";
	var toSwitchId = "45";

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
				window.obj230_onTap_runningActionsCount = window.obj230_onTap_runningActionsCount - 1;

if (window.obj230_onTap_runningActionsCount < 0) {
	window.obj230_onTap_runningActionsCount = 0;
} else if (window.obj230_onTap_runningActionsCount == 0) {
	obj230_onTap_actionGroup1();
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
obj230_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj230_onTap_activeActionGroupIndex = -1;
		$("#obj230").trigger("obj230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 230) {
				console.warn("de-queueing event obj230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj230_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj165: Event Touch Down
 *
 */

$("#obj165").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj165_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj165_onTap is still running");
	return;
}
var obj165_onTap_runningActionsCount = 0;
var obj165_onTap_loopCount = 0;
obj165_onTap_actionGroup0();
});


















/*
 *
 *   obj167: Event Touch Down
 *
 */

$("#obj167").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj167_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj167_onTap is still running");
	return;
}
var obj167_onTap_runningActionsCount = 0;
var obj167_onTap_loopCount = 0;
obj167_onTap_actionGroup0();
});











































































/*
 *
 *   obj181: Event Touch Down
 *
 */

$("#obj181").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj181_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj181_onTap is still running");
	return;
}
var obj181_onTap_runningActionsCount = 0;
var obj181_onTap_loopCount = 0;
obj181_onTap_actionGroup0();
});
























































/*
 *
 *   obj187: Event Touch Down
 *
 */

$("#obj187").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj187_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj187_onTap is still running");
	return;
}
var obj187_onTap_runningActionsCount = 0;
var obj187_onTap_loopCount = 0;
obj187_onTap_actionGroup0();
});
























































/*
 *
 *   obj193: Event Touch Down
 *
 */

$("#obj193").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj193_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj193_onTap is still running");
	return;
}
var obj193_onTap_runningActionsCount = 0;
var obj193_onTap_loopCount = 0;
obj193_onTap_actionGroup0();
});
























































/*
 *
 *   obj199: Event Touch Down
 *
 */

$("#obj199").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj199_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj199_onTap is still running");
	return;
}
var obj199_onTap_runningActionsCount = 0;
var obj199_onTap_loopCount = 0;
obj199_onTap_actionGroup0();
});
























































/*
 *
 *   obj221: Event Touch Down
 *
 */

$("#obj221").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj221_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj221_onTap is still running");
	return;
}
var obj221_onTap_runningActionsCount = 0;
var obj221_onTap_loopCount = 0;
obj221_onTap_actionGroup0();
});
























































/*
 *
 *   obj230: Event Touch Down
 *
 */

$("#obj230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj230_onTap is still running");
	return;
}
var obj230_onTap_runningActionsCount = 0;
var obj230_onTap_loopCount = 0;
obj230_onTap_actionGroup0();
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
	
$("#obj163").trigger('SCEventShow');
$("#obj165").trigger('SCEventShow');
$("#obj167").trigger('SCEventShow');
$("#obj169").trigger('SCEventShow');
$("#obj171").trigger('SCEventShow');
$("#obj173").trigger('SCEventShow');
$("#obj181").trigger('SCEventShow');
$("#obj183").trigger('SCEventShow');
$("#obj185").trigger('SCEventShow');
$("#obj187").trigger('SCEventShow');
$("#obj189").trigger('SCEventShow');
$("#obj191").trigger('SCEventShow');
$("#obj193").trigger('SCEventShow');
$("#obj195").trigger('SCEventShow');
$("#obj197").trigger('SCEventShow');
$("#obj199").trigger('SCEventShow');
$("#obj201").trigger('SCEventShow');
$("#obj203").trigger('SCEventShow');
$("#obj221").trigger('SCEventShow');
$("#obj225").trigger('SCEventShow');
$("#obj227").trigger('SCEventShow');
$("#obj230").trigger('SCEventShow');
$("#obj232").trigger('SCEventShow');
$("#obj234").trigger('SCEventShow');
$("#obj4403").trigger('SCEventShow');
	

});