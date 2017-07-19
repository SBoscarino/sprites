
//These are for morrigan.
let x = 0;
let y = 0;
let animation = document.querySelector(".animation");
let stopButton = document.querySelector(".stop");
let restartButton = document.querySelector(".restart");
let startButton = document.querySelector(".start");

let position = [
  {x: -0, y: -520},
  {x: -90, y: -520},
  {x: -180, y: -520},
  {x: -260, y: -520},
  {x: -350, y: -520},
  {x: -430, y: -520},
  {x: -520, y: -520},
  {x: -620, y: -520},
  {x: -710, y: -520},
  {x: -790, y: -520},
  {x: -870, y: -520},
  {x: -950, y: -520},
  {x: -1040, y: -520},
  {x: -1130, y: -520},
  {x: -1230, y: -520},
  {x: -1240, y: -520},
  {x: -0, y: -520},
  {x: -0, y: -520}
];

let loc = 0;

//once clicked, will run once with no animation.

startButton.addEventListener('click', function(){
let intervalID = setInterval(function(){
//    let animation.style.backgroundPositionX = x + 'px';
      animation.style.backgroundPositionX = position[loc].x + 'px';
      animation.style.backgroundPositionY = position[loc].y + 'px';
      loc += 1; //this works - goes up by one each interval.
      if (loc >= position.length) {
        clearInterval(intervalID);
        loc = 0;
      };
    }, 280);
});





/////
//For Zero's Animation
/////

let zero = document.querySelector(".zero");
let foreground = document.querySelector(".grass");
let background = document.querySelector(".back-image");

let zeroLocomotion = [
  {x: -0, y: -160},
  {x: -50, y: -160},
  {x: -95, y: -160},
  {x: -150, y: -160},
  {x: -210, y: -160},
  {x: -259, y: -160},
  {x: -320, y: -160},
];

let loc2 = 0;
let bgCounter = 0;
let fgCounter = 0;
 //wanted this to begin on page load. Had to set the event listener to window to do that. Divs do not listen for loads.
window.addEventListener('load', function(){
  let zeroInterval = setInterval(function() {
    zero.style.backgroundPositionX = zeroLocomotion[loc2].x + 'px';
    zero.style.backgroundPositionY = zeroLocomotion[loc2].y + 'px';
    loc2 += 2;

    background.style.backgroundPositionX = bgCounter + 'px';
    bgCounter -= 4

    foreground.style.backgroundPositionX = fgCounter + 'px';
    fgCounter += 10

    if (loc2 >= zeroLocomotion.length) {
      loc2 = 0;
    }
  }, 500);

});
