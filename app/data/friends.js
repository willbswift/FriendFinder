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
        0,
        0,
        0
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

