"# jslflashcards" 

Steps to get Heroku to host a Javascript project:

1) make a new project on Heroku. Give it a name.
2) Select Deployment Method > Github.
3) Go to github and create a new repository. To do this, follow the instructions it gives you in the terminal/Command Prompt. You will need to cd into a project folder to start this step.
    3b) reminder: 'dir' tells you what's in your current location. (ls in mac) 'cd'  is used to navigate to a folder.
4) Open your folder in VScode (or equivalent)
    5b) your folder right now will only contain a README.md
5) create three files with the following content:
    6b) Procfile (Note: Procfile has no extension.)
        web: node server.js
    6d) package.json
        {"engines":{"node":"12.x"}}
    6e) server.js
        any javascript you like; perhaps a console log to check that it's working.
6) Commit everything to git. Go back to Command Prompt and navigate to the folder.
7) type:
    8a) git add .
    8b) git commit -m "message about commitment"
    8c) git push
8) you can also use "git status" to check how things are going.
9) Connect Heroku to your new github repository ("Repo").
10) Now that we are connected to the github repo, enable "automatic update / automatic deploy" or whatever it's called in Heroku.
11) Go to server.js, and add the following code:
     const dotenv = require("dotenv");
     const express = require("express");
     dotenv.config()
     const app = express();
     app.use(express.static("public"));
     const port = process.env.PORT;
     app.listen(port,()=>console.log("listening"));
12) install express. To do this, go to Command Prompt, go to root directory, and type "npm install express"
13) create a file named ".env". Add the text: "PORT=3000"
    13a) Files that start with a "." are hidden, and won't appear in finder.
14) create a file named ".gitignore". Add the text:

.env
node_modules

15) Create a folder called public in the root directory. Any file in this folder will be publically visible via heroku hosting.
16) create a file in public called index.html, and add the code:
<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jslflashcards</title>
    <script src="client.js"></script>
</head>
<body>
    Hello World
</body>
</html> -->
17) create a file in public named "client.js". Write whatever code you want to run in it.
18) push everything up to github, using Command Prompt as usual:

git add .
git commit -m "mymessage"
git push

19) you should be able to open and view your app on Heroku.

//next step is to create an API to talk to the server.
//once we can do that, we can tell a function how to store data
//this will lead us to what database to use.



