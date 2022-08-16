var elements = document.querySelectorAll('[id^="snap"]');
var lock = false;
var currentElement = 0;

function scrollToNextElement(direction) {
  if (lock) return;
  lock = true;
  if (direction === 'up') {
    currentElement--;
    if (currentElement < 0) {currentElement++;lock = false;return} 
  } else if (direction === 'down') {
    currentElement++;
    if (currentElement >= elements.length) {currentElement--;lock = false;return} 
  }   
    elements[currentElement].scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
    lock = false;
    console.log("locked");
  }, 300);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  currentElement = 0;
}

document.body.addEventListener("wheel", function (event) {
  event.preventDefault();
  event.deltaY < 0 ? scrollToNextElement('up') : scrollToNextElement('down');
},{passive: false});

// // phone
// var ts;
// document.body.addEventListener("touchstart", function (event){ 
//   event.preventDefault();
//   ts = event.touches[0].clientY;
// });

// document.body.addEventListener("touchmove", function (event) {
//   event.preventDefault();
//   tm = event.touches[0].clientY;
//   ts > tm ? scrollToNextElement("down") : scrollToNextElement("up");
// },{passive: false});


document.body.style.overflow = "hidden";
