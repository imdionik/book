pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 236;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj239_onTap_activeActionGroupIndex = -1;
var obj239_onTap_runningActionsCount = 0;
var obj239_onTap_loopCount = 0;
var obj241_onTap_activeActionGroupIndex = -1;
var obj241_onTap_runningActionsCount = 0;
var obj241_onTap_loopCount = 0;
var obj255_onTap_activeActionGroupIndex = -1;
var obj255_onTap_runningActionsCount = 0;
var obj255_onTap_loopCount = 0;
var obj267_onTap_activeActionGroupIndex = -1;
var obj267_onTap_runningActionsCount = 0;
var obj267_onTap_loopCount = 0;
var obj273_onTap_activeActionGroupIndex = -1;
var obj273_onTap_runningActionsCount = 0;
var obj273_onTap_loopCount = 0;
var obj279_onTap_activeActionGroupIndex = -1;
var obj279_onTap_runningActionsCount = 0;
var obj279_onTap_loopCount = 0;
var obj285_onTap_activeActionGroupIndex = -1;
var obj285_onTap_runningActionsCount = 0;
var obj285_onTap_loopCount = 0;

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
		
obj239_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_onTap_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 239) {
				console.warn("de-queueing event obj239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj239_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4429();
function goToPage_4429() {
	window.obj239_onTap_runningActionsCount = obj239_onTap_runningActionsCount + 1;

	$("#anchor46")[0].click();
	window.obj239_onTap_runningActionsCount = window.obj239_onTap_runningActionsCount - 1;

if (window.obj239_onTap_runningActionsCount < 0) {
	window.obj239_onTap_runningActionsCount = 0;
} else if (window.obj239_onTap_runningActionsCount == 0) {
	obj239_onTap_actionGroup1();
}
}










































};
obj239_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj239_onTap_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 239) {
				console.warn("de-queueing event obj239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj239_onTap_activeActionGroupIndex = 1;
	











































};
obj241_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj241_onTap_activeActionGroupIndex = -1;
		$("#obj241").trigger("obj241_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 241) {
				console.warn("de-queueing event obj241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj241_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4430();
function goToPage_4430() {
	window.obj241_onTap_runningActionsCount = obj241_onTap_runningActionsCount + 1;

	$("#anchor47")[0].click();
	window.obj241_onTap_runningActionsCount = window.obj241_onTap_runningActionsCount - 1;

if (window.obj241_onTap_runningActionsCount < 0) {
	window.obj241_onTap_runningActionsCount = 0;
} else if (window.obj241_onTap_runningActionsCount == 0) {
	obj241_onTap_actionGroup1();
}
}










































};
obj241_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj241_onTap_activeActionGroupIndex = -1;
		$("#obj241").trigger("obj241_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 241) {
				console.warn("de-queueing event obj241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj241_onTap_activeActionGroupIndex = 1;
	











































};
obj255_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj255_onTap_activeActionGroupIndex = -1;
		$("#obj255").trigger("obj255_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 255) {
				console.warn("de-queueing event obj255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj255_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4419
(function(){
	window.obj255_onTap_runningActionsCount = obj255_onTap_runningActionsCount + 1;


	var selector = "#obj4419";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj255_onTap_runningActionsCount = window.obj255_onTap_runningActionsCount - 1;

if (window.obj255_onTap_runningActionsCount < 0) {
	window.obj255_onTap_runningActionsCount = 0;
} else if (window.obj255_onTap_runningActionsCount == 0) {
	obj255_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj255_onTap_runningActionsCount = window.obj255_onTap_runningActionsCount - 1;

if (window.obj255_onTap_runningActionsCount < 0) {
	window.obj255_onTap_runningActionsCount = 0;
} else if (window.obj255_onTap_runningActionsCount == 0) {
	obj255_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj255 
switchImage_4418();
function switchImage_4418() {
	window.obj255_onTap_runningActionsCount = obj255_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj255";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj255_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper48"
	var switchHelperRef = "#switchHelper48"

	var switchId = "48";
	var toSwitchId = "48";

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
				window.obj255_onTap_runningActionsCount = window.obj255_onTap_runningActionsCount - 1;

if (window.obj255_onTap_runningActionsCount < 0) {
	window.obj255_onTap_runningActionsCount = 0;
} else if (window.obj255_onTap_runningActionsCount == 0) {
	obj255_onTap_actionGroup1();
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
obj255_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj255_onTap_activeActionGroupIndex = -1;
		$("#obj255").trigger("obj255_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 255) {
				console.warn("de-queueing event obj255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj255_onTap_activeActionGroupIndex = 1;
	











































};
obj267_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj267_onTap_activeActionGroupIndex = -1;
		$("#obj267").trigger("obj267_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 267) {
				console.warn("de-queueing event obj267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj267_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4419
(function(){
	window.obj267_onTap_runningActionsCount = obj267_onTap_runningActionsCount + 1;


	var selector = "#obj4419";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj267_onTap_runningActionsCount = window.obj267_onTap_runningActionsCount - 1;

if (window.obj267_onTap_runningActionsCount < 0) {
	window.obj267_onTap_runningActionsCount = 0;
} else if (window.obj267_onTap_runningActionsCount == 0) {
	obj267_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj267_onTap_runningActionsCount = window.obj267_onTap_runningActionsCount - 1;

if (window.obj267_onTap_runningActionsCount < 0) {
	window.obj267_onTap_runningActionsCount = 0;
} else if (window.obj267_onTap_runningActionsCount == 0) {
	obj267_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj267 
switchImage_4422();
function switchImage_4422() {
	window.obj267_onTap_runningActionsCount = obj267_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj267";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj267_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper49"
	var switchHelperRef = "#switchHelper49"

	var switchId = "49";
	var toSwitchId = "49";

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
				window.obj267_onTap_runningActionsCount = window.obj267_onTap_runningActionsCount - 1;

if (window.obj267_onTap_runningActionsCount < 0) {
	window.obj267_onTap_runningActionsCount = 0;
} else if (window.obj267_onTap_runningActionsCount == 0) {
	obj267_onTap_actionGroup1();
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
obj267_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj267_onTap_activeActionGroupIndex = -1;
		$("#obj267").trigger("obj267_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 267) {
				console.warn("de-queueing event obj267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj267_onTap_activeActionGroupIndex = 1;
	











































};
obj273_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj273_onTap_activeActionGroupIndex = -1;
		$("#obj273").trigger("obj273_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 273) {
				console.warn("de-queueing event obj273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj273_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4419
(function(){
	window.obj273_onTap_runningActionsCount = obj273_onTap_runningActionsCount + 1;


	var selector = "#obj4419";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj273_onTap_runningActionsCount = window.obj273_onTap_runningActionsCount - 1;

if (window.obj273_onTap_runningActionsCount < 0) {
	window.obj273_onTap_runningActionsCount = 0;
} else if (window.obj273_onTap_runningActionsCount == 0) {
	obj273_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj273_onTap_runningActionsCount = window.obj273_onTap_runningActionsCount - 1;

if (window.obj273_onTap_runningActionsCount < 0) {
	window.obj273_onTap_runningActionsCount = 0;
} else if (window.obj273_onTap_runningActionsCount == 0) {
	obj273_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj273 
switchImage_4424();
function switchImage_4424() {
	window.obj273_onTap_runningActionsCount = obj273_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj273";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj273_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper50"
	var switchHelperRef = "#switchHelper50"

	var switchId = "50";
	var toSwitchId = "50";

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
				window.obj273_onTap_runningActionsCount = window.obj273_onTap_runningActionsCount - 1;

if (window.obj273_onTap_runningActionsCount < 0) {
	window.obj273_onTap_runningActionsCount = 0;
} else if (window.obj273_onTap_runningActionsCount == 0) {
	obj273_onTap_actionGroup1();
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
obj273_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj273_onTap_activeActionGroupIndex = -1;
		$("#obj273").trigger("obj273_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 273) {
				console.warn("de-queueing event obj273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj273_onTap_activeActionGroupIndex = 1;
	











































};
obj279_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj279_onTap_activeActionGroupIndex = -1;
		$("#obj279").trigger("obj279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 279) {
				console.warn("de-queueing event obj279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj279_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4419
(function(){
	window.obj279_onTap_runningActionsCount = obj279_onTap_runningActionsCount + 1;


	var selector = "#obj4419";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj279_onTap_runningActionsCount = window.obj279_onTap_runningActionsCount - 1;

if (window.obj279_onTap_runningActionsCount < 0) {
	window.obj279_onTap_runningActionsCount = 0;
} else if (window.obj279_onTap_runningActionsCount == 0) {
	obj279_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj279_onTap_runningActionsCount = window.obj279_onTap_runningActionsCount - 1;

if (window.obj279_onTap_runningActionsCount < 0) {
	window.obj279_onTap_runningActionsCount = 0;
} else if (window.obj279_onTap_runningActionsCount == 0) {
	obj279_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj279 
switchImage_4426();
function switchImage_4426() {
	window.obj279_onTap_runningActionsCount = obj279_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj279";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj279_img";
	var fromImagePath = "../images/obj123_image.jpeg";
	var toImagePath = "../images/switch27_to.jpeg";

	var switchHelperId = "switchHelper51"
	var switchHelperRef = "#switchHelper51"

	var switchId = "51";
	var toSwitchId = "51";

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
				window.obj279_onTap_runningActionsCount = window.obj279_onTap_runningActionsCount - 1;

if (window.obj279_onTap_runningActionsCount < 0) {
	window.obj279_onTap_runningActionsCount = 0;
} else if (window.obj279_onTap_runningActionsCount == 0) {
	obj279_onTap_actionGroup1();
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
obj279_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj279_onTap_activeActionGroupIndex = -1;
		$("#obj279").trigger("obj279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 279) {
				console.warn("de-queueing event obj279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj279_onTap_activeActionGroupIndex = 1;
	











































};
obj285_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj285_onTap_activeActionGroupIndex = -1;
		$("#obj285").trigger("obj285_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 285) {
				console.warn("de-queueing event obj285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj285_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4419
(function(){
	window.obj285_onTap_runningActionsCount = obj285_onTap_runningActionsCount + 1;


	var selector = "#obj4419";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj285_onTap_runningActionsCount = window.obj285_onTap_runningActionsCount - 1;

if (window.obj285_onTap_runningActionsCount < 0) {
	window.obj285_onTap_runningActionsCount = 0;
} else if (window.obj285_onTap_runningActionsCount == 0) {
	obj285_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj285_onTap_runningActionsCount = window.obj285_onTap_runningActionsCount - 1;

if (window.obj285_onTap_runningActionsCount < 0) {
	window.obj285_onTap_runningActionsCount = 0;
} else if (window.obj285_onTap_runningActionsCount == 0) {
	obj285_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();



//	action: switchImage 
//	target: obj285 
switchImage_4428();
function switchImage_4428() {
	window.obj285_onTap_runningActionsCount = obj285_onTap_runningActionsCount + 1;


	var targetObjectId = "#obj285";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj285_img";
	var fromImagePath = "../images/obj160_image.jpeg";
	var toImagePath = "../images/switch37_to.jpeg";

	var switchHelperId = "switchHelper52"
	var switchHelperRef = "#switchHelper52"

	var switchId = "52";
	var toSwitchId = "52";

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
				window.obj285_onTap_runningActionsCount = window.obj285_onTap_runningActionsCount - 1;

if (window.obj285_onTap_runningActionsCount < 0) {
	window.obj285_onTap_runningActionsCount = 0;
} else if (window.obj285_onTap_runningActionsCount == 0) {
	obj285_onTap_actionGroup1();
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
obj285_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj285_onTap_activeActionGroupIndex = -1;
		$("#obj285").trigger("obj285_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 285) {
				console.warn("de-queueing event obj285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj285_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj239: Event Touch Down
 *
 */

$("#obj239").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj239_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj239_onTap is still running");
	return;
}
var obj239_onTap_runningActionsCount = 0;
var obj239_onTap_loopCount = 0;
obj239_onTap_actionGroup0();
});


















/*
 *
 *   obj241: Event Touch Down
 *
 */

$("#obj241").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj241_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj241_onTap is still running");
	return;
}
var obj241_onTap_runningActionsCount = 0;
var obj241_onTap_loopCount = 0;
obj241_onTap_actionGroup0();
});











































































/*
 *
 *   obj255: Event Touch Down
 *
 */

$("#obj255").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj255_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj255_onTap is still running");
	return;
}
var obj255_onTap_runningActionsCount = 0;
var obj255_onTap_loopCount = 0;
obj255_onTap_actionGroup0();
});
























































/*
 *
 *   obj267: Event Touch Down
 *
 */

$("#obj267").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj267_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj267_onTap is still running");
	return;
}
var obj267_onTap_runningActionsCount = 0;
var obj267_onTap_loopCount = 0;
obj267_onTap_actionGroup0();
});
























































/*
 *
 *   obj273: Event Touch Down
 *
 */

$("#obj273").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj273_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj273_onTap is still running");
	return;
}
var obj273_onTap_runningActionsCount = 0;
var obj273_onTap_loopCount = 0;
obj273_onTap_actionGroup0();
});
























































/*
 *
 *   obj279: Event Touch Down
 *
 */

$("#obj279").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj279_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj279_onTap is still running");
	return;
}
var obj279_onTap_runningActionsCount = 0;
var obj279_onTap_loopCount = 0;
obj279_onTap_actionGroup0();
});
























































/*
 *
 *   obj285: Event Touch Down
 *
 */

$("#obj285").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj285_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj285_onTap is still running");
	return;
}
var obj285_onTap_runningActionsCount = 0;
var obj285_onTap_loopCount = 0;
obj285_onTap_actionGroup0();
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
	
$("#obj292").trigger('SCEventShow');
$("#obj237").trigger('SCEventShow');
$("#obj239").trigger('SCEventShow');
$("#obj241").trigger('SCEventShow');
$("#obj243").trigger('SCEventShow');
$("#obj245").trigger('SCEventShow');
$("#obj247").trigger('SCEventShow');
$("#obj255").trigger('SCEventShow');
$("#obj257").trigger('SCEventShow');
$("#obj259").trigger('SCEventShow');
$("#obj267").trigger('SCEventShow');
$("#obj269").trigger('SCEventShow');
$("#obj271").trigger('SCEventShow');
$("#obj273").trigger('SCEventShow');
$("#obj275").trigger('SCEventShow');
$("#obj277").trigger('SCEventShow');
$("#obj279").trigger('SCEventShow');
$("#obj281").trigger('SCEventShow');
$("#obj283").trigger('SCEventShow');
$("#obj285").trigger('SCEventShow');
$("#obj287").trigger('SCEventShow');
$("#obj289").trigger('SCEventShow');
$("#obj4419").trigger('SCEventShow');
	

});