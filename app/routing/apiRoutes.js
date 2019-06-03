// link routes to data sources
var friendsData = require("../data/friends");

module.exports = function (app) {
  // get all possible friends found in the friends.js
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // Handles incoming survey results, and handles the compatibility logic.
  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    // the array holding all the scores
    var newFriendScores = newFriend.scores

    // a variable for the friend that matches best
    var matchMade = null;

    // a variable for the score with the least difference (10 questions at a scale of 1-5 means a difference of 4 * 10 = 40 so we'll just initially set it at 40)
    var scoreCurrentLeastDiff = 40;

    // create a for loop that runs through each friend (f) in the friendsData
    for (var f = 0; f < friendsData.length; f++) {
      // create a variable to hold the total difference for each friend
      var totalDifference = 0;
      // create a for loop for each SCORE (s) for each friend
      for (var s = 0; s < friendsData[f].scores.length; s++) {
        // https://www.w3schools.com/jsref/jsref_abs.asp absolute value of a number
        var individualAnswerDifferences = Math.abs(newFriendScores[s] - friendsData[f].scores[s]);
        // add up the individual differences for a total difference per friend (f)
        totalDifference += individualAnswerDifferences;
      }
      // select the friend that has the least difference
      // if the friend's total difference is less different that the max of 40 we'll make it the new best score, and the loop will replace the best score each 
      if (totalDifference < scoreCurrentLeastDiff) {
        scoreCurrentLeastDiff = totalDifference;
        matchMade = friendsData[f];
      }
    }

    // after a match has been made we can add the new entry to the friendsData.js 
    friendsData.push(newFriend);

    // show this in the modal
    res.json(matchMade);
  });
};