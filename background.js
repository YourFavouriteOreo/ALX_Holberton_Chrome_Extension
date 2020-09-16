chrome.runtime.onInstalled.addListener(function (){
  // Setting up initial values
    chrome.storage.sync.set({skin:'light'})
    chrome.storage.sync.set({firstDark:false})
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'alx-intranet.hbtn.io'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
})