$(document).ready(function() {
  var numRand = Math.floor(Math.random() * 7) + 1;
  console.log(numRand);
  $("#miceImg").attr("src", "./images/mice/mice" + numRand + ".png");
});
// var numRand = Math.floor(Math.random()*101);
//   document.getElementById("miceImg").src = "img/IMG_"+numRand+".jpg";

// The random formula in JS is:

// var random = Math.floor(Math.random() * (max - min + 1)) + min;
// so if you only had 5 images between 135 and 140 your script would look like:

// var random = Math.floor(Math.random() * (140 - 135 + 1)) + 135;
// If you wanted to change the image client-side, like a slideshow, just add a timer.

// <script language="javascript">
//   function setImg(){
//   // random number between 1 and 100
//   var numRand = Math.floor(Math.random()*101);
//   document.getElementById("imgRand").src = "img/IMG_"+numRand+".jpg";}

//   // call it the first time
//   setImg();

//   // set an interval to change it every 30 seconds
//   window.setInterval("setImg()",30000);
// </script>
