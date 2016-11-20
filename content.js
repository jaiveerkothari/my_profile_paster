//TODO: get these as input from options menu
//define profile texts and links
var github_username = "jaiveerkothari";
var github_link = "https://github.com/jaiveerkothari";
var linkedin = "https://www.linkedin.com/in/jaiveerkothari";
var personal_website = "http://jaiveerkothari.com/";

//debugging purposes
console.log("**** content script running");

//TODO: Be able to select from menu which profile to paste
var field = document.activeElement;
field.value = linkedin;
console.log("THIS IS CONTENT>JS");
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

	var github_username = "jaiveerkothari";
	var github_link = "https://github.com/jaiveerkothari";
	var linkedin = "https://www.linkedin.com/in/jaiveerkothari";
	var personal_website = "http://jaiveerkothari.com/";

  console.log("yo got some shit");
  if (msg.action == '1') {
    
    console.log("recieved msg");
    var field = document.activeElement;
    field.value = linkedin;

  }
  if (msg.action == '2') {
    
    console.log("recieved msg");
    var field = document.activeElement;
    field.value = github_username;

  }
  if (msg.action == '3') {
    
    console.log("recieved msg");
    var field = document.activeElement;
    field.value = personal_website;

  }
  if (msg.action == '4') {
    
    console.log("recieved msg");
    var field = document.activeElement;
    field.value = github_link;

  }


});

