// Set up context menu at install time.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

chrome.runtime.onInstalled.addListener(function() {
	var context = "all";
  	var title = "Paste LinkedIn Profile";
  	var parent = chrome.contextMenus.create({
  		"title": title, 
  		"contexts":[context],
    	"id": "context" + context
	});

	var child1 = chrome.contextMenus.create({
		"title": "Child 1", 
		"contexts": [context],
		"parentId": parent, 
		"onclick": genericOnClick});

});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  

  console.log("*** Inside onClickHandler");
  console.log(info);
  console.log(tab);
  console.log("info "+info);
  console.log("tab "+tab);

  chrome.tabs.executeScript(null, {file: "content.js"});


};