// Set up context menu at install time.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

function onClickHandler(info, tab) {

  console.log("*** Inside onClickHandler");
  console.log(info);
  console.log(tab);
  console.log("info "+info);
  console.log("tab "+tab);

  chrome.tabs.executeScript(null, {file: "content.js"});

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log("TABS ARE:");
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, {action: info.menuItemId}, function(response) {});  
  });

  





};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
	var context = "all";
  var title = "Paste Profile";
  var linkedin = chrome.contextMenus.create({
  	"title": "LinkedIn", 
  	"contexts":[context],
    "id": "1"
	});

	var github = chrome.contextMenus.create({
		"title": "Github Username", 
		"contexts": [context],
		"id": "2"
  });

  var personal = chrome.contextMenus.create({
    "title": "Personal", 
    "contexts": [context],
    "id": "3"
  });

  var devpost = chrome.contextMenus.create({
    "title": "Github Profile", 
    "contexts": [context],
    "id": "4"
  });

});



// add click event


// chrome.contextMenus.onClicked.addListener(function(info,tab){
//   console.log("yo homies");

// });

// The onClicked callback function.
