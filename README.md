# FriendFinder

## Connecting everything together
I installed the npm packages: express and path.
I copied the code from the demo version of the app to use as the base for my Survey and Homepage. (This is so I can focus on the server portion first, then I can go back and fine tune the Survey and Homepage later.)
I copied over the route code from the final Star Wars app into my two routes.js to use them as boilerplates.
Then I used the Hot Restaurant "done" file to figure out how to get everything to talk to one another, especially because Hot Restaurant was like the friend app requirements in which the routes were saved in different files whereas Star Wars had the routes in the initial js file. 

I updated my ROUTER portion of my app.js so that it uses my two routes.js files.
In my apiRoutes.js, I linked the routes to the data filled friends.js. I did not work on the compatibility logic initially. Instead, I focused on pushing the data retrieved from the survey to friends.js file. 

In my htmlRoutes.js, I added the path package dependencies to get the correct file path for the HTML. I linked the routes to the HTML files.

I then ran the app.js to see if everything worked. It connects! / takes me to the homepage index HTML, the button takes me to /survey and that pulls the correct survey HTML file. If I type in gibberish like /as;;iowe;nerc it defaults to the homepage like it set it to. 

I filled out the survey and submitted it and it works. It pops up with a modal, except because I did not work on the compatibility logic. It simply returned what I had entered because to test I had set to res.json(req.body).

## Compatibility logic
I modified javascript in the survey.html to turn all the scores into integers.
At first I thought I needed to get the sum of the array of the answers. I used the reduce method found here https://www.w3schools.com/jsref/jsref_reduce.asp but that doesn't make sense because I have to compare EACH answer to each other. I have to compare each of the new user's scores to each of the scores in EACH of the friends already in the friends array. 

So, I created a loop to run through all the friends in the friends javascript, and in this loop, I added another loop to run through each of the scores for each friend. Each score was compared the the score of the new user input. This would result in individual answer differences. Then I totaled up the individual differences for a total difference between potential friends. 
To select the friend with the least difference I created a variable called scoreCurrentLeastDiff. I set it at 40 because that's the max difference. 
Inside the loop that runs through each friend, I set an if function. If the total difference for that friend was less than the current lowest score, that score would become the new lowest and that friend became the best match. 

## Clean up and customize
Since I borrowed all code, I switched some stuff up.
I removed some errors from the original code - image links that no longer worked. 
I populated the friends.js with a few characters. Set the max width of the image so it doesn't expand beyond the modal.
I reset the fields after the survey was entered. I did so by selecting multiple id's (the name and photo) and setting them back to "". For the chosen answers, I selected multiple id's then selected the span tag underneath them and changed them back to the original "Select an Option".
I didn't like that it had a facebook icon so I took it off. 
Updated to my github page on the index page.

If I had more time, I would not use the chosen drop down and instead do radio buttons -- probably the ones from bootstrap. 
I'd change the color theme, replace the icon on the survey, change the questions to something else. 
