// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;
// A function to use as callback

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    // ...check the URL of the active tab against our pattern and...
    console.log('caviar');
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, function(msg) {
    	console.log("result: ", msg);
    });

    // }
});
