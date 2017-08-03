var intervalID = setInterval(function () {
var message = document.createEvent("TextEvent");  
message.initTextEvent ("textInput", true, true, window, "I think of you every second", 0, "en-US");
document.getElementsByClassName("input-container")[0].focus();	// Focus on message box
document.getElementsByClassName("input")[1].dispatchEvent(message); // Type message
document.getElementsByClassName("icon icon-send compose-btn-send")[0].on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
    }
}); // Click send
}, 1000); 