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
field.value = github;


