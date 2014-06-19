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
var preference = localStorage["times_to_search"];
if (!preference) {
  preference = "10";
  localStorage["times_to_search"] = "10";
}

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

    /* get saved value for how many times to serach. */
    preference = localStorage["times_to_search"];
    
    /* if doesn't exit, set to 10, and store */
    if (!preference) {
      preference = "10";
      localStorage["times_to_search"] = "10";
    }

    /* convert to int */
    var timesRepeat = parseInt(preference);

    /* incase user entered negative value, set to < 1,
    no point in the extension if you never run it... */
    if(timesRepeat < 1)
      timesRepeat = 1;

    var a = 0; /* will store random int to search */
    var x = 0; /* counter */

    /*
      recursive function that searches a random int in bing,
      and then calls itself with a delay (set at top)
    */
    (function search(){

      /* check if counter is less than times to search*/
      if(x < timesRepeat){

        /* get random int from 1 too 100,
           update current tab with a bing search of the int
         */
        a = Math.floor((Math.random()*100)+1);
        chrome.tabs.update(tab.id,{'url': "http://www.bing.com/search?q=" + a});

        x = x + 1;               
        setTimeout(search, DELAY);  
      }
      
    })();
  });
});




