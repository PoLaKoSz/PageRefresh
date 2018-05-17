var REFRESH_LOOP;

/*
  What happens when the extension icon is clicked ...
*/
chrome.browserAction.onClicked.addListener(function() {
    var refreshCount = parseInt(localStorage["numRefresh"]);
    var isAppendInt = localStorage["append_int"];
    var appendIntMin = parseInt(localStorage["append_int_min"]);
    var appendIntMax = parseInt(localStorage["append_int_max"]);
    var inputUrl = localStorage["input_url"];
    var fixDelay = parseInt(localStorage["delay"]);
    var randomDelay = parseInt(localStorage["plus_delay"]);

    chrome.browserAction.setBadgeBackgroundColor({ color: "black" });

    /*
     Get the current tab, tab.id is passed into tab.update so that 
     only the tab the user is at when he/she presses the button gets 
     updated. This allows user to move into a different tab and keep
     working, and also "exit" the extension by closing the tab.
    */
    chrome.tabs.getSelected(null, function(tab) {
        var small_delay = getRandomBetween(randomDelay * (-1), randomDelay);
        var fullDelayInMs = (fixDelay + small_delay) * 1000;

        refreshPage(tab, refreshCount, isAppendInt, appendIntMin, appendIntMax, inputUrl, fullDelayInMs);

        REFRESH_LOOP = setInterval(function() {
            refreshPage(tab, refreshCount, isAppendInt, appendIntMin, appendIntMax, inputUrl, fullDelayInMs);
        }, fullDelayInMs);
    });
});

/**
 * Refresh the current page and update the Extension icon's badge
 * @param {*} tab Tab
 * @param {*} refreshCount int
 * @param {*} isAppendInt bool
 * @param {*} appendIntMin int
 * @param {*} appendIntMax int
 * @param {*} inputUrl string
 * @param {*} fullDelayInMs int
 */
function refreshPage(tab, refreshCount, isAppendInt, appendIntMin, appendIntMax, inputUrl, fullDelayInMs) {
    var counter = 0;
    var startTime = Date.now();

    if (refreshCount == 0 || counter < refreshCount) {
        if (isAppendInt === 'true') {
            var randomInt = getRandomBetween(appendIntMin, appendIntMax);
            chrome.tabs.update(tab.id, { 'url': inputUrl + "" + randomInt }, catchTabClosedException);
        } else {
            chrome.tabs.update(tab.id, { 'url': inputUrl }, catchTabClosedException);
        }

        counter += 1;

        setTimeout(function() {
            updateExtensionBadge(startTime, fullDelayInMs, tab);
        }, 1000);
    }
}

/**
 * Generate a random integer between minimumInt (included) and maximumInt (included)
 * 
 * @param {*} minimumInt int
 * @param {*} maximumInt int
 */
function getRandomBetween(minimumInt, maximumInt) {
    return Math.floor((Math.random() * (maximumInt - minimumInt + 1)) + minimumInt);
}

/**
 * When an Exception occurs this method will be called
 */
function catchTabClosedException() {
    if (chrome.runtime.lastError) {
        clearInterval(REFRESH_LOOP);
    }
}

/**
 * Update the Extension icon's small badge to show when will be the next page refresh
 * 
 * @param {*} startTime int
 * @param {*} fullDelayInMs int
 * @param {*} tab Tab
 */
function updateExtensionBadge(startTime, fullDelayInMs, tab) {
    chrome.tabs.get(tab.id, function() {
        stopBadgeUpdateIfTabDestroyed(startTime, fullDelayInMs, tab);
    });
}

/**
 * This method help to stop the badge update if the tab is not exists anymore
 * @param {*} startTime int
 * @param {*} fullDelayInMs int
 * @param {*} tab Tab
 */
function stopBadgeUpdateIfTabDestroyed(startTime, fullDelayInMs, tab) {
    if (chrome.runtime.lastError) {
        chrome.browserAction.setBadgeText({ text: "0" });
    } else {
        var currentTime = Date.now();
        var elapsedMs = currentTime - startTime;

        var remainingSec = Math.floor((fullDelayInMs - elapsedMs) / 1000);

        chrome.browserAction.setBadgeText({
            text: "" + remainingSec
        });

        if (remainingSec < 0) {
            chrome.browserAction.setBadgeText({ text: "0" });
        } else {
            setTimeout(function() {
                updateExtensionBadge(startTime, fullDelayInMs, tab);
            }, 1000);
        }
    }
}