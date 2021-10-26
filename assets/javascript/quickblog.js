// Tab System
function closepopup() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}

function openTab(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

openTab("timeline");


// Functions
// Tab title
function tabtitle(text) {
  document.getElementById("tabtitle").innerHTML = text
}
//Blog Name
function blogname(text) {
  document.getElementById("blogname").innerHTML = text
  var blogname = text;
}
// About Header
function aboutheader(text) {
  document.getElementById("aboutheader").innerHTML = text
  document.getElementById("aboutheaderlong").innerHTML = text
}
// About Me
function aboutme(text) {
  document.getElementById("aboutme").innerHTML = text
  document.getElementById("aboutmelong").innerHTML = text
}
// Website Url
function websiteurl(text) {
  var url = text;
}
// Hide popup
function popup(text) {
  if (text === "false") {
    document.getElementById("popup").style.display = "none";
  }
}
// Watermark
function footer(text) {
  document.getElementById("watermark").innerHTML = text
}
// Creating a post
var postcount = 0;
// Create post
function createpost(title, body, date) {
  if (postcount < 51) {
    postcount += 1;
    document.getElementById("listing" + postcount).innerHTML = '<p class="item__urls"><a href="#" onclick="openTab(&quot;' + title + '&quot;);"><strong id="strong">' + title + '</strong></a> <span class="item__siteurl" id="url"></span></p><p class="item__meta"><span>' + date + '</span><a class="item__notes" href="#" onclick="alert(&quot;Publish Date: ' + date +' == Title: ' + title + ' == Author: Admin&quot;)">meta</a><a class="item__notes" href="#" onclick="alert(&quot;' + body + '&quot;)">read</a></p></li>';
    document.getElementById("listing" + postcount).style.display = "list-item";
    document.getElementById("post" + postcount).innerHTML = '<main id="' + title + '" class="main city" style="display: none; padding: 5px;"><p class="left">' + body + '<br /><a href="#" onclick="openTab(&quot;timeline&quot;);">return to timeline</a></p></main>'
  } else {
    prompt("You have reached the post limit!");
  }
}
// Create a page
var pagecount = 1
// Create page
function createpage(title, body) {
  if (pagecount = 1) {
    document.getElementById("page" + pagecount).innerHTML = '<p>' + body + '</p>'
    document.getElementById("page" + pagecount + "link").innerHTML = '[' + title + ']'
    document.getElementById("page" + pagecount + "link").style.display = "inline";
  } else {
    alert("You have reached the page limit!");
  }
}

// CSS Switcher
function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function select() {

  var zone = document.getElementById("zoneSelect");

  if (zone.value == "cmd") {
    changeCSS('assets/stylesheets/cmd.css')
  } else if (zone.value == "cyberpunk") {
    changeCSS('assets/stylesheets/cyberpunk.css')
  } else if (zone.value == "dark") {
    changeCSS('assets/stylesheets/dark.css')
  } else if (zone.value == "darkgreen") {
    changeCSS('assets/stylesheets/darkgreen.css')
  } else if (zone.value == "darkrootgreen") {
    changeCSS('assets/stylesheets/darkrootgreen.css')
  } else if (zone.value == "delete") {
    changeCSS('assets/stylesheets/delete.css')
  } else if (zone.value == "fauxx") {
    changeCSS('assets/stylesheets/fauxx.css')
  } else if (zone.value == "gurochan") {
    changeCSS('assets/stylesheets/gurochan.css')
  } else if (zone.value == "light") {
    changeCSS('assets/stylesheets/light.css')
  } else if (zone.value == "poison") {
    changeCSS('assets/stylesheets/poison.css')
  } else if (zone.value == "yotsuba") {
    changeCSS('assets/stylesheets/yotsuba.css')
  } else if (zone.value == "yotsubablue") {
    changeCSS('assets/stylesheets/yotsubablue.css')
  } else if (zone.value == "custom") {
    changeCSS('assets/stylesheets/custom.css')
  } 
}