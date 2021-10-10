// Basic setup and custimization
changeCSS('assets/stylesheets/poison.css')
aboutheader("Quickblog.js")
aboutme("Quckblog.js is a free javascript library that allows you to create a <i>quick blog</i> in minutes!")
blogname("Quickblog.js")
onclick="openTab('about')"
// posts
createpost("1.0 Offical Release!","This is the first release of Quickblog.js. I hope you all like it. You can check the docs for information on how to install. ","10/10/2021")



// Docs

var docs = "Welcome to the quickblog.js docs! This page is dedicated to setting up your blog!" 

var docs1 = "<h1>Setup</h1>Copy and paste the contents of <a href='index.md'>this file</a> and paste it into your index."
var docs2 = "Then download the <a href='assets.zip'>assets.zip</a> file, extract it, and put it in the main directory. "
var docs3 = "It should look like this:<br><br><img src='https://i.ibb.co/gmQG1FX/image.png'><br><br>"
var docs4 = "Next, create a new file called <code>script.js</code> This file is where you are going to write all of the contents of your website."

var docs5 = "<h1>Customization</h1>You are going to want to change aspects of your website. Copy and paste this <a href='script.md'>this file</a> into your script.js file. "
var docs6  = "Change each function to the desired text. Now you can start writing blog posts!"

var docs7 = '<h1>Writing your first blog post.</h1>Go into your script.js file and type <code>createpost("","","")</code> Inside of the first pair of perithesis, type the title of your post, in the second pair of perithesis, type the body, and in the third, type the date of the blog post. Refesh the page and see your blog post come to life! <b>You can only create a maximum of 50 blog posts.</b>'

var docs8 = '<h1>Creating a extra page.</h1>Like writing a post, type <code>createpage("","") Inside the first bracket, type the title, and in the second braket, type the body. Refresh and see the page. <b>You can only make a maximum of one custom page.</b>'
createpage("docs",docs + docs1 + docs2 + docs3 + docs4 + docs5 + docs6 + docs7 + docs8)
