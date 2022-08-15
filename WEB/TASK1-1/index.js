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
  if (event.deltaY < 0) {
    scrollToNextElement('up')
  } else {
    scrollToNextElement('down')
  }
},{passive: false});
document.body.style.overflow = "hidden";

