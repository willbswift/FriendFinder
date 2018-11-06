// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

let friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests.
    // req.body is available since we're using the body-parser middleware
    //console.log("api req" + req)
    //console.log("api body" + res)

    friends.push(req.body);

    //console.log(friends);
    //set up variables 
    let testFriend = [];
    let friendLength = friends.length;
    let newFriend = friends[friendLength - 1];
    let scoreLength = friends[0].scores.length;
    let allScores = [];
    let winner;

    //friendArray = JSON.parse(friendArray);
    //friendArray = JSON.stringify(friendArray, null, 4)

    //console.log(newFriend);

    // Convert new user's results into a simple array of numbers.
    let currentFriendScores = newFriend.scores;
    let totDiff = [];

    console.log("New Friend " + newFriend.scores);

    for (let j = 0; j <= friendLength - 2; j++) {
      // Convert each user's results into a simple array of numbers.
      testFriendScores = friends[j].scores;
      console.log("Old Friends " + testFriendScores);

      let totDiff = 0;

      //console.log("scorelen " + scoreLength);
      // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
      for (let i = 0; i <= scoreLength - 1; i++) {

        // * Remember to use the absolute value of the differences. 
        diff = Math.abs(parseInt(currentFriendScores[i]) - parseInt(testFriendScores[i]));
        totDiff = totDiff + diff;

      } // end iterate scores
      
      allScores.push(totDiff);

    } // end iterate friends

    //console.log("allscores are " + allScores);

    // find smallest allScores member, output index of that thing, because that index is the new best friend

      // option 1 - array.prototype methods (google "array.prototype MDN").  allScores.reduce() => return index of new best fried
    let allScoresInteger = allScores.map((x, k) => parseInt(x));
      console.log("all Ingeter scores");
      console.log(allScoresInteger);
    
    let lowIndex = allScoresInteger.reduce((winner, item, index)=>{
      if (item < winner.item){
        winner = { item, index };
      }
      return winner
    }, {item: Infinity, index: null}).index 

    console.log("this is winner index: " + lowIndex);
    let match = friends[lowIndex];
    console.log("Your best match is " + match.name);
    res.send(match)

    // option 2:  someKindaFunction(allScores)
    // var index = 0;
    // var value = temp[0];
    // for (var i = 1; i < temp.length; i++) {
    //   if (temp[i] < value) {
    //     value = temp[i];
    //     index = i;
    //   }
    // }

  })





  // 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
  // * The modal should display both the name and picture of the closest match.




}
