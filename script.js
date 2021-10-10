// Basic setup and custimization
changeCSS('assets/stylesheets/delete.css')
aboutheader("Quickblog.js")
aboutme("Quckblog.js is a free javascript library that allows you to create a <i>quick blog</i> in minutes!")
blogname("Quickblog.js")
onclick="openTab('about')"




// DELETE ALL OF THIS DOWN VVVV
createpost("1.0 Official Release!","This is the first release of Quickblog.js. I hope you all like it. You can check the docs for information on how to install. We have moved all files to a github respitory. Hosting was too much of a hassle.","10/10/2021")
var docs = "Welcome to the quickblog.js docs! This page is dedicated to setting up your blog!" 

var docs1 = "<h1>Setup</h1>Goto the official <a href='https://github.com/brodyking/quickblog.js/releases'>GitHub Repo</a> download the newest release"

var docs2 = "<h1>Customization</h1>When you enter the script.js file you will see a already written script. You can delete everything past line 11. Then change the top part of the file to your information."

var docs3 = '<h1>Writing your first blog post.</h1>Go into your script.js file and type <code>createpost("","","")</code> Inside of the first pair of parenthesis, type the title of your post, in the second pair of perithesis, type the body, and in the third, type the date of the blog post. Refesh the page and see your blog post come to life! <b>You can only create a maximum of 50 blog posts.</b>'

var docs4 = '<h1>Creating a extra page.</h1>Like writing a post, type <code>createpage("","") Inside the first bracket, type the title, and in the second bracket, type the body. Refresh and see the page. <b>You can only make a maximum of one custom page.</b>'
createpage("docs",docs + docs1 + docs2 + docs3 + docs4)
