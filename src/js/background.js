/*
  What happens when the extension icon is clicked ...
*/
chrome.browserAction.onClicked.addListener(function() {
    var REFRESH_COUNT = parseInt(localStorage["numRefresh"]);
    var IS_APPEND_INT = localStorage["append_int"];
    var APPEND_INT_MIN = parseInt(localStorage["append_int_min"]);
    var APPEND_INT_MAX = parseInt(localStorage["append_int_max"]);
    var INPUT_URL = localStorage["input_url"];
    var DELAY = parseInt(localStorage["delay"]);
    var PLUS_DELAY = parseInt(localStorage["plus_delay"]);

    /*
     Get the current tab, tab.id is passed into tab.update so that 
     only the tab the user is at when he/she presses the button gets 
     updated. This allows user to move into a different tab and keep
     working, and also "exit" the extension by closing the tab.
    */
    chrome.tabs.getSelected(null, function(tab) {
        var counter = 0;

        (function search() {
            if (REFRESH_COUNT == 0 || counter < REFRESH_COUNT) {
                if (IS_APPEND_INT === 'true') {
                    var randomInt = Math.floor((Math.random() * APPEND_INT_MAX) + APPEND_INT_MIN);
                    chrome.tabs.update(tab.id, { 'url': INPUT_URL + randomInt });
                } else {
                    chrome.tabs.update(tab.id, { 'url': INPUT_URL });
                }

                counter += 1;

                var small_delay = Math.floor(Math.random() * 10) - PLUS_DELAY;
                var real_delay = (DELAY + small_delay) * 1000;

                setTimeout(search, real_delay);
            }
        })();
    });
});