// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
	var context = "all";
  	var title = "Paste LinkedIn Profile";
  	var id = chrome.contextMenus.create({
  		"title": title, 
  		"contexts":[context],
    	"id": "context" + context
	});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  

  console.log("*** Inside onClickHandler");

  chrome.tabs.executeScript(null, {file: "content.js"});

};