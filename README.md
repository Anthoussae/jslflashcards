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



