pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 12069;
pubcoder.page.title = pubcoder.page.title || "35";
pubcoder.page.number = pubcoder.page.number || 35;
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
var obj12076_onTap_activeActionGroupIndex = -1;
var obj12076_onTap_runningActionsCount = 0;
var obj12076_onTap_loopCount = 0;
var obj12079_onTap_activeActionGroupIndex = -1;
var obj12079_onTap_runningActionsCount = 0;
var obj12079_onTap_loopCount = 0;
var obj12086_onTap_activeActionGroupIndex = -1;
var obj12086_onTap_runningActionsCount = 0;
var obj12086_onTap_loopCount = 0;
var obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12107_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12107_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12230_onTap_activeActionGroupIndex = -1;
var obj12230_onTap_runningActionsCount = 0;
var obj12230_onTap_loopCount = 0;
var obj12262_onTap_activeActionGroupIndex = -1;
var obj12262_onTap_runningActionsCount = 0;
var obj12262_onTap_loopCount = 0;
var obj12272_onTap_activeActionGroupIndex = -1;
var obj12272_onTap_runningActionsCount = 0;
var obj12272_onTap_loopCount = 0;
var obj12282_onTap_activeActionGroupIndex = -1;
var obj12282_onTap_runningActionsCount = 0;
var obj12282_onTap_loopCount = 0;
var obj12292_onTap_activeActionGroupIndex = -1;
var obj12292_onTap_runningActionsCount = 0;
var obj12292_onTap_loopCount = 0;
var obj12302_onTap_activeActionGroupIndex = -1;
var obj12302_onTap_runningActionsCount = 0;
var obj12302_onTap_loopCount = 0;
var obj12350_onTap_activeActionGroupIndex = -1;
var obj12350_onTap_runningActionsCount = 0;
var obj12350_onTap_loopCount = 0;
var obj12340_onTap_activeActionGroupIndex = -1;
var obj12340_onTap_runningActionsCount = 0;
var obj12340_onTap_loopCount = 0;
var obj12330_onTap_activeActionGroupIndex = -1;
var obj12330_onTap_runningActionsCount = 0;
var obj12330_onTap_loopCount = 0;
var obj12320_onTap_activeActionGroupIndex = -1;
var obj12320_onTap_runningActionsCount = 0;
var obj12320_onTap_loopCount = 0;
var obj12368_onTap_activeActionGroupIndex = -1;
var obj12368_onTap_runningActionsCount = 0;
var obj12368_onTap_loopCount = 0;
var obj12362_onTap_activeActionGroupIndex = -1;
var obj12362_onTap_runningActionsCount = 0;
var obj12362_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj12107_counterValue = 0;
var obj12107_counterTargetValue = 1;
var obj12107_counterCanExceedTargetValue = false;

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
		
obj12076_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12076_onTap_activeActionGroupIndex = -1;
		$("#obj12076").trigger("obj12076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12076) {
				console.warn("de-queueing event obj12076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12076_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12078();
function goToPage_12078() {
	window.obj12076_onTap_runningActionsCount = obj12076_onTap_runningActionsCount + 1;

	$("#anchor534")[0].click();
	window.obj12076_onTap_runningActionsCount = window.obj12076_onTap_runningActionsCount - 1;

if (window.obj12076_onTap_runningActionsCount < 0) {
	window.obj12076_onTap_runningActionsCount = 0;
} else if (window.obj12076_onTap_runningActionsCount == 0) {
	obj12076_onTap_actionGroup1();
}
}










































};
obj12076_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12076_onTap_activeActionGroupIndex = -1;
		$("#obj12076").trigger("obj12076_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12076) {
				console.warn("de-queueing event obj12076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12076_onTap_activeActionGroupIndex = 1;
	











































};
obj12079_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12079_onTap_activeActionGroupIndex = -1;
		$("#obj12079").trigger("obj12079_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12079) {
				console.warn("de-queueing event obj12079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12079_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12081();
function goToPage_12081() {
	window.obj12079_onTap_runningActionsCount = obj12079_onTap_runningActionsCount + 1;

	$("#anchor535")[0].click();
	window.obj12079_onTap_runningActionsCount = window.obj12079_onTap_runningActionsCount - 1;

if (window.obj12079_onTap_runningActionsCount < 0) {
	window.obj12079_onTap_runningActionsCount = 0;
} else if (window.obj12079_onTap_runningActionsCount == 0) {
	obj12079_onTap_actionGroup1();
}
}










































};
obj12079_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12079_onTap_activeActionGroupIndex = -1;
		$("#obj12079").trigger("obj12079_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12079) {
				console.warn("de-queueing event obj12079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12079_onTap_activeActionGroupIndex = 1;
	











































};
obj12086_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12086_onTap_activeActionGroupIndex = -1;
		$("#obj12086").trigger("obj12086_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12086) {
				console.warn("de-queueing event obj12086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12086_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12088();
function goToPage_12088() {
	window.obj12086_onTap_runningActionsCount = obj12086_onTap_runningActionsCount + 1;

	$("#anchor536")[0].click();
	window.obj12086_onTap_runningActionsCount = window.obj12086_onTap_runningActionsCount - 1;

if (window.obj12086_onTap_runningActionsCount < 0) {
	window.obj12086_onTap_runningActionsCount = 0;
} else if (window.obj12086_onTap_runningActionsCount == 0) {
	obj12086_onTap_actionGroup1();
}
}










































};
obj12086_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12086_onTap_activeActionGroupIndex = -1;
		$("#obj12086").trigger("obj12086_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12086) {
				console.warn("de-queueing event obj12086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12086_onTap_activeActionGroupIndex = 1;
	











































};
obj12107_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12107").trigger("obj12107_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12107) {
				console.warn("de-queueing event obj12107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_12109();
function wait_12109() {
	window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount = obj12107_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12107_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj12107_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12107").trigger("obj12107_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12107) {
				console.warn("de-queueing event obj12107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_12110();
function goToPage_12110() {
	window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount = obj12107_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor537")[0].click();
	window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12107_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12107_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj12107_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12107").trigger("obj12107_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12107) {
				console.warn("de-queueing event obj12107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj12230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12230_onTap_activeActionGroupIndex = -1;
		$("#obj12230").trigger("obj12230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12230) {
				console.warn("de-queueing event obj12230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12230_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12257
(function(){
	window.obj12230_onTap_runningActionsCount = obj12230_onTap_runningActionsCount + 1;


	var selector = "#obj12257";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12253();
function playAudioFile_12253() {
	window.obj12230_onTap_runningActionsCount = obj12230_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12253")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12253");
			$("#obj_audio_playSoundFile12253").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup1();
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
				window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12230_onTap_activeActionGroupIndex = -1;
		$("#obj12230").trigger("obj12230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12230) {
				console.warn("de-queueing event obj12230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12230_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12254();
function switchText_12254() {
	window.obj12230_onTap_runningActionsCount = obj12230_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>0</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12230_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12230_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12230").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12230_content");
			setTimeout(function () {
				window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12230 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12230_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12230_onTap_activeActionGroupIndex = -1;
		$("#obj12230").trigger("obj12230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12230) {
				console.warn("de-queueing event obj12230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12230_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12255();
function wait_12255() {
	window.obj12230_onTap_runningActionsCount = obj12230_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12230_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12230_onTap_activeActionGroupIndex = -1;
		$("#obj12230").trigger("obj12230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12230) {
				console.warn("de-queueing event obj12230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12230_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12256();
function switchText_12256() {
	window.obj12230_onTap_runningActionsCount = obj12230_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">0</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12230_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12230_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12230").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12230_content");
			setTimeout(function () {
				window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12230 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12230_onTap_runningActionsCount = window.obj12230_onTap_runningActionsCount - 1;

if (window.obj12230_onTap_runningActionsCount < 0) {
	window.obj12230_onTap_runningActionsCount = 0;
} else if (window.obj12230_onTap_runningActionsCount == 0) {
	obj12230_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12230_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12230_onTap_activeActionGroupIndex = -1;
		$("#obj12230").trigger("obj12230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12230) {
				console.warn("de-queueing event obj12230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12230_onTap_activeActionGroupIndex = 4;
	











































};
obj12262_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12262_onTap_activeActionGroupIndex = -1;
		$("#obj12262").trigger("obj12262_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12262) {
				console.warn("de-queueing event obj12262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12262_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12260
(function(){
	window.obj12262_onTap_runningActionsCount = obj12262_onTap_runningActionsCount + 1;


	var selector = "#obj12260";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12264();
function playAudioFile_12264() {
	window.obj12262_onTap_runningActionsCount = obj12262_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12264")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12264");
			$("#obj_audio_playSoundFile12264").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup1();
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
				window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12262_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12262_onTap_activeActionGroupIndex = -1;
		$("#obj12262").trigger("obj12262_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12262) {
				console.warn("de-queueing event obj12262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12262_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12266();
function switchText_12266() {
	window.obj12262_onTap_runningActionsCount = obj12262_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>1</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12262_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12262_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12262").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12262_content");
			setTimeout(function () {
				window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12262 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12262_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12262_onTap_activeActionGroupIndex = -1;
		$("#obj12262").trigger("obj12262_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12262) {
				console.warn("de-queueing event obj12262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12262_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12267();
function wait_12267() {
	window.obj12262_onTap_runningActionsCount = obj12262_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12262_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12262_onTap_activeActionGroupIndex = -1;
		$("#obj12262").trigger("obj12262_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12262) {
				console.warn("de-queueing event obj12262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12262_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12268();
function switchText_12268() {
	window.obj12262_onTap_runningActionsCount = obj12262_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">1</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12262_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12262_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12262").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12262_content");
			setTimeout(function () {
				window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12262 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12262_onTap_runningActionsCount = window.obj12262_onTap_runningActionsCount - 1;

if (window.obj12262_onTap_runningActionsCount < 0) {
	window.obj12262_onTap_runningActionsCount = 0;
} else if (window.obj12262_onTap_runningActionsCount == 0) {
	obj12262_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12262_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12262_onTap_activeActionGroupIndex = -1;
		$("#obj12262").trigger("obj12262_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12262) {
				console.warn("de-queueing event obj12262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12262_onTap_activeActionGroupIndex = 4;
	











































};
obj12272_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12272_onTap_activeActionGroupIndex = -1;
		$("#obj12272").trigger("obj12272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12272) {
				console.warn("de-queueing event obj12272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12272_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12270
(function(){
	window.obj12272_onTap_runningActionsCount = obj12272_onTap_runningActionsCount + 1;


	var selector = "#obj12270";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12274();
function playAudioFile_12274() {
	window.obj12272_onTap_runningActionsCount = obj12272_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12274")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12274");
			$("#obj_audio_playSoundFile12274").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup1();
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
				window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12272_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12272_onTap_activeActionGroupIndex = -1;
		$("#obj12272").trigger("obj12272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12272) {
				console.warn("de-queueing event obj12272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12272_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12276();
function switchText_12276() {
	window.obj12272_onTap_runningActionsCount = obj12272_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>2</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12272_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12272_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12272").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12272_content");
			setTimeout(function () {
				window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12272 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12272_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12272_onTap_activeActionGroupIndex = -1;
		$("#obj12272").trigger("obj12272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12272) {
				console.warn("de-queueing event obj12272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12272_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12277();
function wait_12277() {
	window.obj12272_onTap_runningActionsCount = obj12272_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12272_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12272_onTap_activeActionGroupIndex = -1;
		$("#obj12272").trigger("obj12272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12272) {
				console.warn("de-queueing event obj12272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12272_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12278();
function switchText_12278() {
	window.obj12272_onTap_runningActionsCount = obj12272_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">2</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12272_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12272_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12272").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12272_content");
			setTimeout(function () {
				window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12272 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12272_onTap_runningActionsCount = window.obj12272_onTap_runningActionsCount - 1;

if (window.obj12272_onTap_runningActionsCount < 0) {
	window.obj12272_onTap_runningActionsCount = 0;
} else if (window.obj12272_onTap_runningActionsCount == 0) {
	obj12272_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12272_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12272_onTap_activeActionGroupIndex = -1;
		$("#obj12272").trigger("obj12272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12272) {
				console.warn("de-queueing event obj12272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12272_onTap_activeActionGroupIndex = 4;
	











































};
obj12282_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12282_onTap_activeActionGroupIndex = -1;
		$("#obj12282").trigger("obj12282_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12282) {
				console.warn("de-queueing event obj12282." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12282").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12282_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12280
(function(){
	window.obj12282_onTap_runningActionsCount = obj12282_onTap_runningActionsCount + 1;


	var selector = "#obj12280";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12284();
function playAudioFile_12284() {
	window.obj12282_onTap_runningActionsCount = obj12282_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12284")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12284");
			$("#obj_audio_playSoundFile12284").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup1();
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
				window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12282_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12282_onTap_activeActionGroupIndex = -1;
		$("#obj12282").trigger("obj12282_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12282) {
				console.warn("de-queueing event obj12282." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12282").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12282_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12286();
function switchText_12286() {
	window.obj12282_onTap_runningActionsCount = obj12282_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>3</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12282_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12282_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12282").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12282_content");
			setTimeout(function () {
				window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12282 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12282_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12282_onTap_activeActionGroupIndex = -1;
		$("#obj12282").trigger("obj12282_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12282) {
				console.warn("de-queueing event obj12282." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12282").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12282_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12287();
function wait_12287() {
	window.obj12282_onTap_runningActionsCount = obj12282_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12282_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12282_onTap_activeActionGroupIndex = -1;
		$("#obj12282").trigger("obj12282_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12282) {
				console.warn("de-queueing event obj12282." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12282").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12282_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12288();
function switchText_12288() {
	window.obj12282_onTap_runningActionsCount = obj12282_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">3</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12282_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12282_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12282").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12282_content");
			setTimeout(function () {
				window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12282 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12282_onTap_runningActionsCount = window.obj12282_onTap_runningActionsCount - 1;

if (window.obj12282_onTap_runningActionsCount < 0) {
	window.obj12282_onTap_runningActionsCount = 0;
} else if (window.obj12282_onTap_runningActionsCount == 0) {
	obj12282_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12282_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12282_onTap_activeActionGroupIndex = -1;
		$("#obj12282").trigger("obj12282_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12282) {
				console.warn("de-queueing event obj12282." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12282").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12282_onTap_activeActionGroupIndex = 4;
	











































};
obj12292_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12292_onTap_activeActionGroupIndex = -1;
		$("#obj12292").trigger("obj12292_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12292) {
				console.warn("de-queueing event obj12292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12292_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12290
(function(){
	window.obj12292_onTap_runningActionsCount = obj12292_onTap_runningActionsCount + 1;


	var selector = "#obj12290";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12294();
function playAudioFile_12294() {
	window.obj12292_onTap_runningActionsCount = obj12292_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12294")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12294");
			$("#obj_audio_playSoundFile12294").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup1();
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
				window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12292_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12292_onTap_activeActionGroupIndex = -1;
		$("#obj12292").trigger("obj12292_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12292) {
				console.warn("de-queueing event obj12292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12292_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12296();
function switchText_12296() {
	window.obj12292_onTap_runningActionsCount = obj12292_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>4</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12292_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12292_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12292").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12292_content");
			setTimeout(function () {
				window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12292 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12292_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12292_onTap_activeActionGroupIndex = -1;
		$("#obj12292").trigger("obj12292_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12292) {
				console.warn("de-queueing event obj12292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12292_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12297();
function wait_12297() {
	window.obj12292_onTap_runningActionsCount = obj12292_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12292_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12292_onTap_activeActionGroupIndex = -1;
		$("#obj12292").trigger("obj12292_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12292) {
				console.warn("de-queueing event obj12292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12292_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12298();
function switchText_12298() {
	window.obj12292_onTap_runningActionsCount = obj12292_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">4</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12292_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12292_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12292").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12292_content");
			setTimeout(function () {
				window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12292 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12292_onTap_runningActionsCount = window.obj12292_onTap_runningActionsCount - 1;

if (window.obj12292_onTap_runningActionsCount < 0) {
	window.obj12292_onTap_runningActionsCount = 0;
} else if (window.obj12292_onTap_runningActionsCount == 0) {
	obj12292_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12292_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12292_onTap_activeActionGroupIndex = -1;
		$("#obj12292").trigger("obj12292_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12292) {
				console.warn("de-queueing event obj12292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12292_onTap_activeActionGroupIndex = 4;
	











































};
obj12302_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12302_onTap_activeActionGroupIndex = -1;
		$("#obj12302").trigger("obj12302_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12302) {
				console.warn("de-queueing event obj12302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12302_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj12246 
hide_12316();
function hide_12316() {
	var selector = "#obj12246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12302_onTap_runningActionsCount = obj12302_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12316(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj12300
(function(){
	window.obj12302_onTap_runningActionsCount = obj12302_onTap_runningActionsCount + 1;


	var selector = "#obj12300";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12248
(function(){
	window.obj12302_onTap_runningActionsCount = obj12302_onTap_runningActionsCount + 1;


	var selector = "#obj12248";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12311
(function(){
	window.obj12302_onTap_runningActionsCount = obj12302_onTap_runningActionsCount + 1;


	var selector = "#obj12311";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12310();
function playAudioFile_12310() {
	window.obj12302_onTap_runningActionsCount = obj12302_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12310")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12310");
			$("#obj_audio_playSoundFile12310").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
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
				window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12302_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12302_onTap_activeActionGroupIndex = -1;
		$("#obj12302").trigger("obj12302_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12302) {
				console.warn("de-queueing event obj12302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12302_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj12107 
incrementCounter_12315();
function incrementCounter_12315() {
	window.obj12302_onTap_runningActionsCount = obj12302_onTap_runningActionsCount + 1;


	var oldValue = obj12107_counterValue;
	obj12107_counterValue = obj12107_counterValue + 1;
	if (! obj12107_counterCanExceedTargetValue && obj12107_counterValue > obj12107_counterTargetValue) {
		obj12107_counterValue = obj12107_counterTargetValue;
	}

	if (oldValue != obj12107_counterValue) {
		$("#obj12107").trigger('SCEventCounterValueChange');
		$("#obj12107").trigger('SCEventCounterIncrease');
		if (obj12107_counterValue == obj12107_counterTargetValue)
			$("#obj12107").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj12302_onTap_runningActionsCount = window.obj12302_onTap_runningActionsCount - 1;

if (window.obj12302_onTap_runningActionsCount < 0) {
	window.obj12302_onTap_runningActionsCount = 0;
} else if (window.obj12302_onTap_runningActionsCount == 0) {
	obj12302_onTap_actionGroup2();
} }, 1);
}











};
obj12302_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12302_onTap_activeActionGroupIndex = -1;
		$("#obj12302").trigger("obj12302_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12302) {
				console.warn("de-queueing event obj12302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12302_onTap_activeActionGroupIndex = 2;
	











































};
obj12350_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12350_onTap_activeActionGroupIndex = -1;
		$("#obj12350").trigger("obj12350_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12350) {
				console.warn("de-queueing event obj12350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12350_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12348
(function(){
	window.obj12350_onTap_runningActionsCount = obj12350_onTap_runningActionsCount + 1;


	var selector = "#obj12348";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12352();
function playAudioFile_12352() {
	window.obj12350_onTap_runningActionsCount = obj12350_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12352")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12352");
			$("#obj_audio_playSoundFile12352").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup1();
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
				window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12350_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12350_onTap_activeActionGroupIndex = -1;
		$("#obj12350").trigger("obj12350_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12350) {
				console.warn("de-queueing event obj12350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12350_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12354();
function switchText_12354() {
	window.obj12350_onTap_runningActionsCount = obj12350_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>6</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12350_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12350_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12350").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12350_content");
			setTimeout(function () {
				window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12350 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12350_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12350_onTap_activeActionGroupIndex = -1;
		$("#obj12350").trigger("obj12350_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12350) {
				console.warn("de-queueing event obj12350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12350_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12355();
function wait_12355() {
	window.obj12350_onTap_runningActionsCount = obj12350_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12350_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12350_onTap_activeActionGroupIndex = -1;
		$("#obj12350").trigger("obj12350_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12350) {
				console.warn("de-queueing event obj12350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12350_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12356();
function switchText_12356() {
	window.obj12350_onTap_runningActionsCount = obj12350_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">6</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12350_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12350_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12350").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12350_content");
			setTimeout(function () {
				window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12350 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12350_onTap_runningActionsCount = window.obj12350_onTap_runningActionsCount - 1;

if (window.obj12350_onTap_runningActionsCount < 0) {
	window.obj12350_onTap_runningActionsCount = 0;
} else if (window.obj12350_onTap_runningActionsCount == 0) {
	obj12350_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12350_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12350_onTap_activeActionGroupIndex = -1;
		$("#obj12350").trigger("obj12350_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12350) {
				console.warn("de-queueing event obj12350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12350_onTap_activeActionGroupIndex = 4;
	











































};
obj12340_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12340_onTap_activeActionGroupIndex = -1;
		$("#obj12340").trigger("obj12340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12340) {
				console.warn("de-queueing event obj12340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12340_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12338
(function(){
	window.obj12340_onTap_runningActionsCount = obj12340_onTap_runningActionsCount + 1;


	var selector = "#obj12338";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12342();
function playAudioFile_12342() {
	window.obj12340_onTap_runningActionsCount = obj12340_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12342")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12342");
			$("#obj_audio_playSoundFile12342").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup1();
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
				window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12340_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12340_onTap_activeActionGroupIndex = -1;
		$("#obj12340").trigger("obj12340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12340) {
				console.warn("de-queueing event obj12340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12340_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12344();
function switchText_12344() {
	window.obj12340_onTap_runningActionsCount = obj12340_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>7</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12340_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12340_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12340").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12340_content");
			setTimeout(function () {
				window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12340 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12340_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12340_onTap_activeActionGroupIndex = -1;
		$("#obj12340").trigger("obj12340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12340) {
				console.warn("de-queueing event obj12340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12340_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12345();
function wait_12345() {
	window.obj12340_onTap_runningActionsCount = obj12340_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12340_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12340_onTap_activeActionGroupIndex = -1;
		$("#obj12340").trigger("obj12340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12340) {
				console.warn("de-queueing event obj12340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12340_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12346();
function switchText_12346() {
	window.obj12340_onTap_runningActionsCount = obj12340_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">7</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12340_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12340_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12340").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12340_content");
			setTimeout(function () {
				window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12340 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12340_onTap_runningActionsCount = window.obj12340_onTap_runningActionsCount - 1;

if (window.obj12340_onTap_runningActionsCount < 0) {
	window.obj12340_onTap_runningActionsCount = 0;
} else if (window.obj12340_onTap_runningActionsCount == 0) {
	obj12340_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12340_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12340_onTap_activeActionGroupIndex = -1;
		$("#obj12340").trigger("obj12340_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12340) {
				console.warn("de-queueing event obj12340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12340_onTap_activeActionGroupIndex = 4;
	











































};
obj12330_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12330_onTap_activeActionGroupIndex = -1;
		$("#obj12330").trigger("obj12330_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12330) {
				console.warn("de-queueing event obj12330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12330_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12328
(function(){
	window.obj12330_onTap_runningActionsCount = obj12330_onTap_runningActionsCount + 1;


	var selector = "#obj12328";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12332();
function playAudioFile_12332() {
	window.obj12330_onTap_runningActionsCount = obj12330_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12332")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12332");
			$("#obj_audio_playSoundFile12332").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup1();
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
				window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12330_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12330_onTap_activeActionGroupIndex = -1;
		$("#obj12330").trigger("obj12330_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12330) {
				console.warn("de-queueing event obj12330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12330_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12334();
function switchText_12334() {
	window.obj12330_onTap_runningActionsCount = obj12330_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>8</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12330_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12330_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12330").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12330_content");
			setTimeout(function () {
				window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12330 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12330_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12330_onTap_activeActionGroupIndex = -1;
		$("#obj12330").trigger("obj12330_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12330) {
				console.warn("de-queueing event obj12330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12330_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12335();
function wait_12335() {
	window.obj12330_onTap_runningActionsCount = obj12330_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12330_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12330_onTap_activeActionGroupIndex = -1;
		$("#obj12330").trigger("obj12330_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12330) {
				console.warn("de-queueing event obj12330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12330_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12336();
function switchText_12336() {
	window.obj12330_onTap_runningActionsCount = obj12330_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">8</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12330_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12330_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12330").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12330_content");
			setTimeout(function () {
				window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12330 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12330_onTap_runningActionsCount = window.obj12330_onTap_runningActionsCount - 1;

if (window.obj12330_onTap_runningActionsCount < 0) {
	window.obj12330_onTap_runningActionsCount = 0;
} else if (window.obj12330_onTap_runningActionsCount == 0) {
	obj12330_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12330_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12330_onTap_activeActionGroupIndex = -1;
		$("#obj12330").trigger("obj12330_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12330) {
				console.warn("de-queueing event obj12330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12330_onTap_activeActionGroupIndex = 4;
	











































};
obj12320_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12320_onTap_activeActionGroupIndex = -1;
		$("#obj12320").trigger("obj12320_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12320) {
				console.warn("de-queueing event obj12320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12320_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12318
(function(){
	window.obj12320_onTap_runningActionsCount = obj12320_onTap_runningActionsCount + 1;


	var selector = "#obj12318";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_12322();
function playAudioFile_12322() {
	window.obj12320_onTap_runningActionsCount = obj12320_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12322")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12322");
			$("#obj_audio_playSoundFile12322").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup1();
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
				window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12320_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12320_onTap_activeActionGroupIndex = -1;
		$("#obj12320").trigger("obj12320_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12320) {
				console.warn("de-queueing event obj12320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12320_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_12324();
function switchText_12324() {
	window.obj12320_onTap_runningActionsCount = obj12320_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>9</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12320_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12320_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12320").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12320_content");
			setTimeout(function () {
				window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj12320 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj12320_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12320_onTap_activeActionGroupIndex = -1;
		$("#obj12320").trigger("obj12320_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12320) {
				console.warn("de-queueing event obj12320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12320_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_12325();
function wait_12325() {
	window.obj12320_onTap_runningActionsCount = obj12320_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup3();
}
	}, 500);
}


























};
obj12320_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12320_onTap_activeActionGroupIndex = -1;
		$("#obj12320").trigger("obj12320_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12320) {
				console.warn("de-queueing event obj12320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12320_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_12326();
function switchText_12326() {
	window.obj12320_onTap_runningActionsCount = obj12320_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px;\"><strong><span style=\"font-family: Roboto;\">9</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj12320_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj12320_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj12320").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj12320_content");
			setTimeout(function () {
				window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj12320 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj12320_onTap_runningActionsCount = window.obj12320_onTap_runningActionsCount - 1;

if (window.obj12320_onTap_runningActionsCount < 0) {
	window.obj12320_onTap_runningActionsCount = 0;
} else if (window.obj12320_onTap_runningActionsCount == 0) {
	obj12320_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj12320_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12320_onTap_activeActionGroupIndex = -1;
		$("#obj12320").trigger("obj12320_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12320) {
				console.warn("de-queueing event obj12320." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12320").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12320_onTap_activeActionGroupIndex = 4;
	











































};
obj12368_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12368_onTap_activeActionGroupIndex = -1;
		$("#obj12368").trigger("obj12368_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12368) {
				console.warn("de-queueing event obj12368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12368_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12362
(function(){
	window.obj12368_onTap_runningActionsCount = obj12368_onTap_runningActionsCount + 1;


	var selector = "#obj12362";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12368_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12368_onTap_activeActionGroupIndex = -1;
		$("#obj12368").trigger("obj12368_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12368) {
				console.warn("de-queueing event obj12368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12368_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12368 
hide_12371();
function hide_12371() {
	var selector = "#obj12368";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12368_onTap_runningActionsCount = obj12368_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12371(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12368_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12368_onTap_activeActionGroupIndex = -1;
		$("#obj12368").trigger("obj12368_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12368) {
				console.warn("de-queueing event obj12368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12368_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12358
(function(){
	window.obj12368_onTap_runningActionsCount = obj12368_onTap_runningActionsCount + 1;


	var selector = "#obj12358";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12360
(function(){
	window.obj12368_onTap_runningActionsCount = obj12368_onTap_runningActionsCount + 1;


	var selector = "#obj12360";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12368_onTap_runningActionsCount = window.obj12368_onTap_runningActionsCount - 1;

if (window.obj12368_onTap_runningActionsCount < 0) {
	window.obj12368_onTap_runningActionsCount = 0;
} else if (window.obj12368_onTap_runningActionsCount == 0) {
	obj12368_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12368_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12368_onTap_activeActionGroupIndex = -1;
		$("#obj12368").trigger("obj12368_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12368) {
				console.warn("de-queueing event obj12368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12368_onTap_activeActionGroupIndex = 3;
	











































};
obj12362_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12362_onTap_activeActionGroupIndex = -1;
		$("#obj12362").trigger("obj12362_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12362) {
				console.warn("de-queueing event obj12362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12362_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12368
(function(){
	window.obj12362_onTap_runningActionsCount = obj12362_onTap_runningActionsCount + 1;


	var selector = "#obj12368";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12362_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12362_onTap_activeActionGroupIndex = -1;
		$("#obj12362").trigger("obj12362_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12362) {
				console.warn("de-queueing event obj12362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12362_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12362 
hide_12365();
function hide_12365() {
	var selector = "#obj12362";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12362_onTap_runningActionsCount = obj12362_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12365(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12362_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12362_onTap_activeActionGroupIndex = -1;
		$("#obj12362").trigger("obj12362_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12362) {
				console.warn("de-queueing event obj12362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12362_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj12360 
hide_12366();
function hide_12366() {
	var selector = "#obj12360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12362_onTap_runningActionsCount = obj12362_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12366(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12358 
hide_12367();
function hide_12367() {
	var selector = "#obj12358";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12362_onTap_runningActionsCount = obj12362_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12367(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12362_onTap_runningActionsCount = window.obj12362_onTap_runningActionsCount - 1;

if (window.obj12362_onTap_runningActionsCount < 0) {
	window.obj12362_onTap_runningActionsCount = 0;
} else if (window.obj12362_onTap_runningActionsCount == 0) {
	obj12362_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12362_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12362_onTap_activeActionGroupIndex = -1;
		$("#obj12362").trigger("obj12362_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12362) {
				console.warn("de-queueing event obj12362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12362_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj12076: Event Touch Down
 *
 */

$("#obj12076").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12076_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12076_onTap is still running");
	return;
}
var obj12076_onTap_runningActionsCount = 0;
var obj12076_onTap_loopCount = 0;
obj12076_onTap_actionGroup0();
});


















/*
 *
 *   obj12079: Event Touch Down
 *
 */

$("#obj12079").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12079_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12079_onTap is still running");
	return;
}
var obj12079_onTap_runningActionsCount = 0;
var obj12079_onTap_loopCount = 0;
obj12079_onTap_actionGroup0();
});
























































/*
 *
 *   obj12086: Event Touch Down
 *
 */

$("#obj12086").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12086_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12086_onTap is still running");
	return;
}
var obj12086_onTap_runningActionsCount = 0;
var obj12086_onTap_loopCount = 0;
obj12086_onTap_actionGroup0();
});














































/*
 *
 *   obj12107: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12107").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12107_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12107_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12107_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12107_SCEventCounterReachedTargetValue_loopCount = 0;
obj12107_SCEventCounterReachedTargetValue_actionGroup0();
});


















































































































































































































































































































































































/*
 *
 *   obj12230: Event Touch Down
 *
 */

$("#obj12230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12230_onTap is still running");
	return;
}
var obj12230_onTap_runningActionsCount = 0;
var obj12230_onTap_loopCount = 0;
obj12230_onTap_actionGroup0();
});





































/*
 *
 *   obj12262: Event Touch Down
 *
 */

$("#obj12262").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12262_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12262_onTap is still running");
	return;
}
var obj12262_onTap_runningActionsCount = 0;
var obj12262_onTap_loopCount = 0;
obj12262_onTap_actionGroup0();
});





































/*
 *
 *   obj12272: Event Touch Down
 *
 */

$("#obj12272").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12272_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12272_onTap is still running");
	return;
}
var obj12272_onTap_runningActionsCount = 0;
var obj12272_onTap_loopCount = 0;
obj12272_onTap_actionGroup0();
});





































/*
 *
 *   obj12282: Event Touch Down
 *
 */

$("#obj12282").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12282_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12282_onTap is still running");
	return;
}
var obj12282_onTap_runningActionsCount = 0;
var obj12282_onTap_loopCount = 0;
obj12282_onTap_actionGroup0();
});





































/*
 *
 *   obj12292: Event Touch Down
 *
 */

$("#obj12292").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12292_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12292_onTap is still running");
	return;
}
var obj12292_onTap_runningActionsCount = 0;
var obj12292_onTap_loopCount = 0;
obj12292_onTap_actionGroup0();
});





































/*
 *
 *   obj12302: Event Touch Down
 *
 */

$("#obj12302").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12302_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12302_onTap is still running");
	return;
}
var obj12302_onTap_runningActionsCount = 0;
var obj12302_onTap_loopCount = 0;
obj12302_onTap_actionGroup0();
});











































































/*
 *
 *   obj12350: Event Touch Down
 *
 */

$("#obj12350").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12350_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12350_onTap is still running");
	return;
}
var obj12350_onTap_runningActionsCount = 0;
var obj12350_onTap_loopCount = 0;
obj12350_onTap_actionGroup0();
});





































/*
 *
 *   obj12340: Event Touch Down
 *
 */

$("#obj12340").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12340_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12340_onTap is still running");
	return;
}
var obj12340_onTap_runningActionsCount = 0;
var obj12340_onTap_loopCount = 0;
obj12340_onTap_actionGroup0();
});





































/*
 *
 *   obj12330: Event Touch Down
 *
 */

$("#obj12330").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12330_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12330_onTap is still running");
	return;
}
var obj12330_onTap_runningActionsCount = 0;
var obj12330_onTap_loopCount = 0;
obj12330_onTap_actionGroup0();
});





































/*
 *
 *   obj12320: Event Touch Down
 *
 */

$("#obj12320").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12320_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12320_onTap is still running");
	return;
}
var obj12320_onTap_runningActionsCount = 0;
var obj12320_onTap_loopCount = 0;
obj12320_onTap_actionGroup0();
});





































/*
 *
 *   obj12368: Event Touch Down
 *
 */

$("#obj12368").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12368_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12368_onTap is still running");
	return;
}
var obj12368_onTap_runningActionsCount = 0;
var obj12368_onTap_loopCount = 0;
obj12368_onTap_actionGroup0();
});


















/*
 *
 *   obj12362: Event Touch Down
 *
 */

$("#obj12362").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12362_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12362_onTap is still running");
	return;
}
var obj12362_onTap_runningActionsCount = 0;
var obj12362_onTap_loopCount = 0;
obj12362_onTap_actionGroup0();
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
	
$("#obj12070").trigger('SCEventShow');
$("#obj12074").trigger('SCEventShow');
$("#obj12076").trigger('SCEventShow');
$("#obj12079").trigger('SCEventShow');
$("#obj12082").trigger('SCEventShow');
$("#obj12084").trigger('SCEventShow');
$("#obj12086").trigger('SCEventShow');
$("#obj12105").trigger('SCEventShow');
$("#obj12189").trigger('SCEventShow');
$("#obj12191").trigger('SCEventShow');
$("#obj12193").trigger('SCEventShow');
$("#obj12195").trigger('SCEventShow');
$("#obj12197").trigger('SCEventShow');
$("#obj12199").trigger('SCEventShow');
$("#obj12201").trigger('SCEventShow');
$("#obj12215").trigger('SCEventShow');
$("#obj12213").trigger('SCEventShow');
$("#obj12211").trigger('SCEventShow');
$("#obj12209").trigger('SCEventShow');
$("#obj12207").trigger('SCEventShow');
$("#obj12205").trigger('SCEventShow');
$("#obj12203").trigger('SCEventShow');
$("#obj12218").trigger('SCEventShow');
$("#obj12222").trigger('SCEventShow');
$("#obj12220").trigger('SCEventShow');
$("#obj12226").trigger('SCEventShow');
$("#obj12228").trigger('SCEventShow');
$("#obj12230").trigger('SCEventShow');
$("#obj12262").trigger('SCEventShow');
$("#obj12272").trigger('SCEventShow');
$("#obj12282").trigger('SCEventShow');
$("#obj12292").trigger('SCEventShow');
$("#obj12302").trigger('SCEventShow');
$("#obj12246").trigger('SCEventShow');
$("#obj12350").trigger('SCEventShow');
$("#obj12340").trigger('SCEventShow');
$("#obj12330").trigger('SCEventShow');
$("#obj12320").trigger('SCEventShow');
$("#obj12368").trigger('SCEventShow');
	

});