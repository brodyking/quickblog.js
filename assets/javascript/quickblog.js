
// Tab System
function closepopup() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
  document.getElementById("shell").innerHTML += "Tab closed<br>"
}

function openTab(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
  document.getElementById("shell").innerHTML += "<i>" + cityName + "</i> was opened<br>"
}

openTab("timeline");

// Functions
// Tab title
function tabtitle(text) {
  document.getElementById("tabtitle").innerHTML = text
  document.getElementById("shell").innerHTML += "set tabtitle to <i>" + text + "</i><br>"
}
//Blog Name
function blogname(text) {
  document.getElementById("blogname").innerHTML = text
  var blogname = text;
  document.getElementById("shell").innerHTML += "set blogname to <i>" + text + "</i><br>"

}
// About Header
function aboutheader(text) {
  document.getElementById("aboutheader").innerHTML = text
  document.getElementById("shell").innerHTML += "set aboutheader to <i>" + text + "</i><br>"
}
// About Me
function aboutme(text) {
  document.getElementById("aboutme").innerHTML = text
  document.getElementById("shell").innerHTML += "set aboutme to <i>" + text + "</i><br>"
}
// Website Url
function websiteurl(text) {
  var url = text;
  document.getElementById("shell").innerHTML += "set websiteurl to <i>" + text + "</i><br>"
}
// Hide popup
function popup(text) {
  if (text === "false") {
    document.getElementById("popup").style.display = "none";
    document.getElementById("shell").innerHTML += "set popup to <i>" + text + "</i><br>"
  }
}
// Watermark
function footer(text) {
  document.getElementById("watermark").innerHTML = text
  document.getElementById("shell").innerHTML += "set footer to <i>" + text + "</i><br>"
}
// Dissallow theme changing
function themeswapper(text) {
  if (text == "false") {
    document.getElementById("zoneSelect").style.display = "none"
    document.getElementById("shell").innerHTML += "set themeswapper to <i>" + text + "</i><br>"
  }
}

// Creating a post
var postcount = 0;
// Create post
function createpost(title, body, date, author) {
  if (postcount < 51) {
    postcount += 1;
    document.getElementById("listing" + postcount).innerHTML += '<p class="item__urls"><a href="#" onclick="openTab(&quot;' + title + '&quot;);"><strong id="strong">' + title + '</strong></a> <span class="item__siteurl" id="url"></span></p><p class="item__meta"><span>' + date + '</span><a class="item__notes" href="#" onclick="alert(&quot;Written by ' + author + '&quot;)">author</a><a class="item__notes" href="#" onclick="alert(&quot;' + body + '&quot;)">read</a></p></li>';
    document.getElementById("listing" + postcount).style.display = "list-item";
    document.getElementById("post" + postcount).innerHTML = '<main id="' + title + '" class="main city" style="display: none; padding: 5px;"><p class="left">' + body + '<br><br><a href="#" onclick="openTab(&quot;timeline&quot;);">return to timeline</a> &middot; Date: ' + date + ' &middot; Author: ' + author + '</p></main>'
    document.getElementById("shell").innerHTML += "created a new post called <i>" + title + "</i><br>"
  } else {
    prompt("You have reached the post limit!");
    document.getElementById("shell").innerHTML += "<span style='color=red'>Error! You have reached the max post amount!</span><br>"
  }
  
}
// Create a page
var pagecount = 0
// Create page
function createpage(title, body) {
    pagecount += 1;
    if (pagecount == 2) {
      document.getElementById("pageslink").style.display = "inline";
    }
    document.getElementById("page" + pagecount).innerHTML = '<p>' + body + '</p>'
    if (pagecount == 1) {
          document.getElementById("page" + pagecount + "link").innerHTML = '&nbsp;[' + title + ']&nbsp;'
    } else {
      document.getElementById("page" + pagecount + "link").innerHTML = pagecount + '. ' + title + ''
    }
    document.getElementById("page" + pagecount + "link").style.display = "inline";
    console.log(pagecount)
    document.getElementById("shell").innerHTML += "created a new page called <i>" + title + "</i><br>"
}

// CSS Switcher
function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
  document.getElementById("shell").innerHTML += "set changeCSS to <i>" + cssFile + "</i><br>"
  
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
  document.getElementById("shell").innerHTML += "set theme to <i>" + zone.value + "</i><br>"
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 17 && e.target == document.body) {
    openTab('switchboard');
  }
});


function generatePost() {
  var title = prompt("What should the post be called?");
  var body = prompt("What should the post body be?");
  var date = prompt("What should the publish date be?");
  var author = prompt("What should the post author be?");
  alert("Copy paste the following script to your package.js file to have the post shown.");
  document.getElementById("alertxt").innerHTML = "<code>createpost('" + title + "','" + body + "','" + date + "','" + author + "');</code>"
  document.getElementById("shell").innerHTML += "post was generated using switchboard"
  openTab('alertpage');
  document.getElementById("alertxt").execCommand('copy');
}

function generatePage() {
  var title = prompt("What should the page be called?");
  var body = prompt("What should the page body be?");
  alert("Copy paste the following script to your package.js file to have the post shown.");
  document.getElementById("alertxt").innerHTML = "<code>createpage('" + title + "','" + body + "');</code>"
  document.getElementById("shell").innerHTML += "page was generated using switchboard"
  openTab('alertpage');
  document.getElementById("alertxt").execCommand('copy');
}