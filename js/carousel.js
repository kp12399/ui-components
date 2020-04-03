var currentSec = 1;

function getPos() {

  var newCurrentSec = -1;
  for (var i = 1; i <= 7; i++) {
    var rect=document.querySelector(".sec" + i).getBoundingClientRect();
    console.log(i + " : " + rect.top);

    if (rect.top <= 730 && rect.top >= 50) {
      newCurrentSec = i;
      break;
    }
  }
  if (currentSec != newCurrentSec) {
    $("#nav-" + currentSec).toggleClass("nav-selected");
    currentSec = newCurrentSec;
    $("#nav-" + currentSec).toggleClass("nav-selected");
    console.log("section changed");
  }
  // 730 up is neg, down is pos
}

window.addEventListener('load', getPos)
window.addEventListener('scroll', getPos)
window.addEventListener('resize', getPos)


  
  