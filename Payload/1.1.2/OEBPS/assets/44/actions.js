pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 16298;
pubcoder.page.title = pubcoder.page.title || "44";
pubcoder.page.number = pubcoder.page.number || 44;
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
var obj16303_onTap_activeActionGroupIndex = -1;
var obj16303_onTap_runningActionsCount = 0;
var obj16303_onTap_loopCount = 0;
var obj16306_onTap_activeActionGroupIndex = -1;
var obj16306_onTap_runningActionsCount = 0;
var obj16306_onTap_loopCount = 0;
var obj16313_onTap_activeActionGroupIndex = -1;
var obj16313_onTap_runningActionsCount = 0;
var obj16313_onTap_loopCount = 0;
var obj16316_onTap_activeActionGroupIndex = -1;
var obj16316_onTap_runningActionsCount = 0;
var obj16316_onTap_loopCount = 0;
var obj16322_onTap_activeActionGroupIndex = -1;
var obj16322_onTap_runningActionsCount = 0;
var obj16322_onTap_loopCount = 0;
var obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj16334_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16334_SCEventCounterReachedTargetValue_loopCount = 0;
var obj16378_onDrag_activeActionGroupIndex = -1;
var obj16378_onDrag_runningActionsCount = 0;
var obj16378_onDrag_loopCount = 0;
var obj16378_onTouchDown_activeActionGroupIndex = -1;
var obj16378_onTouchDown_runningActionsCount = 0;
var obj16378_onTouchDown_loopCount = 0;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_2_loopCount = 0;
var obj16378_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16378_droppedInsideTargetActions_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_loopCount = 0;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_2_loopCount = 0;
var obj16378_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16378_droppedInsideTargetActions_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_loopCount = 0;
var obj16697_onDrag_activeActionGroupIndex = -1;
var obj16697_onDrag_runningActionsCount = 0;
var obj16697_onDrag_loopCount = 0;
var obj16697_onTouchDown_activeActionGroupIndex = -1;
var obj16697_onTouchDown_runningActionsCount = 0;
var obj16697_onTouchDown_loopCount = 0;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16697_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16697_droppedInsideTargetActions_runningActionsCount = 0;
var obj16697_droppedInsideTargetActions_loopCount = 0;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16697_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16697_droppedInsideTargetActions_runningActionsCount = 0;
var obj16697_droppedInsideTargetActions_loopCount = 0;
var obj16744_onDrag_activeActionGroupIndex = -1;
var obj16744_onDrag_runningActionsCount = 0;
var obj16744_onDrag_loopCount = 0;
var obj16744_onTouchDown_activeActionGroupIndex = -1;
var obj16744_onTouchDown_runningActionsCount = 0;
var obj16744_onTouchDown_loopCount = 0;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_2_loopCount = 0;
var obj16744_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16744_droppedInsideTargetActions_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_loopCount = 0;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_2_loopCount = 0;
var obj16744_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16744_droppedInsideTargetActions_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_loopCount = 0;
var obj16784_onDrag_activeActionGroupIndex = -1;
var obj16784_onDrag_runningActionsCount = 0;
var obj16784_onDrag_loopCount = 0;
var obj16784_onTouchDown_activeActionGroupIndex = -1;
var obj16784_onTouchDown_runningActionsCount = 0;
var obj16784_onTouchDown_loopCount = 0;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_2_loopCount = 0;
var obj16784_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16784_droppedInsideTargetActions_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_loopCount = 0;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_2_loopCount = 0;
var obj16784_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16784_droppedInsideTargetActions_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_loopCount = 0;
var obj16825_onDrag_activeActionGroupIndex = -1;
var obj16825_onDrag_runningActionsCount = 0;
var obj16825_onDrag_loopCount = 0;
var obj16825_onTouchDown_activeActionGroupIndex = -1;
var obj16825_onTouchDown_runningActionsCount = 0;
var obj16825_onTouchDown_loopCount = 0;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16825_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16825_droppedInsideTargetActions_runningActionsCount = 0;
var obj16825_droppedInsideTargetActions_loopCount = 0;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj16825_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj16825_droppedInsideTargetActions_runningActionsCount = 0;
var obj16825_droppedInsideTargetActions_loopCount = 0;
var obj20091_onDrag_activeActionGroupIndex = -1;
var obj20091_onDrag_runningActionsCount = 0;
var obj20091_onDrag_loopCount = 0;
var obj20091_onTouchDown_activeActionGroupIndex = -1;
var obj20091_onTouchDown_runningActionsCount = 0;
var obj20091_onTouchDown_loopCount = 0;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17028_onDrag_activeActionGroupIndex = -1;
var obj17028_onDrag_runningActionsCount = 0;
var obj17028_onDrag_loopCount = 0;
var obj17028_onTouchDown_activeActionGroupIndex = -1;
var obj17028_onTouchDown_runningActionsCount = 0;
var obj17028_onTouchDown_loopCount = 0;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_2_loopCount = 0;
var obj17028_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj17028_droppedInsideTargetActions_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_loopCount = 0;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_2_loopCount = 0;
var obj17028_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj17028_droppedInsideTargetActions_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_loopCount = 0;
var obj17191_onDrag_activeActionGroupIndex = -1;
var obj17191_onDrag_runningActionsCount = 0;
var obj17191_onDrag_loopCount = 0;
var obj17191_onTouchDown_activeActionGroupIndex = -1;
var obj17191_onTouchDown_runningActionsCount = 0;
var obj17191_onTouchDown_loopCount = 0;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_2_loopCount = 0;
var obj17191_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj17191_droppedInsideTargetActions_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_loopCount = 0;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_2_loopCount = 0;
var obj17191_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj17191_droppedInsideTargetActions_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_loopCount = 0;
var obj17299_onDrag_activeActionGroupIndex = -1;
var obj17299_onDrag_runningActionsCount = 0;
var obj17299_onDrag_loopCount = 0;
var obj17299_onTouchDown_activeActionGroupIndex = -1;
var obj17299_onTouchDown_runningActionsCount = 0;
var obj17299_onTouchDown_loopCount = 0;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_2_loopCount = 0;
var obj17299_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj17299_droppedInsideTargetActions_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_loopCount = 0;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_2_loopCount = 0;
var obj17299_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj17299_droppedInsideTargetActions_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_loopCount = 0;
var obj17363_onDrag_activeActionGroupIndex = -1;
var obj17363_onDrag_runningActionsCount = 0;
var obj17363_onDrag_loopCount = 0;
var obj17363_onTouchDown_activeActionGroupIndex = -1;
var obj17363_onTouchDown_runningActionsCount = 0;
var obj17363_onTouchDown_loopCount = 0;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj16334_counterValue = 0;
var obj16334_counterTargetValue = 8;
var obj16334_counterCanExceedTargetValue = false;

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
		
obj16303_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16303_onTap_activeActionGroupIndex = -1;
		$("#obj16303").trigger("obj16303_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16303) {
				console.warn("de-queueing event obj16303." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16303").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16303_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_16305();
function goToPage_16305() {
	window.obj16303_onTap_runningActionsCount = obj16303_onTap_runningActionsCount + 1;

	$("#anchor649")[0].click();
	window.obj16303_onTap_runningActionsCount = window.obj16303_onTap_runningActionsCount - 1;

if (window.obj16303_onTap_runningActionsCount < 0) {
	window.obj16303_onTap_runningActionsCount = 0;
} else if (window.obj16303_onTap_runningActionsCount == 0) {
	obj16303_onTap_actionGroup1();
}
}










































};
obj16303_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16303_onTap_activeActionGroupIndex = -1;
		$("#obj16303").trigger("obj16303_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16303) {
				console.warn("de-queueing event obj16303." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16303").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16303_onTap_activeActionGroupIndex = 1;
	











































};
obj16306_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16306_onTap_activeActionGroupIndex = -1;
		$("#obj16306").trigger("obj16306_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16306) {
				console.warn("de-queueing event obj16306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16306_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_16308();
function goToPage_16308() {
	window.obj16306_onTap_runningActionsCount = obj16306_onTap_runningActionsCount + 1;

	$("#anchor650")[0].click();
	window.obj16306_onTap_runningActionsCount = window.obj16306_onTap_runningActionsCount - 1;

if (window.obj16306_onTap_runningActionsCount < 0) {
	window.obj16306_onTap_runningActionsCount = 0;
} else if (window.obj16306_onTap_runningActionsCount == 0) {
	obj16306_onTap_actionGroup1();
}
}










































};
obj16306_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16306_onTap_activeActionGroupIndex = -1;
		$("#obj16306").trigger("obj16306_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16306) {
				console.warn("de-queueing event obj16306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16306_onTap_activeActionGroupIndex = 1;
	











































};
obj16313_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16313_onTap_activeActionGroupIndex = -1;
		$("#obj16313").trigger("obj16313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16313) {
				console.warn("de-queueing event obj16313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16313_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_16315();
function goToPage_16315() {
	window.obj16313_onTap_runningActionsCount = obj16313_onTap_runningActionsCount + 1;

	$("#anchor651")[0].click();
	window.obj16313_onTap_runningActionsCount = window.obj16313_onTap_runningActionsCount - 1;

if (window.obj16313_onTap_runningActionsCount < 0) {
	window.obj16313_onTap_runningActionsCount = 0;
} else if (window.obj16313_onTap_runningActionsCount == 0) {
	obj16313_onTap_actionGroup1();
}
}










































};
obj16313_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16313_onTap_activeActionGroupIndex = -1;
		$("#obj16313").trigger("obj16313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16313) {
				console.warn("de-queueing event obj16313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16313_onTap_activeActionGroupIndex = 1;
	











































};
obj16316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16316_onTap_activeActionGroupIndex = -1;
		$("#obj16316").trigger("obj16316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16316) {
				console.warn("de-queueing event obj16316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16316_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16322
(function(){
	window.obj16316_onTap_runningActionsCount = obj16316_onTap_runningActionsCount + 1;


	var selector = "#obj16322";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16316_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16316_onTap_activeActionGroupIndex = -1;
		$("#obj16316").trigger("obj16316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16316) {
				console.warn("de-queueing event obj16316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16316_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj16316 
hide_16319();
function hide_16319() {
	var selector = "#obj16316";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16316_onTap_runningActionsCount = obj16316_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16319(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj16316_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16316_onTap_activeActionGroupIndex = -1;
		$("#obj16316").trigger("obj16316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16316) {
				console.warn("de-queueing event obj16316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16316_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj16330
(function(){
	window.obj16316_onTap_runningActionsCount = obj16316_onTap_runningActionsCount + 1;


	var selector = "#obj16330";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16328
(function(){
	window.obj16316_onTap_runningActionsCount = obj16316_onTap_runningActionsCount + 1;


	var selector = "#obj16328";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16316_onTap_runningActionsCount = window.obj16316_onTap_runningActionsCount - 1;

if (window.obj16316_onTap_runningActionsCount < 0) {
	window.obj16316_onTap_runningActionsCount = 0;
} else if (window.obj16316_onTap_runningActionsCount == 0) {
	obj16316_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16316_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16316_onTap_activeActionGroupIndex = -1;
		$("#obj16316").trigger("obj16316_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16316) {
				console.warn("de-queueing event obj16316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16316_onTap_activeActionGroupIndex = 3;
	











































};
obj16322_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16322_onTap_activeActionGroupIndex = -1;
		$("#obj16322").trigger("obj16322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16322) {
				console.warn("de-queueing event obj16322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16322_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj16316
(function(){
	window.obj16322_onTap_runningActionsCount = obj16322_onTap_runningActionsCount + 1;


	var selector = "#obj16316";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj16322_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16322_onTap_activeActionGroupIndex = -1;
		$("#obj16322").trigger("obj16322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16322) {
				console.warn("de-queueing event obj16322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16322_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj16322 
hide_16325();
function hide_16325() {
	var selector = "#obj16322";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16322_onTap_runningActionsCount = obj16322_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16325(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj16322_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16322_onTap_activeActionGroupIndex = -1;
		$("#obj16322").trigger("obj16322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16322) {
				console.warn("de-queueing event obj16322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16322_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj16328 
hide_16326();
function hide_16326() {
	var selector = "#obj16328";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16322_onTap_runningActionsCount = obj16322_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16326(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16330 
hide_16327();
function hide_16327() {
	var selector = "#obj16330";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16322_onTap_runningActionsCount = obj16322_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16327(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16322_onTap_runningActionsCount = window.obj16322_onTap_runningActionsCount - 1;

if (window.obj16322_onTap_runningActionsCount < 0) {
	window.obj16322_onTap_runningActionsCount = 0;
} else if (window.obj16322_onTap_runningActionsCount == 0) {
	obj16322_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj16322_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16322_onTap_activeActionGroupIndex = -1;
		$("#obj16322").trigger("obj16322_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16322) {
				console.warn("de-queueing event obj16322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16322_onTap_activeActionGroupIndex = 3;
	











































};
obj16334_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16334").trigger("obj16334_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16334) {
				console.warn("de-queueing event obj16334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_16336();
function wait_16336() {
	window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount = obj16334_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16334_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj16334_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16334").trigger("obj16334_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16334) {
				console.warn("de-queueing event obj16334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_16337();
function goToPage_16337() {
	window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount = obj16334_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor652")[0].click();
	window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount = window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj16334_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj16334_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj16334_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj16334").trigger("obj16334_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16334) {
				console.warn("de-queueing event obj16334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj16378_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16378_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16466");

//	action: dragDrop
//	target: obj16466 
dragDrop_16540();
function dragDrop_16540() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16378_onTouchDown_runningActionsCount = obj16378_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16466');
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
    	window.obj16378_onTouchDown_runningActionsCount = window.obj16378_onTouchDown_runningActionsCount - 1;

if (window.obj16378_onTouchDown_runningActionsCount < 0) {
	window.obj16378_onTouchDown_runningActionsCount = 0;
} else if (window.obj16378_onTouchDown_runningActionsCount == 0) {
	obj16378_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16490","#obj16954");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16540 = false;
    	var dropped_id_16540;
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
					dropped_16540 = true;
					dropped_id_16540 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16540) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16378").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16378");

//	action: dragDrop
//	target: obj16378 
dragDrop_16381();
function dragDrop_16381() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16378_onTouchDown_runningActionsCount = obj16378_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16378');
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
    	window.obj16378_onTouchDown_runningActionsCount = window.obj16378_onTouchDown_runningActionsCount - 1;

if (window.obj16378_onTouchDown_runningActionsCount < 0) {
	window.obj16378_onTouchDown_runningActionsCount = 0;
} else if (window.obj16378_onTouchDown_runningActionsCount == 0) {
	obj16378_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16490","#obj16954");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16381 = false;
    	var dropped_id_16381;
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
					dropped_16381 = true;
					dropped_id_16381 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16381) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16378").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj16378_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16378 
move_16391();
function move_16391() {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16378");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16466 
move_16560();
function move_16560() {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16466");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16390();
function playAudioFile_16390() {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16390")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16390");
			$("#obj_audio_playSoundFile16390").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16378_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16466 
hide_17005();
function hide_17005() {
	var selector = "#obj16466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17005(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16724
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16952
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj16952";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17072
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17072";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17028
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17028";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16378 
move_17007();
function move_17007() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj16378");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 811;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17004();
function playAudioFile_17004() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17004")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17004");
			$("#obj_audio_playSoundFile17004").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17008();
function runjs_17008() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16378").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17010();
function runjs_17010() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16378").css("border-color", "rgba(0,0,0,0)"); $("#obj16378").css("border-width", "0px"); $("#obj16378").css("border-style", "solid"); $("#obj16378").css("border-radius", "0px"); $("#obj16378").css("-webkit-border-radius", "0px"); $("#obj16378").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17011();
function switchText_17011() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">67</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16378").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16378_content");
			setTimeout(function () {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17012();
function incrementCounter_17012() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj16378_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj16378_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16466 
move_16733();
function move_16733() {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16466");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16378 
move_16734();
function move_16734() {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16378");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16732();
function playAudioFile_16732() {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16732")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16732");
			$("#obj_audio_playSoundFile16732").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16378_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16466 
hide_16990();
function hide_16990() {
	var selector = "#obj16466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16990(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17072
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17072";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17028
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17028";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16724
(function(){
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16378 
move_16992();
function move_16992() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj16378");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 811;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16989();
function playAudioFile_16989() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16989")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16989");
			$("#obj_audio_playSoundFile16989").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_16993();
function runjs_16993() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16378").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_16995();
function runjs_16995() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16378").css("border-color", "rgba(0,0,0,0)"); $("#obj16378").css("border-width", "0px"); $("#obj16378").css("border-style", "solid"); $("#obj16378").css("border-radius", "0px"); $("#obj16378").css("-webkit-border-radius", "0px"); $("#obj16378").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_16996();
function switchText_16996() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">67</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16378").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16378_content");
			setTimeout(function () {
				window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_16997();
function incrementCounter_16997() {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = obj16378_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16378_droppedInsideTargetActions_2_runningActionsCount = window.obj16378_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj16378_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj16378_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16466 
hide_16678();
function hide_16678() {
	var selector = "#obj16466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16678(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16724
(function(){
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17028
(function(){
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17028";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17072
(function(){
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17072";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16378 
move_16679();
function move_16679() {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16378");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16677();
function playAudioFile_16677() {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16677")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16677");
			$("#obj_audio_playSoundFile16677").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
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
				window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_16680();
function runjs_16680() {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16378").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_16690();
function runjs_16690() {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16378").css("border-color", "rgba(0,0,0,0)"); $("#obj16378").css("border-width", "0px"); $("#obj16378").css("border-style", "solid"); $("#obj16378").css("border-radius", "0px"); $("#obj16378").css("-webkit-border-radius", "0px"); $("#obj16378").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_16682();
function switchText_16682() {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">67</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16378").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16378_content");
			setTimeout(function () {
				window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_16683();
function incrementCounter_16683() {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = obj16378_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16378_droppedInsideTargetActions_runningActionsCount = window.obj16378_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16378_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16378_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16378_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16378_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj16378_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16378_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16378").trigger("obj16378_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16378) {
				console.warn("de-queueing event obj16378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16378_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16697_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16697_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16717");

//	action: dragDrop
//	target: obj16717 
dragDrop_16700();
function dragDrop_16700() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16697_onTouchDown_runningActionsCount = obj16697_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16717');
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
    	window.obj16697_onTouchDown_runningActionsCount = window.obj16697_onTouchDown_runningActionsCount - 1;

if (window.obj16697_onTouchDown_runningActionsCount < 0) {
	window.obj16697_onTouchDown_runningActionsCount = 0;
} else if (window.obj16697_onTouchDown_runningActionsCount == 0) {
	obj16697_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16720");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16700 = false;
    	var dropped_id_16700;
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
					dropped_16700 = true;
					dropped_id_16700 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16700) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16697").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16697");

//	action: dragDrop
//	target: obj16697 
dragDrop_16711();
function dragDrop_16711() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16697_onTouchDown_runningActionsCount = obj16697_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16697');
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
    	window.obj16697_onTouchDown_runningActionsCount = window.obj16697_onTouchDown_runningActionsCount - 1;

if (window.obj16697_onTouchDown_runningActionsCount < 0) {
	window.obj16697_onTouchDown_runningActionsCount = 0;
} else if (window.obj16697_onTouchDown_runningActionsCount == 0) {
	obj16697_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16720");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16711 = false;
    	var dropped_id_16711;
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
					dropped_16711 = true;
					dropped_id_16711 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16711) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16697").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj16697_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16697_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16697 
move_16715();
function move_16715() {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16697");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16717 
move_16716();
function move_16716() {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16714();
function playAudioFile_16714() {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16714")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16714");
			$("#obj_audio_playSoundFile16714").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16697_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16717 
move_16736();
function move_16736() {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16697 
move_16737();
function move_16737() {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16697");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16735();
function playAudioFile_16735() {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16735")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16735");
			$("#obj_audio_playSoundFile16735").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16697_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16717 
hide_16703();
function hide_16703() {
	var selector = "#obj16717";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16703(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16726
(function(){
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16726";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16697 
move_16704();
function move_16704() {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16697");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 206;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16702();
function playAudioFile_16702() {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16702")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16702");
			$("#obj_audio_playSoundFile16702").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
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
				window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_16705();
function runjs_16705() {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16697").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_16707();
function runjs_16707() {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16697").css("border-color", "rgba(0,0,0,0)"); $("#obj16697").css("border-width", "0px"); $("#obj16697").css("border-style", "solid"); $("#obj16697").css("border-radius", "0px"); $("#obj16697").css("-webkit-border-radius", "0px"); $("#obj16697").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_16708();
function switchText_16708() {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">+</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16697_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16697_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16697").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16697_content");
			setTimeout(function () {
				window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16697 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_16709();
function incrementCounter_16709() {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = obj16697_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16697_droppedInsideTargetActions_runningActionsCount = window.obj16697_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16697_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj16697_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16697").trigger("obj16697_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16697) {
				console.warn("de-queueing event obj16697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16697_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16744_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16744_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16768");

//	action: dragDrop
//	target: obj16768 
dragDrop_16747();
function dragDrop_16747() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16744_onTouchDown_runningActionsCount = obj16744_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16768');
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
    	window.obj16744_onTouchDown_runningActionsCount = window.obj16744_onTouchDown_runningActionsCount - 1;

if (window.obj16744_onTouchDown_runningActionsCount < 0) {
	window.obj16744_onTouchDown_runningActionsCount = 0;
} else if (window.obj16744_onTouchDown_runningActionsCount == 0) {
	obj16744_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16771","#obj17101");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16747 = false;
    	var dropped_id_16747;
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
					dropped_16747 = true;
					dropped_id_16747 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16747) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16744").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16744");

//	action: dragDrop
//	target: obj16744 
dragDrop_16762();
function dragDrop_16762() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16744_onTouchDown_runningActionsCount = obj16744_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16744');
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
    	window.obj16744_onTouchDown_runningActionsCount = window.obj16744_onTouchDown_runningActionsCount - 1;

if (window.obj16744_onTouchDown_runningActionsCount < 0) {
	window.obj16744_onTouchDown_runningActionsCount = 0;
} else if (window.obj16744_onTouchDown_runningActionsCount == 0) {
	obj16744_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16771","#obj17101");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16762 = false;
    	var dropped_id_16762;
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
					dropped_16762 = true;
					dropped_id_16762 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16762) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16744").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj16744_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16744 
move_16766();
function move_16766() {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16768 
move_16767();
function move_16767() {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16765();
function playAudioFile_16765() {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16765")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16765");
			$("#obj_audio_playSoundFile16765").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16744_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16768 
hide_17115();
function hide_17115() {
	var selector = "#obj16768";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17115(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17099
(function(){
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17099";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17224
(function(){
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17224";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17191
(function(){
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17191";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16744 
move_17117();
function move_17117() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj16744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1123;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17114();
function playAudioFile_17114() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17114")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17114");
			$("#obj_audio_playSoundFile17114").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17118();
function runjs_17118() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16744").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17120();
function runjs_17120() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16744").css("border-color", "rgba(0,0,0,0)"); $("#obj16744").css("border-width", "0px"); $("#obj16744").css("border-style", "solid"); $("#obj16744").css("border-radius", "0px"); $("#obj16744").css("-webkit-border-radius", "0px"); $("#obj16744").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17121();
function switchText_17121() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">35</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16744").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16744_content");
			setTimeout(function () {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17122();
function incrementCounter_17122() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj16744_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj16744_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16768 
move_16760();
function move_16760() {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16744 
move_16761();
function move_16761() {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16759();
function playAudioFile_16759() {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16759")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16759");
			$("#obj_audio_playSoundFile16759").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16744_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16768 
hide_17416();
function hide_17416() {
	var selector = "#obj16768";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17416(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17099
(function(){
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17099";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17224
(function(){
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17224";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17191
(function(){
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17191";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16744 
move_17418();
function move_17418() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj16744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1123;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17415();
function playAudioFile_17415() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17415")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17415");
			$("#obj_audio_playSoundFile17415").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17419();
function runjs_17419() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16744").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17420();
function runjs_17420() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16744").css("border-color", "rgba(0,0,0,0)"); $("#obj16744").css("border-width", "0px"); $("#obj16744").css("border-style", "solid"); $("#obj16744").css("border-radius", "0px"); $("#obj16744").css("-webkit-border-radius", "0px"); $("#obj16744").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17421();
function switchText_17421() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">35</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16744").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16744_content");
			setTimeout(function () {
				window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17422();
function incrementCounter_17422() {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = obj16744_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16744_droppedInsideTargetActions_2_runningActionsCount = window.obj16744_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj16744_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj16744_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16768 
hide_16750();
function hide_16750() {
	var selector = "#obj16768";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16750(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16742
(function(){
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16742";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17224
(function(){
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17224";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17191
(function(){
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17191";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16744 
move_16752();
function move_16752() {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 286;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16749();
function playAudioFile_16749() {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16749")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16749");
			$("#obj_audio_playSoundFile16749").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
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
				window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_16753();
function runjs_16753() {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16744").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_16755();
function runjs_16755() {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16744").css("border-color", "rgba(0,0,0,0)"); $("#obj16744").css("border-width", "0px"); $("#obj16744").css("border-style", "solid"); $("#obj16744").css("border-radius", "0px"); $("#obj16744").css("-webkit-border-radius", "0px"); $("#obj16744").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_16756();
function switchText_16756() {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">35</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16744").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16744_content");
			setTimeout(function () {
				window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_16757();
function incrementCounter_16757() {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = obj16744_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16744_droppedInsideTargetActions_runningActionsCount = window.obj16744_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16744_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16744_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16744_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16744_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj16744_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16744_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16744").trigger("obj16744_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16744) {
				console.warn("de-queueing event obj16744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16744_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16784_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16784_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16808");

//	action: dragDrop
//	target: obj16808 
dragDrop_16787();
function dragDrop_16787() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16784_onTouchDown_runningActionsCount = obj16784_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16808');
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
    	window.obj16784_onTouchDown_runningActionsCount = window.obj16784_onTouchDown_runningActionsCount - 1;

if (window.obj16784_onTouchDown_runningActionsCount < 0) {
	window.obj16784_onTouchDown_runningActionsCount = 0;
} else if (window.obj16784_onTouchDown_runningActionsCount == 0) {
	obj16784_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16811","#obj17189");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16787 = false;
    	var dropped_id_16787;
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
					dropped_16787 = true;
					dropped_id_16787 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16787) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16784").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16784");

//	action: dragDrop
//	target: obj16784 
dragDrop_16802();
function dragDrop_16802() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16784_onTouchDown_runningActionsCount = obj16784_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16784');
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
    	window.obj16784_onTouchDown_runningActionsCount = window.obj16784_onTouchDown_runningActionsCount - 1;

if (window.obj16784_onTouchDown_runningActionsCount < 0) {
	window.obj16784_onTouchDown_runningActionsCount = 0;
} else if (window.obj16784_onTouchDown_runningActionsCount == 0) {
	obj16784_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16811","#obj17189");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16802 = false;
    	var dropped_id_16802;
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
					dropped_16802 = true;
					dropped_id_16802 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16802) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16784").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj16784_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16784 
move_16806();
function move_16806() {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16784");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 206;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16808 
move_16807();
function move_16807() {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 202;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16805();
function playAudioFile_16805() {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16805")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16805");
			$("#obj_audio_playSoundFile16805").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16784_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16808 
hide_17233();
function hide_17233() {
	var selector = "#obj16808";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17233(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17187
(function(){
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17187";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16784 
move_17235();
function move_17235() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj16784");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 482;
	var moveY = 709;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17232();
function playAudioFile_17232() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17232")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17232");
			$("#obj_audio_playSoundFile17232").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17236();
function runjs_17236() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16784").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17237();
function runjs_17237() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16784").css("border-color", "rgba(0,0,0,0)"); $("#obj16784").css("border-width", "0px"); $("#obj16784").css("border-style", "solid"); $("#obj16784").css("border-radius", "0px"); $("#obj16784").css("-webkit-border-radius", "0px"); $("#obj16784").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17238();
function switchText_17238() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">102</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16784_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16784_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16784").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16784_content");
			setTimeout(function () {
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16784 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17239();
function incrementCounter_17239() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj16784_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj16784_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16808 
move_16800();
function move_16800() {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 202;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16784 
move_16801();
function move_16801() {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16784");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 206;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16799();
function playAudioFile_16799() {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16799")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16799");
			$("#obj_audio_playSoundFile16799").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16784_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16808 
hide_17278();
function hide_17278() {
	var selector = "#obj16808";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17278(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17187
(function(){
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17187";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17340
(function(){
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17340";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17299
(function(){
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17299";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16784 
move_17280();
function move_17280() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj16784");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 443;
	var moveY = 717;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17277();
function playAudioFile_17277() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17277")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17277");
			$("#obj_audio_playSoundFile17277").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17281();
function runjs_17281() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16784").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17282();
function runjs_17282() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj16784").css("border-color", "rgba(0,0,0,0)"); $("#obj16784").css("border-width", "0px"); $("#obj16784").css("border-style", "solid"); $("#obj16784").css("border-radius", "0px"); $("#obj16784").css("-webkit-border-radius", "0px"); $("#obj16784").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17283();
function switchText_17283() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">102</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16784_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16784_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16784").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16784_content");
			setTimeout(function () {
				window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16784 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17284();
function incrementCounter_17284() {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = obj16784_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16784_droppedInsideTargetActions_2_runningActionsCount = window.obj16784_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj16784_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj16784_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16808 
hide_16790();
function hide_16790() {
	var selector = "#obj16808";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16790(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16782
(function(){
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16782";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17299
(function(){
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17299";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj17340
(function(){
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj17340";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16784 
move_16792();
function move_16792() {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16784");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 432;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16789();
function playAudioFile_16789() {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16789")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16789");
			$("#obj_audio_playSoundFile16789").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
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
				window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_16793();
function runjs_16793() {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16784").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_16795();
function runjs_16795() {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16784").css("border-color", "rgba(0,0,0,0)"); $("#obj16784").css("border-width", "0px"); $("#obj16784").css("border-style", "solid"); $("#obj16784").css("border-radius", "0px"); $("#obj16784").css("-webkit-border-radius", "0px"); $("#obj16784").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_16796();
function switchText_16796() {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">102</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16784_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16784_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16784").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16784_content");
			setTimeout(function () {
				window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16784 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_16797();
function incrementCounter_16797() {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = obj16784_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16784_droppedInsideTargetActions_runningActionsCount = window.obj16784_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16784_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16784_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16784_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16784_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj16784_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16784_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16784").trigger("obj16784_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16784) {
				console.warn("de-queueing event obj16784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16784_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16825_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16849");

//	action: dragDrop
//	target: obj16849 
dragDrop_16828();
function dragDrop_16828() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16825_onTouchDown_runningActionsCount = obj16825_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16849');
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
    	window.obj16825_onTouchDown_runningActionsCount = window.obj16825_onTouchDown_runningActionsCount - 1;

if (window.obj16825_onTouchDown_runningActionsCount < 0) {
	window.obj16825_onTouchDown_runningActionsCount = 0;
} else if (window.obj16825_onTouchDown_runningActionsCount == 0) {
	obj16825_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16852");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16828 = false;
    	var dropped_id_16828;
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
					dropped_16828 = true;
					dropped_id_16828 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16828) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16825").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj16825");

//	action: dragDrop
//	target: obj16825 
dragDrop_16843();
function dragDrop_16843() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj16825_onTouchDown_runningActionsCount = obj16825_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj16825');
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
    	window.obj16825_onTouchDown_runningActionsCount = window.obj16825_onTouchDown_runningActionsCount - 1;

if (window.obj16825_onTouchDown_runningActionsCount < 0) {
	window.obj16825_onTouchDown_runningActionsCount = 0;
} else if (window.obj16825_onTouchDown_runningActionsCount == 0) {
	obj16825_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16852");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_16843 = false;
    	var dropped_id_16843;
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
					dropped_16843 = true;
					dropped_id_16843 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_16843) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj16825").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj16825_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16825_onTouchDown_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16825 
move_16847();
function move_16847() {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16825");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16849 
move_16848();
function move_16848() {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16849");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16846();
function playAudioFile_16846() {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16846")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16846");
			$("#obj_audio_playSoundFile16846").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16825_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj16849 
move_16841();
function move_16841() {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16849");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj16825 
move_16842();
function move_16842() {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16825");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16840();
function playAudioFile_16840() {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16840")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16840");
			$("#obj_audio_playSoundFile16840").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj16825_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16849 
hide_16831();
function hide_16831() {
	var selector = "#obj16849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16831(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16724
(function(){
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj20114
(function(){
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj20114";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj20091
(function(){
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj20091";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj16825 
move_16833();
function move_16833() {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj16825");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 950;
	var moveY = 569;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_16830();
function playAudioFile_16830() {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16830")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16830");
			$("#obj_audio_playSoundFile16830").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
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
				window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_16834();
function runjs_16834() {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16825").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_16836();
function runjs_16836() {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj16825").css("border-color", "rgba(0,0,0,0)"); $("#obj16825").css("border-width", "0px"); $("#obj16825").css("border-style", "solid"); $("#obj16825").css("border-radius", "0px"); $("#obj16825").css("-webkit-border-radius", "0px"); $("#obj16825").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_16837();
function switchText_16837() {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">?</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16825_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16825_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16825").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16825_content");
			setTimeout(function () {
				window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16825 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_16838();
function incrementCounter_16838() {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = obj16825_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16825_droppedInsideTargetActions_runningActionsCount = window.obj16825_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj16825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj16825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj16825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj16825_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj16825_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj16825").trigger("obj16825_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16825) {
				console.warn("de-queueing event obj16825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16825_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj20091_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20091_onTouchDown_activeActionGroupIndex = -1;
		$("#obj20091").trigger("obj20091_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20091) {
				console.warn("de-queueing event obj20091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20091_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj20091");

//	action: dragDrop
//	target: obj20091 
dragDrop_20094();
function dragDrop_20094() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj20091_onTouchDown_runningActionsCount = obj20091_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj20091');
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
    	window.obj20091_onTouchDown_runningActionsCount = window.obj20091_onTouchDown_runningActionsCount - 1;

if (window.obj20091_onTouchDown_runningActionsCount < 0) {
	window.obj20091_onTouchDown_runningActionsCount = 0;
} else if (window.obj20091_onTouchDown_runningActionsCount == 0) {
	obj20091_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_20094 = false;
    	var dropped_id_20094;
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
					dropped_20094 = true;
					dropped_id_20094 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_20094) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj20091").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj20114");

//	action: dragDrop
//	target: obj20114 
dragDrop_20117();
function dragDrop_20117() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj20091_onTouchDown_runningActionsCount = obj20091_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj20114');
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
    	window.obj20091_onTouchDown_runningActionsCount = window.obj20091_onTouchDown_runningActionsCount - 1;

if (window.obj20091_onTouchDown_runningActionsCount < 0) {
	window.obj20091_onTouchDown_runningActionsCount = 0;
} else if (window.obj20091_onTouchDown_runningActionsCount == 0) {
	obj20091_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_20117 = false;
    	var dropped_id_20117;
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
					dropped_20117 = true;
					dropped_id_20117 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_20117) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj20091").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj20091_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20091_onTouchDown_activeActionGroupIndex = -1;
		$("#obj20091").trigger("obj20091_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20091) {
				console.warn("de-queueing event obj20091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20091_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj20091").trigger("obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20091) {
				console.warn("de-queueing event obj20091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj20114 
move_20120();
function move_20120() {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj20114");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj20091 
move_20121();
function move_20121() {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj20091");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_20119();
function playAudioFile_20119() {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20119")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20119");
			$("#obj_audio_playSoundFile20119").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj20091").trigger("obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20091) {
				console.warn("de-queueing event obj20091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj20091").trigger("obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20091) {
				console.warn("de-queueing event obj20091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj20114 
move_20106();
function move_20106() {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj20114");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj20091 
move_20107();
function move_20107() {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj20091");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_20105();
function playAudioFile_20105() {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20105")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20105");
			$("#obj_audio_playSoundFile20105").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj20091").trigger("obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20091) {
				console.warn("de-queueing event obj20091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17028_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17028_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17072");

//	action: dragDrop
//	target: obj17072 
dragDrop_17031();
function dragDrop_17031() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17028_onTouchDown_runningActionsCount = obj17028_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17072');
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
    	window.obj17028_onTouchDown_runningActionsCount = window.obj17028_onTouchDown_runningActionsCount - 1;

if (window.obj17028_onTouchDown_runningActionsCount < 0) {
	window.obj17028_onTouchDown_runningActionsCount = 0;
} else if (window.obj17028_onTouchDown_runningActionsCount == 0) {
	obj17028_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16490","#obj16954");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17031 = false;
    	var dropped_id_17031;
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
					dropped_17031 = true;
					dropped_id_17031 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17031) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj17028").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17028");

//	action: dragDrop
//	target: obj17028 
dragDrop_17056();
function dragDrop_17056() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17028_onTouchDown_runningActionsCount = obj17028_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17028');
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
    	window.obj17028_onTouchDown_runningActionsCount = window.obj17028_onTouchDown_runningActionsCount - 1;

if (window.obj17028_onTouchDown_runningActionsCount < 0) {
	window.obj17028_onTouchDown_runningActionsCount = 0;
} else if (window.obj17028_onTouchDown_runningActionsCount == 0) {
	obj17028_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16490","#obj16954");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17056 = false;
    	var dropped_id_17056;
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
					dropped_17056 = true;
					dropped_id_17056 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17056) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj17028").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj17028_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17028 
move_17070();
function move_17070() {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17028");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17072 
move_17071();
function move_17071() {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17072");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17069();
function playAudioFile_17069() {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17069")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17069");
			$("#obj_audio_playSoundFile17069").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17028_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17072 
hide_17060();
function hide_17060() {
	var selector = "#obj17072";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17060(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16724
(function(){
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16952
(function(){
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj16952";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17028 
move_17062();
function move_17062() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj17028");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 811;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17059();
function playAudioFile_17059() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17059")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17059");
			$("#obj_audio_playSoundFile17059").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17063();
function runjs_17063() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17028").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17065();
function runjs_17065() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17028").css("border-color", "rgba(0,0,0,0)"); $("#obj17028").css("border-width", "0px"); $("#obj17028").css("border-style", "solid"); $("#obj17028").css("border-radius", "0px"); $("#obj17028").css("-webkit-border-radius", "0px"); $("#obj17028").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17066();
function switchText_17066() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">67</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17028_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17028_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17028").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17028_content");
			setTimeout(function () {
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17028 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17067();
function incrementCounter_17067() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj17028_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj17028_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17072 
move_17054();
function move_17054() {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17072");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17028 
move_17055();
function move_17055() {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17028");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17053();
function playAudioFile_17053() {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17053")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17053");
			$("#obj_audio_playSoundFile17053").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17028_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17072 
hide_17044();
function hide_17044() {
	var selector = "#obj17072";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17044(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16724
(function(){
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17028 
move_17046();
function move_17046() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj17028");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 811;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17043();
function playAudioFile_17043() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17043")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17043");
			$("#obj_audio_playSoundFile17043").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17047();
function runjs_17047() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17028").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17049();
function runjs_17049() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17028").css("border-color", "rgba(0,0,0,0)"); $("#obj17028").css("border-width", "0px"); $("#obj17028").css("border-style", "solid"); $("#obj17028").css("border-radius", "0px"); $("#obj17028").css("-webkit-border-radius", "0px"); $("#obj17028").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17050();
function switchText_17050() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">67</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17028_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17028_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17028").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17028_content");
			setTimeout(function () {
				window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17028 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17051();
function incrementCounter_17051() {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = obj17028_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17028_droppedInsideTargetActions_2_runningActionsCount = window.obj17028_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj17028_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj17028_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17072 
hide_17034();
function hide_17034() {
	var selector = "#obj17072";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17034(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16724
(function(){
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16724";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17028 
move_17036();
function move_17036() {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17028");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17033();
function playAudioFile_17033() {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17033")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17033");
			$("#obj_audio_playSoundFile17033").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
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
				window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17037();
function runjs_17037() {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj17028").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17039();
function runjs_17039() {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj17028").css("border-color", "rgba(0,0,0,0)"); $("#obj17028").css("border-width", "0px"); $("#obj17028").css("border-style", "solid"); $("#obj17028").css("border-radius", "0px"); $("#obj17028").css("-webkit-border-radius", "0px"); $("#obj17028").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17040();
function switchText_17040() {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">67</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17028_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17028_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17028").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17028_content");
			setTimeout(function () {
				window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17028 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17041();
function incrementCounter_17041() {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = obj17028_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17028_droppedInsideTargetActions_runningActionsCount = window.obj17028_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17028_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17028_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17028_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17028_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj17028_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17028_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17028").trigger("obj17028_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17028) {
				console.warn("de-queueing event obj17028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17028_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17191_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17191_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17224");

//	action: dragDrop
//	target: obj17224 
dragDrop_17194();
function dragDrop_17194() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17191_onTouchDown_runningActionsCount = obj17191_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17224');
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
    	window.obj17191_onTouchDown_runningActionsCount = window.obj17191_onTouchDown_runningActionsCount - 1;

if (window.obj17191_onTouchDown_runningActionsCount < 0) {
	window.obj17191_onTouchDown_runningActionsCount = 0;
} else if (window.obj17191_onTouchDown_runningActionsCount == 0) {
	obj17191_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16771","#obj17101");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17194 = false;
    	var dropped_id_17194;
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
					dropped_17194 = true;
					dropped_id_17194 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17194) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj17191").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17191");

//	action: dragDrop
//	target: obj17191 
dragDrop_17209();
function dragDrop_17209() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17191_onTouchDown_runningActionsCount = obj17191_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17191');
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
    	window.obj17191_onTouchDown_runningActionsCount = window.obj17191_onTouchDown_runningActionsCount - 1;

if (window.obj17191_onTouchDown_runningActionsCount < 0) {
	window.obj17191_onTouchDown_runningActionsCount = 0;
} else if (window.obj17191_onTouchDown_runningActionsCount == 0) {
	obj17191_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16771","#obj17101");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17209 = false;
    	var dropped_id_17209;
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
					dropped_17209 = true;
					dropped_id_17209 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17209) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj17191").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj17191_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17191 
move_17222();
function move_17222() {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17224 
move_17223();
function move_17223() {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17224");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17221();
function playAudioFile_17221() {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17221")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17221");
			$("#obj_audio_playSoundFile17221").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17191_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17224 
hide_17213();
function hide_17213() {
	var selector = "#obj17224";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17213(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17099
(function(){
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17099";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17191 
move_17215();
function move_17215() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj17191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1123;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17212();
function playAudioFile_17212() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17212")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17212");
			$("#obj_audio_playSoundFile17212").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17216();
function runjs_17216() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17191").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17217();
function runjs_17217() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17191").css("border-color", "rgba(0,0,0,0)"); $("#obj17191").css("border-width", "0px"); $("#obj17191").css("border-style", "solid"); $("#obj17191").css("border-radius", "0px"); $("#obj17191").css("-webkit-border-radius", "0px"); $("#obj17191").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17218();
function switchText_17218() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">35</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17191_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17191_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17191").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17191_content");
			setTimeout(function () {
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17191 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17219();
function incrementCounter_17219() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj17191_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj17191_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17224 
move_17207();
function move_17207() {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17224");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17191 
move_17208();
function move_17208() {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17206();
function playAudioFile_17206() {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17206")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17206");
			$("#obj_audio_playSoundFile17206").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17191_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17224 
hide_20146();
function hide_20146() {
	var selector = "#obj17224";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_20146(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17099
(function(){
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17099";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17191 
move_20148();
function move_20148() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj17191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1123;
	var moveY = 370;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_20145();
function playAudioFile_20145() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20145")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20145");
			$("#obj_audio_playSoundFile20145").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_20149();
function runjs_20149() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17191").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_20150();
function runjs_20150() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17191").css("border-color", "rgba(0,0,0,0)"); $("#obj17191").css("border-width", "0px"); $("#obj17191").css("border-style", "solid"); $("#obj17191").css("border-radius", "0px"); $("#obj17191").css("-webkit-border-radius", "0px"); $("#obj17191").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_20151();
function switchText_20151() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">35</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17191_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17191_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17191").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17191_content");
			setTimeout(function () {
				window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17191 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_20152();
function incrementCounter_20152() {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = obj17191_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17191_droppedInsideTargetActions_2_runningActionsCount = window.obj17191_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj17191_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj17191_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17224 
hide_17197();
function hide_17197() {
	var selector = "#obj17224";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17197(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16742
(function(){
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16742";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17191 
move_17199();
function move_17199() {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 286;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17196();
function playAudioFile_17196() {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17196")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17196");
			$("#obj_audio_playSoundFile17196").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
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
				window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17200();
function runjs_17200() {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj17191").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17202();
function runjs_17202() {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj17191").css("border-color", "rgba(0,0,0,0)"); $("#obj17191").css("border-width", "0px"); $("#obj17191").css("border-style", "solid"); $("#obj17191").css("border-radius", "0px"); $("#obj17191").css("-webkit-border-radius", "0px"); $("#obj17191").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17203();
function switchText_17203() {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">35</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17191_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17191_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17191").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17191_content");
			setTimeout(function () {
				window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17191 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17204();
function incrementCounter_17204() {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = obj17191_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17191_droppedInsideTargetActions_runningActionsCount = window.obj17191_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17191_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17191_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17191_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17191_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj17191_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17191_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17191").trigger("obj17191_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17191) {
				console.warn("de-queueing event obj17191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17191_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17299_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17299_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17340");

//	action: dragDrop
//	target: obj17340 
dragDrop_17302();
function dragDrop_17302() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17299_onTouchDown_runningActionsCount = obj17299_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17340');
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
    	window.obj17299_onTouchDown_runningActionsCount = window.obj17299_onTouchDown_runningActionsCount - 1;

if (window.obj17299_onTouchDown_runningActionsCount < 0) {
	window.obj17299_onTouchDown_runningActionsCount = 0;
} else if (window.obj17299_onTouchDown_runningActionsCount == 0) {
	obj17299_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16811","#obj17189");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17302 = false;
    	var dropped_id_17302;
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
					dropped_17302 = true;
					dropped_id_17302 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17302) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj17299").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17299");

//	action: dragDrop
//	target: obj17299 
dragDrop_17325();
function dragDrop_17325() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17299_onTouchDown_runningActionsCount = obj17299_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17299');
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
    	window.obj17299_onTouchDown_runningActionsCount = window.obj17299_onTouchDown_runningActionsCount - 1;

if (window.obj17299_onTouchDown_runningActionsCount < 0) {
	window.obj17299_onTouchDown_runningActionsCount = 0;
} else if (window.obj17299_onTouchDown_runningActionsCount == 0) {
	obj17299_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16811","#obj17189");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17325 = false;
    	var dropped_id_17325;
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
					dropped_17325 = true;
					dropped_id_17325 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17325) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj17299").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj17299_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17299 
move_17338();
function move_17338() {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 206;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17340 
move_17339();
function move_17339() {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17340");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 202;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17337();
function playAudioFile_17337() {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17337")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17337");
			$("#obj_audio_playSoundFile17337").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17299_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17340 
hide_17329();
function hide_17329() {
	var selector = "#obj17340";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17329(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17187
(function(){
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17187";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17299 
move_17331();
function move_17331() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj17299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 482;
	var moveY = 709;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17328();
function playAudioFile_17328() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17328")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17328");
			$("#obj_audio_playSoundFile17328").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17332();
function runjs_17332() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17299").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17333();
function runjs_17333() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17299").css("border-color", "rgba(0,0,0,0)"); $("#obj17299").css("border-width", "0px"); $("#obj17299").css("border-style", "solid"); $("#obj17299").css("border-radius", "0px"); $("#obj17299").css("-webkit-border-radius", "0px"); $("#obj17299").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17334();
function switchText_17334() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">102</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17299_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17299_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17299").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17299_content");
			setTimeout(function () {
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17299 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17335();
function incrementCounter_17335() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj17299_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj17299_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_activeActionGroupIndex = 0;
	











































};
obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17340 
move_17323();
function move_17323() {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17340");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 202;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17299 
move_17324();
function move_17324() {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 206;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17322();
function playAudioFile_17322() {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17322")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17322");
			$("#obj_audio_playSoundFile17322").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17299_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17340 
hide_17314();
function hide_17314() {
	var selector = "#obj17340";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17314(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj17187
(function(){
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj17187";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17299 
move_17316();
function move_17316() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj17299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 443;
	var moveY = 717;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17313();
function playAudioFile_17313() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17313")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17313");
			$("#obj_audio_playSoundFile17313").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17317();
function runjs_17317() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17299").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17318();
function runjs_17318() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj17299").css("border-color", "rgba(0,0,0,0)"); $("#obj17299").css("border-width", "0px"); $("#obj17299").css("border-style", "solid"); $("#obj17299").css("border-radius", "0px"); $("#obj17299").css("-webkit-border-radius", "0px"); $("#obj17299").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17319();
function switchText_17319() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">102</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17299_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17299_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17299").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17299_content");
			setTimeout(function () {
				window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17299 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17320();
function incrementCounter_17320() {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = obj17299_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17299_droppedInsideTargetActions_2_runningActionsCount = window.obj17299_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}











};
obj17299_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	











































};
obj17299_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj17340 
hide_17305();
function hide_17305() {
	var selector = "#obj17340";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_17305(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16782
(function(){
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj16782";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj17299 
move_17307();
function move_17307() {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 432;
	var moveY = 637;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17304();
function playAudioFile_17304() {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17304")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17304");
			$("#obj_audio_playSoundFile17304").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
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
				window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_17308();
function runjs_17308() {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj17299").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_17309();
function runjs_17309() {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj17299").css("border-color", "rgba(0,0,0,0)"); $("#obj17299").css("border-width", "0px"); $("#obj17299").css("border-style", "solid"); $("#obj17299").css("border-radius", "0px"); $("#obj17299").css("-webkit-border-radius", "0px"); $("#obj17299").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_17310();
function switchText_17310() {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">102</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj17299_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj17299_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj17299").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj17299_content");
			setTimeout(function () {
				window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj17299 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj16334 
incrementCounter_17311();
function incrementCounter_17311() {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = obj17299_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj16334_counterValue;
	obj16334_counterValue = obj16334_counterValue + 1;
	if (! obj16334_counterCanExceedTargetValue && obj16334_counterValue > obj16334_counterTargetValue) {
		obj16334_counterValue = obj16334_counterTargetValue;
	}

	if (oldValue != obj16334_counterValue) {
		$("#obj16334").trigger('SCEventCounterValueChange');
		$("#obj16334").trigger('SCEventCounterIncrease');
		if (obj16334_counterValue == obj16334_counterTargetValue)
			$("#obj16334").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj17299_droppedInsideTargetActions_runningActionsCount = window.obj17299_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj17299_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj17299_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj17299_droppedInsideTargetActions_runningActionsCount == 0) {
	obj17299_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj17299_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17299_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17299").trigger("obj17299_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17299) {
				console.warn("de-queueing event obj17299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17299_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17363_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17363_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17363").trigger("obj17363_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17363) {
				console.warn("de-queueing event obj17363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17363_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17386");

//	action: dragDrop
//	target: obj17386 
dragDrop_17366();
function dragDrop_17366() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17363_onTouchDown_runningActionsCount = obj17363_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17386');
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
    	window.obj17363_onTouchDown_runningActionsCount = window.obj17363_onTouchDown_runningActionsCount - 1;

if (window.obj17363_onTouchDown_runningActionsCount < 0) {
	window.obj17363_onTouchDown_runningActionsCount = 0;
} else if (window.obj17363_onTouchDown_runningActionsCount == 0) {
	obj17363_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17366 = false;
    	var dropped_id_17366;
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
					dropped_17366 = true;
					dropped_id_17366 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17366) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj17363").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}
//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj17363");

//	action: dragDrop
//	target: obj17363 
dragDrop_17380();
function dragDrop_17380() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj17363_onTouchDown_runningActionsCount = obj17363_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj17363');
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
    	window.obj17363_onTouchDown_runningActionsCount = window.obj17363_onTouchDown_runningActionsCount - 1;

if (window.obj17363_onTouchDown_runningActionsCount < 0) {
	window.obj17363_onTouchDown_runningActionsCount = 0;
} else if (window.obj17363_onTouchDown_runningActionsCount == 0) {
	obj17363_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_17380 = false;
    	var dropped_id_17380;
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
					dropped_17380 = true;
					dropped_id_17380 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_17380) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj17363").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj17363_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17363_onTouchDown_activeActionGroupIndex = -1;
		$("#obj17363").trigger("obj17363_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17363) {
				console.warn("de-queueing event obj17363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17363_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17363").trigger("obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17363) {
				console.warn("de-queueing event obj17363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17363 
move_17384();
function move_17384() {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17363");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17386 
move_17385();
function move_17385() {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17386");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17383();
function playAudioFile_17383() {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17383")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17383");
			$("#obj_audio_playSoundFile17383").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17363").trigger("obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17363) {
				console.warn("de-queueing event obj17363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17363").trigger("obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17363) {
				console.warn("de-queueing event obj17363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj17386 
move_17378();
function move_17378() {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17386");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj17363 
move_17379();
function move_17379() {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj17363");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_17377();
function playAudioFile_17377() {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile17377")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile17377");
			$("#obj_audio_playSoundFile17377").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj17363").trigger("obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17363) {
				console.warn("de-queueing event obj17363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj16303: Event Touch Down
 *
 */

$("#obj16303").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16303_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16303_onTap is still running");
	return;
}
var obj16303_onTap_runningActionsCount = 0;
var obj16303_onTap_loopCount = 0;
obj16303_onTap_actionGroup0();
});


















/*
 *
 *   obj16306: Event Touch Down
 *
 */

$("#obj16306").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16306_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16306_onTap is still running");
	return;
}
var obj16306_onTap_runningActionsCount = 0;
var obj16306_onTap_loopCount = 0;
obj16306_onTap_actionGroup0();
});
























































/*
 *
 *   obj16313: Event Touch Down
 *
 */

$("#obj16313").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16313_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16313_onTap is still running");
	return;
}
var obj16313_onTap_runningActionsCount = 0;
var obj16313_onTap_loopCount = 0;
obj16313_onTap_actionGroup0();
});


















/*
 *
 *   obj16316: Event Touch Down
 *
 */

$("#obj16316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16316_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16316_onTap is still running");
	return;
}
var obj16316_onTap_runningActionsCount = 0;
var obj16316_onTap_loopCount = 0;
obj16316_onTap_actionGroup0();
});


















/*
 *
 *   obj16322: Event Touch Down
 *
 */

$("#obj16322").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16322_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16322_onTap is still running");
	return;
}
var obj16322_onTap_runningActionsCount = 0;
var obj16322_onTap_loopCount = 0;
obj16322_onTap_actionGroup0();
});




















































































/*
 *
 *   obj16334: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj16334").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj16334_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16334_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj16334_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj16334_SCEventCounterReachedTargetValue_loopCount = 0;
obj16334_SCEventCounterReachedTargetValue_actionGroup0();
});






















































































































































































/*
 *
 *   obj16378: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj16378");
	var winTarget = document.getElementById("obj16378");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj16378").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj16378_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj16378_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj16378_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_onTouchDown is still running");
	return;
}
var obj16378_onTouchDown_runningActionsCount = 0;
var obj16378_onTouchDown_loopCount = 0;
obj16378_onTouchDown_actionGroup0();
});






/*
 *
 *   obj16378: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16378").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16378: Event droppedInsideTargetActions_2
 *
 */

$("#obj16378").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_droppedInsideTargetActions_2 is still running");
	return;
}
var obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_2_loopCount = 0;
obj16378_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj16378: Event droppedInsideTargetActions
 *
 */

$("#obj16378").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16378_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_droppedInsideTargetActions is still running");
	return;
}
var obj16378_droppedInsideTargetActions_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_loopCount = 0;
obj16378_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16378: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16378").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16378_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16378: Event droppedInsideTargetActions_2
 *
 */

$("#obj16378").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj16378_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_droppedInsideTargetActions_2 is still running");
	return;
}
var obj16378_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_2_loopCount = 0;
obj16378_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj16378: Event droppedInsideTargetActions
 *
 */

$("#obj16378").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16378_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16378_droppedInsideTargetActions is still running");
	return;
}
var obj16378_droppedInsideTargetActions_runningActionsCount = 0;
var obj16378_droppedInsideTargetActions_loopCount = 0;
obj16378_droppedInsideTargetActions_actionGroup0();
});























































































/*
 *
 *   obj16697: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj16697");
	var winTarget = document.getElementById("obj16697");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj16697").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj16697_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj16697_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj16697_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16697_onTouchDown is still running");
	return;
}
var obj16697_onTouchDown_runningActionsCount = 0;
var obj16697_onTouchDown_loopCount = 0;
obj16697_onTouchDown_actionGroup0();
});






/*
 *
 *   obj16697: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16697").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16697: Event droppedInsideTargetActions
 *
 */

$("#obj16697").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16697_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16697_droppedInsideTargetActions is still running");
	return;
}
var obj16697_droppedInsideTargetActions_runningActionsCount = 0;
var obj16697_droppedInsideTargetActions_loopCount = 0;
obj16697_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16697: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16697").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16697_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16697_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16697: Event droppedInsideTargetActions
 *
 */

$("#obj16697").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16697_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16697_droppedInsideTargetActions is still running");
	return;
}
var obj16697_droppedInsideTargetActions_runningActionsCount = 0;
var obj16697_droppedInsideTargetActions_loopCount = 0;
obj16697_droppedInsideTargetActions_actionGroup0();
});




































































/*
 *
 *   obj16744: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj16744");
	var winTarget = document.getElementById("obj16744");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj16744").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj16744_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj16744_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj16744_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_onTouchDown is still running");
	return;
}
var obj16744_onTouchDown_runningActionsCount = 0;
var obj16744_onTouchDown_loopCount = 0;
obj16744_onTouchDown_actionGroup0();
});






/*
 *
 *   obj16744: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16744").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16744: Event droppedInsideTargetActions_2
 *
 */

$("#obj16744").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_droppedInsideTargetActions_2 is still running");
	return;
}
var obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_2_loopCount = 0;
obj16744_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj16744: Event droppedInsideTargetActions
 *
 */

$("#obj16744").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16744_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_droppedInsideTargetActions is still running");
	return;
}
var obj16744_droppedInsideTargetActions_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_loopCount = 0;
obj16744_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16744: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16744").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16744_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16744: Event droppedInsideTargetActions_2
 *
 */

$("#obj16744").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj16744_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_droppedInsideTargetActions_2 is still running");
	return;
}
var obj16744_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_2_loopCount = 0;
obj16744_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj16744: Event droppedInsideTargetActions
 *
 */

$("#obj16744").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16744_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16744_droppedInsideTargetActions is still running");
	return;
}
var obj16744_droppedInsideTargetActions_runningActionsCount = 0;
var obj16744_droppedInsideTargetActions_loopCount = 0;
obj16744_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj16784: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj16784");
	var winTarget = document.getElementById("obj16784");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj16784").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj16784_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj16784_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj16784_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_onTouchDown is still running");
	return;
}
var obj16784_onTouchDown_runningActionsCount = 0;
var obj16784_onTouchDown_loopCount = 0;
obj16784_onTouchDown_actionGroup0();
});






/*
 *
 *   obj16784: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16784").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16784: Event droppedInsideTargetActions_2
 *
 */

$("#obj16784").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_droppedInsideTargetActions_2 is still running");
	return;
}
var obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_2_loopCount = 0;
obj16784_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj16784: Event droppedInsideTargetActions
 *
 */

$("#obj16784").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16784_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_droppedInsideTargetActions is still running");
	return;
}
var obj16784_droppedInsideTargetActions_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_loopCount = 0;
obj16784_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16784: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16784").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16784_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16784: Event droppedInsideTargetActions_2
 *
 */

$("#obj16784").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj16784_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_droppedInsideTargetActions_2 is still running");
	return;
}
var obj16784_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_2_loopCount = 0;
obj16784_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj16784: Event droppedInsideTargetActions
 *
 */

$("#obj16784").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16784_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16784_droppedInsideTargetActions is still running");
	return;
}
var obj16784_droppedInsideTargetActions_runningActionsCount = 0;
var obj16784_droppedInsideTargetActions_loopCount = 0;
obj16784_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj16825: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj16825");
	var winTarget = document.getElementById("obj16825");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj16825").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj16825_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj16825_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj16825_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16825_onTouchDown is still running");
	return;
}
var obj16825_onTouchDown_runningActionsCount = 0;
var obj16825_onTouchDown_loopCount = 0;
obj16825_onTouchDown_actionGroup0();
});






/*
 *
 *   obj16825: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16825").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16825: Event droppedInsideTargetActions
 *
 */

$("#obj16825").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16825_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16825_droppedInsideTargetActions is still running");
	return;
}
var obj16825_droppedInsideTargetActions_runningActionsCount = 0;
var obj16825_droppedInsideTargetActions_loopCount = 0;
obj16825_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16825: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj16825").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16825_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj16825_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj16825: Event droppedInsideTargetActions
 *
 */

$("#obj16825").bind("droppedInsideTargetActions", function(event) {
	if (window.obj16825_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16825_droppedInsideTargetActions is still running");
	return;
}
var obj16825_droppedInsideTargetActions_runningActionsCount = 0;
var obj16825_droppedInsideTargetActions_loopCount = 0;
obj16825_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj20091: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj20091");
	var winTarget = document.getElementById("obj20091");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj20091").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj20091_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj20091_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj20091_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20091_onTouchDown is still running");
	return;
}
var obj20091_onTouchDown_runningActionsCount = 0;
var obj20091_onTouchDown_loopCount = 0;
obj20091_onTouchDown_actionGroup0();
});






/*
 *
 *   obj20091: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj20091").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj20091: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj20091").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20091_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj20091_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});























































































/*
 *
 *   obj17028: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj17028");
	var winTarget = document.getElementById("obj17028");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj17028").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj17028_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj17028_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj17028_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_onTouchDown is still running");
	return;
}
var obj17028_onTouchDown_runningActionsCount = 0;
var obj17028_onTouchDown_loopCount = 0;
obj17028_onTouchDown_actionGroup0();
});






/*
 *
 *   obj17028: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17028").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17028: Event droppedInsideTargetActions_2
 *
 */

$("#obj17028").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_droppedInsideTargetActions_2 is still running");
	return;
}
var obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_2_loopCount = 0;
obj17028_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj17028: Event droppedInsideTargetActions
 *
 */

$("#obj17028").bind("droppedInsideTargetActions", function(event) {
	if (window.obj17028_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_droppedInsideTargetActions is still running");
	return;
}
var obj17028_droppedInsideTargetActions_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_loopCount = 0;
obj17028_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17028: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17028").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17028_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17028: Event droppedInsideTargetActions_2
 *
 */

$("#obj17028").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj17028_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_droppedInsideTargetActions_2 is still running");
	return;
}
var obj17028_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_2_loopCount = 0;
obj17028_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj17028: Event droppedInsideTargetActions
 *
 */

$("#obj17028").bind("droppedInsideTargetActions", function(event) {
	if (window.obj17028_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17028_droppedInsideTargetActions is still running");
	return;
}
var obj17028_droppedInsideTargetActions_runningActionsCount = 0;
var obj17028_droppedInsideTargetActions_loopCount = 0;
obj17028_droppedInsideTargetActions_actionGroup0();
});




































































/*
 *
 *   obj17191: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj17191");
	var winTarget = document.getElementById("obj17191");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj17191").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj17191_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj17191_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj17191_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_onTouchDown is still running");
	return;
}
var obj17191_onTouchDown_runningActionsCount = 0;
var obj17191_onTouchDown_loopCount = 0;
obj17191_onTouchDown_actionGroup0();
});






/*
 *
 *   obj17191: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17191").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17191: Event droppedInsideTargetActions_2
 *
 */

$("#obj17191").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_droppedInsideTargetActions_2 is still running");
	return;
}
var obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_2_loopCount = 0;
obj17191_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj17191: Event droppedInsideTargetActions
 *
 */

$("#obj17191").bind("droppedInsideTargetActions", function(event) {
	if (window.obj17191_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_droppedInsideTargetActions is still running");
	return;
}
var obj17191_droppedInsideTargetActions_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_loopCount = 0;
obj17191_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17191: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17191").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17191_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17191: Event droppedInsideTargetActions_2
 *
 */

$("#obj17191").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj17191_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_droppedInsideTargetActions_2 is still running");
	return;
}
var obj17191_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_2_loopCount = 0;
obj17191_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj17191: Event droppedInsideTargetActions
 *
 */

$("#obj17191").bind("droppedInsideTargetActions", function(event) {
	if (window.obj17191_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17191_droppedInsideTargetActions is still running");
	return;
}
var obj17191_droppedInsideTargetActions_runningActionsCount = 0;
var obj17191_droppedInsideTargetActions_loopCount = 0;
obj17191_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj17299: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj17299");
	var winTarget = document.getElementById("obj17299");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj17299").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj17299_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj17299_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj17299_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_onTouchDown is still running");
	return;
}
var obj17299_onTouchDown_runningActionsCount = 0;
var obj17299_onTouchDown_loopCount = 0;
obj17299_onTouchDown_actionGroup0();
});






/*
 *
 *   obj17299: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17299").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17299: Event droppedInsideTargetActions_2
 *
 */

$("#obj17299").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_droppedInsideTargetActions_2 is still running");
	return;
}
var obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_2_loopCount = 0;
obj17299_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj17299: Event droppedInsideTargetActions
 *
 */

$("#obj17299").bind("droppedInsideTargetActions", function(event) {
	if (window.obj17299_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_droppedInsideTargetActions is still running");
	return;
}
var obj17299_droppedInsideTargetActions_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_loopCount = 0;
obj17299_droppedInsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17299: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17299").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17299_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17299: Event droppedInsideTargetActions_2
 *
 */

$("#obj17299").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj17299_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_droppedInsideTargetActions_2 is still running");
	return;
}
var obj17299_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_2_loopCount = 0;
obj17299_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj17299: Event droppedInsideTargetActions
 *
 */

$("#obj17299").bind("droppedInsideTargetActions", function(event) {
	if (window.obj17299_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17299_droppedInsideTargetActions is still running");
	return;
}
var obj17299_droppedInsideTargetActions_runningActionsCount = 0;
var obj17299_droppedInsideTargetActions_loopCount = 0;
obj17299_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj17363: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj17363");
	var winTarget = document.getElementById("obj17363");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj17363").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj17363_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj17363_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj17363_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17363_onTouchDown is still running");
	return;
}
var obj17363_onTouchDown_runningActionsCount = 0;
var obj17363_onTouchDown_loopCount = 0;
obj17363_onTouchDown_actionGroup0();
});






/*
 *
 *   obj17363: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17363").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj17363: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj17363").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17363_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj17363_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
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
	
$("#obj16299").trigger('SCEventShow');
$("#obj17450").trigger('SCEventShow');
$("#obj16301").trigger('SCEventShow');
$("#obj16303").trigger('SCEventShow');
$("#obj16306").trigger('SCEventShow');
$("#obj16309").trigger('SCEventShow');
$("#obj16311").trigger('SCEventShow');
$("#obj16313").trigger('SCEventShow');
$("#obj16316").trigger('SCEventShow');
$("#obj16332").trigger('SCEventShow');
$("#obj16490").trigger('SCEventShow');
$("#obj16720").trigger('SCEventShow');
$("#obj16771").trigger('SCEventShow');
$("#obj16811").trigger('SCEventShow');
$("#obj16852").trigger('SCEventShow');
$("#obj16954").trigger('SCEventShow');
$("#obj17101").trigger('SCEventShow');
$("#obj17189").trigger('SCEventShow');
$("#obj16466").trigger('SCEventShow');
$("#obj16378").trigger('SCEventShow');
$("#obj16462").trigger('SCEventShow');
$("#obj16460").trigger('SCEventShow');
$("#obj16488").trigger('SCEventShow');
$("#obj16717").trigger('SCEventShow');
$("#obj16697").trigger('SCEventShow');
$("#obj16724").trigger('SCEventShow');
$("#obj16726").trigger('SCEventShow');
$("#obj16768").trigger('SCEventShow');
$("#obj16744").trigger('SCEventShow');
$("#obj16742").trigger('SCEventShow');
$("#obj16808").trigger('SCEventShow');
$("#obj16784").trigger('SCEventShow');
$("#obj16813").trigger('SCEventShow');
$("#obj16849").trigger('SCEventShow');
$("#obj16825").trigger('SCEventShow');
$("#obj16823").trigger('SCEventShow');
$("#obj16782").trigger('SCEventShow');
$("#obj17187").trigger('SCEventShow');
$("#obj17386").trigger('SCEventShow');
$("#obj17363").trigger('SCEventShow');
$("#obj17434").trigger('SCEventShow');
$("#obj17436").trigger('SCEventShow');
	

});