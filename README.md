# PageRefresh

*This project is a fork which originally made by [Dilraj Singh](https://github.com/raj-al-ghul) (the project is deleted).*

It meant to be as simple as could be but helpful if you just need to refresh one tab at certain time frame. [Jump when this Extension should be helpful for You!](#custom-settings)

**It's supports only one browser tab!**

## System requirements

- Chromium based web browsers
  - works on UC Browser 7.0.185.1002
  - Chrome also should run it
- If you use Firefox, Edge or something else I recommend to download and give it a shot maybe it will work on it too (if not, PullRequests are welcome :smile:)

## How to install

- First you need to download the source code of this repository
- Place the downloaded folder somewhere "safe" where you won't delete. I recommend this folder depend on your browser:
  - UC Browser `C:\Users\<Computer UserName>\AppData\Local\UCBrowser\User Data_i18n\Default\Extensions\`
  - Google Chrome`C:\Users\<Computer UserName>\AppData\Local\Google\Chrome\User Data\Default\Extensions\`
- Load Extension to the browser
  - UC Browser
    - open this url `ucbrowser://extensions/`
    - check `Developer mode` checkbox on the top of the screen
    - click `Load unpacked extension...` button
    - select the unzipped repository's folder (which contains the `src` folder)
  - Google Chrome
    - open this url `chrome://extensions/`
    - toggle `Developer mode` on the top right of the screen
    - click `Load unpacked` button
    - select the unzipped repository's folder (which contains the `src` folder)

## Custom settings

- Right click on the Extension icon
- click `Options`
- now You will see some empty input fields
  - _URL to refresh_ : this page will be opened by the Extension and refreshed
  - _Refresh count_ : how many times the given webpage should refresh (`0` means `infinitely`)
  - _Delay between refreshes_ : if you type `60` it will refresh the page every `60 seconds` ([not completly true](https://stackoverflow.com/a/21097655/7306734))
    - _+/- range added to the fix delay_ : if you type `5` when the script calculate the next refresh time it will generate a **random** int between `-5` and `5` and will add to the `60` seconds
  - _Append random integer to URL_ : 
    - _Minimum integer_ : If you check the `Append random integer to URL` than greater or equal integer added to the end of the URL (new for every refresh)
    - _Maximum integer_ : If you check the `Append random integer to URL` than less or equal integer added to the end of the URL (new for every refresh)
  - _Save_ : save modified settings

## Known bugs

- If You click the Extension icon to start the refreshing and later click the extension icon again while the same browser tab is open you will inicialize a second countdown on the same tab

## Extension icon

The icon included is downloaded from [iconfinder.com](https://www.iconfinder.com), is made by [PixelKit](https://www.iconfinder.com/PixelKit) and liscenced under the [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/).