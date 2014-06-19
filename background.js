/*
  script that implements searching funtionality
*/

var DELAY = 5000; /* delay inbetween searches, in milliseconds */


/*
  Set the default of times to search, when the person has loaded 
  the extension for the first time, to 10. Since its done
  before the onClicked event, the options page will show 10 in the
  text field
*/
var numRefresh = localStorage["times_to_refresh"];
var appendInt = localStorage["append_int"];
var inputURL = localStorage["input_url"];
//var DELAY = localStorage["delay"];

if (!numRefresh) {
  numRefresh = 10;
  localStorage["times_to_refresh"] = numRefresh;
}

if (!appendInt) {
  appendInt = 'true';
  localStorage["append_int"] = appendInt;
}

if (!inputURL) {
  inputURL = "http://www.bing.com/search?q=";
  localStorage["input_url"] = inputURL;
}

//console.log("yo");

/*
  What happens when the extension icon is clicked ...
*/
chrome.browserAction.onClicked.addListener(function(){  

  /*
   Get the current tab, tab.id is passed into tab.update so that 
   only the tab the user is at when he/she presses the button gets 
   updated. This allows user to move into a different tab and keep
   working, and also "exit" the extension by closing the tab.
  */
  chrome.tabs.getSelected(null, function(tab){

    numRefresh = localStorage["times_to_refresh"];
    appendInt = localStorage["append_int"];
    inputURL = localStorage["input_url"];

    if (!numRefresh) {
      numRefresh = 10;
      localStorage["times_to_refresh"] = numRefresh;
    }

    if (!appendInt) {
      appendInt = 'true';
      localStorage["append_int"] = appendInt;
    }

    if (!inputURL) {
      inputURL = "http://www.bing.com/search?q=";
      localStorage["input_url"] = inputURL;
    }

    if(numRefresh < 1) // have to refresh at least once
      numRefresh = 1;

    var a = 0; 
    var counter = 0; 

    /*
      recursive function that searches a random int in bing,
      and then calls itself with a delay (set at top)
    */
    (function search(){

      if(counter < numRefresh){

        if(appendInt === 'true') {
          a = Math.floor((Math.random()*100)+1);
          chrome.tabs.update(tab.id,{'url': inputURL + a});
        }

        else {chrome.tabs.update(tab.id,{'url': inputURL});}

        counter += 1;               
        setTimeout(search, DELAY);  
      }
      
    })();
  });
});




