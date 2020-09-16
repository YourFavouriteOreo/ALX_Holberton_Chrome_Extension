let skinSelect = document.getElementById("skinSelect")

// Setup default as last chosen skin
chrome.storage.sync.get('skin',function(data){
    skinSelect.value = data.skin
  })

// Write new choice to memory and change skin
skinSelect.onchange = function(e){
    chrome.storage.sync.set({skin: e.target.value}, function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'skinChange();'});
          });
      });
}