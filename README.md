PageRefresh
===========================
Chrome extension that refreshes a page for as long as you want.

Updates! - v3.0
---------------------------
Options page (described below, in current state)! 
Using setTimeout() now, it seems setInterval is not ideal. 
 

Current State
---------------------------

1. Press the button. 
2. It loads a random bing search
3. It waits a predermined time (1), default at 5 secs
5. Repeats 2-3 (2) - default at 10!

Hint: If you close the tab it will stop. You can also navigae away from
the initial tab and it will proceed only in that tab.

(1) There is a variable in background.js, DELAY, that handles the delay.

(2) To edit the number of times it repeats, right click on the extension
icon, and select options, this is stored locally, so it will save! THE 
DEFAULT IS 10 TIMEs, so change that in options first.

Planned improvements
---------------------------

I have to figure out how remove the wait ___ seconds.
Instead, I'd like it to just wait for the page to load, and then
do another search, up to a predtermined number. This may actually 
not work. Will look into, but very small priority.

Additionally, it would be nice if I could track when its been pressed
and have an alert system every 24 hours. Can't make it completely automated
because then it would just overwrite my tab (or open a new one if 
thats what I set it to, at a time that might not be convenient), but 
could make an alert system.

Why?
---------------------------

Bing has a program in which you can get rewards for searching in bing.
Now, I still think Google is better than Bing, so that is my primary search
engine (especially since IE isn't even cross platform). So, while
I used to do use Bing for the rewards, I just got tired of doing that.

This year I have been messing with client side technologies before I dive into
server side, and have been making chrome extensions. I saw this as a way to
get free rewards and learn something about how Chrome handles some things
and practise JS. So I made this extension to automate the searching for me
so that all I would have to do is press a button a day and get $5 in Amazon
credit per month. Not a bad deal. The goal is basically to make it as easy
as possible, and practice good programming skills. I am getting paid to learn :)

How to Install
---------------------------

WILL NOT BE GIVING OUT A .CRX ... no one should be downloading random crx
files from the internet. Here is how to make your own:

1. Download the project (as a zip) or make your own and copy my code.
2. Activate the developer mode and load an unpackaged extension.**
3. Package the app as a .crx file. There is a big button, google if you
don't see how to do it :) ***

** Here is a guide: http://developer.chrome.com/extensions/getstarted.html

*** Google won't let you keep an unpackaged extension if you are using 
the Stable/Beta versions without giving you a warning every time you launch 
chrome. This gets rid of that. However, it doesn't let you edit the extension
and test it at the same time ... but Google is having trouble fixing the 
security problem with extinsions and feels secure about devs not jumping ship, 
so they are being a little bit of a**holes.

Chrome Webstore
----------------------------
In the coming future, I will upload it to the webstore, am still looking to 
improve features and just mess around with it for now. Also ....


===========================
The icon that is included is available on www.iconfinder.com with a MIT 
licence. I could not find any way to credit someone easily, so ... yea.