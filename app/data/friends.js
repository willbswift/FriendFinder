// ===============================================================================
// DATA
// Below data will hold all of the info on each user.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

let friendArray = [
  {
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    name:"Player1",
    photo:"https://cdn.vox-cdn.com/thumbor/-SxD0AI7a96gpDIvS3mdOAMOmZY=/0x0:868x718/1200x800/filters:focal(365x124:503x262)/cdn.vox-cdn.com/uploads/chorus_image/image/58930649/Screen_Shot_2018_03_06_at_5.53.45_PM.0.png",
    scores:[
      3, 
      2, 
      6, 
      4, 
      5, 
      1, 
      2, 
      5, 
      4, 
      1]
  },
  {
    name:"BigFan",
    photo:"https://images.amcnetworks.com/amc.com/wp-content/uploads/mt-legacy/scifi-scanner/Ackerman_200x250.jpg",
    scores:[
      5, 
      5, 
      5, 
      5, 
      5, 
      5, 
      5, 
      5, 
      5, 
      5]
  },
  {
    name:"Brian Age 7",
    photo:"https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/26478_103556733020984_6413321_n.jpg?_nc_cat=109&_nc_ht=scontent.faus1-1.fna&oh=d1a3cad2021e87a0b624be23ab59670b&oe=5C793290",
    scores:[
      1, 
      5, 
      5, 
      5, 
      5, 
      5, 
      1, 
      5, 
      5, 
      1]
  }
];

  // Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;

console.log(friendArray);
  //set up variables 
let testFriend = [];
let newFriend = friendArray[friendArray.length-1];



let l = friendArray[0].scores.length;

//friendArray = JSON.parse(friendArray);
//friendArray = JSON.stringify(friendArray, null, 4)

console.log(newFriend);


  // Convert new user's results into a simple array of numbers.
let currentFriendScores = newFriend.scores;
let totDiff = [];

for (let j = 0; j < l; j++) {
    // Convert each user's results into a simple array of numbers.
  testFriendScores = friendArray[j].scores;
  console.log(testFriendScores);

  //   // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
   for(let i = 0; i <= l -1; i++) {
    
      // * Remember to use the absolute value of the differences. 
    totDiff.push( Math.abs(currentFriendScores[i] - testFriendScores[i]));
    //console.log(totDiff);
    let sum = totDiff.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }
    
    //console.log(sum);
    let allScores = [];
    allScores.push (sum)

    let max = Infinity;
    let maxIndex;
      // * The closest match will be the user with the least amount of difference.
    for (let k = 0; allScores.length > k; k++) {
        if (allScores[k] < max) {
            max = allScores[k];
            maxIndex = k;
        }
    }
  }
};

console.log(max);
console.log(maxIndex);
let match = friendArray[maxIndex];
console.log(match.name);

  // export the result. This makes it accessible to other files using require.
module.exports = match;

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// * The modal should display both the name and picture of the closest match.

