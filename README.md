# WhatsApp Loop Trick
### Now send infinite message in one go!

## What does project do?

There is single file in the project - main.js.

It sets a timer, which creates an event and calls it every second. It also sends the message - "I think of you every second".

## How to use this script?
### Step 1
Using WhatsApp in your web browser couldn't be easier. On your computer launch the Chrome browser (other browsers are not supported) and head to https://web.whatsapp.com.

### Step 2
Launch WhatsApp on your phone and access the settings menu (click the three dots at the top right to access more options on an Android device), then choose WhatsApp Web. 

### Step 3
A QR reader will then open on your phone; point this at your PC screen to read the code and be automatically logged into WhatsApp on the web.

### Step 4
An interface will pop-up and it would be familiar to WhatsApp phone users. To start a new conversation click on existing chat.

### Step 5
Now the real fun begins, after clicking on desired user's chat and press **f12** on your keyboard. Chrome Dev Tools will open in splitted window and after that click on **Console** tab. (*as shown in the picture*)

<img src="https://preview.ibb.co/b1EFQm/imageedit_7_9743363592.jpg" alt="Google Chrome Dev Tool" border="0">

### Step 6
Copy this script and paste in the area of **Console**
```javascript
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
```
*Note: Don't forget to replace the string ("I think of you every second") in the 3rd line with your desired message*

And hit **enter** 
Waohh!! Now your message will be sent infinitely with the interval of 1 second untill you refresh the page.

# How do I contribute?
Once you have your local version of code you can:
- Update code - fix bugs
- Push to repositoy
- Create Pull Request
- Contributor will accect (if applicabele) your changes

- Reference - http://rogerdudler.github.io/git-guide/


# License
### MIT License

Copyright (c) 2017 Rohit Swami - https://www.github.com/rowhitswami/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
