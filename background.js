/*
  What happens when the extension icon is clicked ...
*/
chrome.browserAction.onClicked.addListener(function() {
    var numRefresh = localStorage["numRefresh"];
    var appendInt = localStorage["append_int"];
    var inputURL = localStorage["input_url"];
    var DELAY = localStorage["delay"];
    var PLUS_DELAY = localStorage["plus_delay"];

    /*
     Get the current tab, tab.id is passed into tab.update so that 
     only the tab the user is at when he/she presses the button gets 
     updated. This allows user to move into a different tab and keep
     working, and also "exit" the extension by closing the tab.
    */
    chrome.tabs.getSelected(null, function(tab) {
        var counter = 0;

        (function search() {
            if (numRefresh == 0 || counter < numRefresh) {
                if (appendInt === 'true') {
                    var randomInt = Math.floor((Math.random() * 100) + 1);
                    chrome.tabs.update(tab.id, { 'url': inputURL + randomInt });
                } else {
                    chrome.tabs.update(tab.id, { 'url': inputURL });
                }

                counter += 1;

                var real_delay = (DELAY + Math.floor((Math.random() * PLUS_DELAY) * 1000));
                setTimeout(search, real_delay);
            }
        })();
    });
});