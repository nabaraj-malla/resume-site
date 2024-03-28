// smooth scrolling first approach
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// for (let i = 0; i < navMenuAnchorTags.length; i++) {
//     navMenuAnchorTags[i].addEventListener('click', function(event){
//         event.preventDefault();
//         var targetSectionId = navMenuAnchorTags[i].textContent.trim();
//         var targetSection = document.getElementById(targetSectionId);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <= 0) {
//                 clearInterval(interval);
//                 return;
//             }
//                 window.scrollBy(0, 50);
//         }, 20)
//     })
// }

// smooth Scrolling second approach
var interval;
var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
for (let i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionId = this.textContent.trim();
    var targetSection = document.getElementById(targetSectionId);
    interval = setInterval(scrollVertically, 20, targetSection);
    // interval = setInterval(function(){
    //     scrollVertically(targetSection);
    // }, 20)
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

// skill Bar
var progressBar = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone = false;

function initialiseBars() {
  for (let bar of progressBar) {
    bar.style.width = 0 + "%";
  }
}
initialiseBars();
function fillBars() {
  for (let bar of progressBar) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 5);
  }
}
// function checkScroll() {
//     var skillCoordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && skillCoordinates.top <= window.innerHeight) {
//         animationDone = true;
//         fillBars();
//         // console.log("skill section is visible");
//     } else if(skillCoordinates.top > window.innerHeight) {
//         animationDone = false;
//         initialiseBars();
//     }
// }

function checkScroll() {
  for (let bar of progressBar) {
    var skillCoordinates = bar.getBoundingClientRect();
    if (!animationDone && skillCoordinates.top <= window.innerHeight) {
      animationDone = true;
      fillBars();
      // console.log("skill section is visible");
    } else if (skillCoordinates.top > window.innerHeight) {
      animationDone = false;
      initialiseBars();
    }
  }
}

// scroll percentage
scroll_id = document.getElementById("scrollView");
let totalPageHeight = document.documentElement.scrollHeight;
let viewportHeight = window.innerHeight;
window.addEventListener("scroll", function () {
  let scrollPercentage = Math.round(
    (this.pageYOffset / (totalPageHeight - viewportHeight)) * 100
  );
  scroll_id.innerText = scrollPercentage + "% viewed";
});

// document.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
