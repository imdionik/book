pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 12374;
pubcoder.page.title = pubcoder.page.title || "36";
pubcoder.page.number = pubcoder.page.number || 36;
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
var obj12379_onTap_activeActionGroupIndex = -1;
var obj12379_onTap_runningActionsCount = 0;
var obj12379_onTap_loopCount = 0;
var obj12389_onTap_activeActionGroupIndex = -1;
var obj12389_onTap_runningActionsCount = 0;
var obj12389_onTap_loopCount = 0;
var obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12394_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12394_SCEventCounterReachedTargetValue_loopCount = 0;
var obj12571_onDrag_activeActionGroupIndex = -1;
var obj12571_onDrag_runningActionsCount = 0;
var obj12571_onDrag_loopCount = 0;
var obj12571_onTouchDown_activeActionGroupIndex = -1;
var obj12571_onTouchDown_runningActionsCount = 0;
var obj12571_onTouchDown_loopCount = 0;
var obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
var obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_loopCount = 0;
var obj12571_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_4_loopCount = 0;
var obj12571_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_3_loopCount = 0;
var obj12571_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_2_loopCount = 0;
var obj12571_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj12571_droppedInsideTargetActions_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj12394_counterValue = 0;
var obj12394_counterTargetValue = 1;
var obj12394_counterCanExceedTargetValue = false;

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
		
obj12379_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12379_onTap_activeActionGroupIndex = -1;
		$("#obj12379").trigger("obj12379_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12379) {
				console.warn("de-queueing event obj12379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12379_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12381();
function goToPage_12381() {
	window.obj12379_onTap_runningActionsCount = obj12379_onTap_runningActionsCount + 1;

	$("#anchor548")[0].click();
	window.obj12379_onTap_runningActionsCount = window.obj12379_onTap_runningActionsCount - 1;

if (window.obj12379_onTap_runningActionsCount < 0) {
	window.obj12379_onTap_runningActionsCount = 0;
} else if (window.obj12379_onTap_runningActionsCount == 0) {
	obj12379_onTap_actionGroup1();
}
}










































};
obj12379_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12379_onTap_activeActionGroupIndex = -1;
		$("#obj12379").trigger("obj12379_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12379) {
				console.warn("de-queueing event obj12379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12379_onTap_activeActionGroupIndex = 1;
	











































};
obj12389_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12389_onTap_activeActionGroupIndex = -1;
		$("#obj12389").trigger("obj12389_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12389) {
				console.warn("de-queueing event obj12389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12389_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12391();
function goToPage_12391() {
	window.obj12389_onTap_runningActionsCount = obj12389_onTap_runningActionsCount + 1;

	$("#anchor549")[0].click();
	window.obj12389_onTap_runningActionsCount = window.obj12389_onTap_runningActionsCount - 1;

if (window.obj12389_onTap_runningActionsCount < 0) {
	window.obj12389_onTap_runningActionsCount = 0;
} else if (window.obj12389_onTap_runningActionsCount == 0) {
	obj12389_onTap_actionGroup1();
}
}










































};
obj12389_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12389_onTap_activeActionGroupIndex = -1;
		$("#obj12389").trigger("obj12389_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12389) {
				console.warn("de-queueing event obj12389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12389_onTap_activeActionGroupIndex = 1;
	











































};
obj12394_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12394").trigger("obj12394_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12394) {
				console.warn("de-queueing event obj12394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_12396();
function wait_12396() {
	window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount = obj12394_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12394_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj12394_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12394").trigger("obj12394_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12394) {
				console.warn("de-queueing event obj12394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_12397();
function goToPage_12397() {
	window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount = obj12394_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor550")[0].click();
	window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12394_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12394_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj12394_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12394").trigger("obj12394_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12394) {
				console.warn("de-queueing event obj12394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj12571_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12571_onTouchDown_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj12571");

//	action: dragDrop
//	target: obj12571 
dragDrop_12582();
function dragDrop_12582() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj12571_onTouchDown_runningActionsCount = obj12571_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj12571');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj12571_onTouchDown_runningActionsCount = window.obj12571_onTouchDown_runningActionsCount - 1;

if (window.obj12571_onTouchDown_runningActionsCount < 0) {
	window.obj12571_onTouchDown_runningActionsCount = 0;
} else if (window.obj12571_onTouchDown_runningActionsCount == 0) {
	obj12571_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj12573","#obj12575","#obj12577","#obj12579");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_12582 = false;
    	var dropped_id_12582;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_12582 = true;
					dropped_id_12582 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_12582) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj12571").trigger('SCActionDragDrop12582_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj12571_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12571_onTouchDown_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj12571 
move_12600();
function move_12600() {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj12571");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 723;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_12599();
function playAudioFile_12599() {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12599")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12599");
			$("#obj_audio_playSoundFile12599").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup1();
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
				window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj12571_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj12571 
move_12597();
function move_12597() {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = obj12571_droppedInsideTargetActions_4_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj12571");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 614;
	var moveY = 247;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12571_droppedInsideTargetActions_4_runningActionsCount = window.obj12571_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_12596();
function playAudioFile_12596() {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = obj12571_droppedInsideTargetActions_4_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12596")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12596");
			$("#obj_audio_playSoundFile12596").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12571_droppedInsideTargetActions_4_runningActionsCount = window.obj12571_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_4_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12571_droppedInsideTargetActions_4_runningActionsCount = window.obj12571_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_4_actionGroup1();
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
				window.obj12571_droppedInsideTargetActions_4_runningActionsCount = window.obj12571_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_4_actionGroup1();
}
			}, false);
		} else {
			window.obj12571_droppedInsideTargetActions_4_runningActionsCount = window.obj12571_droppedInsideTargetActions_4_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_4_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12571_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_4_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	











































};
obj12571_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj12571 
move_12594();
function move_12594() {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = obj12571_droppedInsideTargetActions_3_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj12571");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 491;
	var moveY = 367;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12571_droppedInsideTargetActions_3_runningActionsCount = window.obj12571_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_12593();
function playAudioFile_12593() {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = obj12571_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12593")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12593");
			$("#obj_audio_playSoundFile12593").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12571_droppedInsideTargetActions_3_runningActionsCount = window.obj12571_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12571_droppedInsideTargetActions_3_runningActionsCount = window.obj12571_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj12571_droppedInsideTargetActions_3_runningActionsCount = window.obj12571_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj12571_droppedInsideTargetActions_3_runningActionsCount = window.obj12571_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12571_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	











































};
obj12571_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj12571 
move_12590();
function move_12590() {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = obj12571_droppedInsideTargetActions_2_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj12571");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 367;
	var moveY = 490;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12571_droppedInsideTargetActions_2_runningActionsCount = window.obj12571_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_12589();
function playAudioFile_12589() {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = obj12571_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12589")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12589");
			$("#obj_audio_playSoundFile12589").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12571_droppedInsideTargetActions_2_runningActionsCount = window.obj12571_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12571_droppedInsideTargetActions_2_runningActionsCount = window.obj12571_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj12571_droppedInsideTargetActions_2_runningActionsCount = window.obj12571_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj12571_droppedInsideTargetActions_2_runningActionsCount = window.obj12571_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12571_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj12571_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj12571 
move_12584();
function move_12584() {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = obj12571_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj12571");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 613;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj12571_droppedInsideTargetActions_runningActionsCount = window.obj12571_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_12585();
function playAudioFile_12585() {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = obj12571_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile12585")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile12585");
			$("#obj_audio_playSoundFile12585").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj12571_droppedInsideTargetActions_runningActionsCount = window.obj12571_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj12571_droppedInsideTargetActions_runningActionsCount = window.obj12571_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_actionGroup1();
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
				window.obj12571_droppedInsideTargetActions_runningActionsCount = window.obj12571_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj12571_droppedInsideTargetActions_runningActionsCount = window.obj12571_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj12571_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj12571_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj12571_droppedInsideTargetActions_runningActionsCount == 0) {
	obj12571_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj12571_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12571_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj12571").trigger("obj12571_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12571) {
				console.warn("de-queueing event obj12571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12571_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj12379: Event Touch Down
 *
 */

$("#obj12379").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12379_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12379_onTap is still running");
	return;
}
var obj12379_onTap_runningActionsCount = 0;
var obj12379_onTap_loopCount = 0;
obj12379_onTap_actionGroup0();
});
























































/*
 *
 *   obj12389: Event Touch Down
 *
 */

$("#obj12389").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12389_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12389_onTap is still running");
	return;
}
var obj12389_onTap_runningActionsCount = 0;
var obj12389_onTap_loopCount = 0;
obj12389_onTap_actionGroup0();
});



























/*
 *
 *   obj12394: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12394").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12394_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12394_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12394_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12394_SCEventCounterReachedTargetValue_loopCount = 0;
obj12394_SCEventCounterReachedTargetValue_actionGroup0();
});






























/*
 *
 *   obj12571: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj12571");
	var winTarget = document.getElementById("obj12571");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj12571").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj12571_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj12571_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj12571_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12571_onTouchDown is still running");
	return;
}
var obj12571_onTouchDown_runningActionsCount = 0;
var obj12571_onTouchDown_loopCount = 0;
obj12571_onTouchDown_actionGroup0();
});






/*
 *
 *   obj12571: Event SCActionDragDrop12582_droppedOutsideTargetActions
 *
 */

$("#obj12571").bind("SCActionDragDrop12582_droppedOutsideTargetActions", function(event) {
	if (window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12571_SCActionDragDrop12582_droppedOutsideTargetActions is still running");
	return;
}
var obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_runningActionsCount = 0;
var obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_loopCount = 0;
obj12571_SCActionDragDrop12582_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj12571: Event droppedInsideTargetActions_4
 *
 */

$("#obj12571").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj12571_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12571_droppedInsideTargetActions_4 is still running");
	return;
}
var obj12571_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_4_loopCount = 0;
obj12571_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj12571: Event droppedInsideTargetActions_3
 *
 */

$("#obj12571").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj12571_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12571_droppedInsideTargetActions_3 is still running");
	return;
}
var obj12571_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_3_loopCount = 0;
obj12571_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj12571: Event droppedInsideTargetActions_2
 *
 */

$("#obj12571").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj12571_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12571_droppedInsideTargetActions_2 is still running");
	return;
}
var obj12571_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_2_loopCount = 0;
obj12571_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj12571: Event droppedInsideTargetActions
 *
 */

$("#obj12571").bind("droppedInsideTargetActions", function(event) {
	if (window.obj12571_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12571_droppedInsideTargetActions is still running");
	return;
}
var obj12571_droppedInsideTargetActions_runningActionsCount = 0;
var obj12571_droppedInsideTargetActions_loopCount = 0;
obj12571_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj19959").trigger('SCEventShow');
$("#obj12377").trigger('SCEventShow');
$("#obj12379").trigger('SCEventShow');
$("#obj12385").trigger('SCEventShow');
$("#obj12387").trigger('SCEventShow');
$("#obj12389").trigger('SCEventShow');
$("#obj12568").trigger('SCEventShow');
$("#obj12571").trigger('SCEventShow');
$("#obj12573").trigger('SCEventShow');
$("#obj12575").trigger('SCEventShow');
$("#obj12577").trigger('SCEventShow');
$("#obj12579").trigger('SCEventShow');
	

});