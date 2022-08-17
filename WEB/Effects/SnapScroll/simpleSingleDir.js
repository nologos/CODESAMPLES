document.body.addEventListener("wheel", (e) => scrollToNextElement(e),{ passive: false });
document.body.style.overflow = "hidden";
var elements = document.getElementsByClassName("snap");
var lock = false;
var nextElement = 0;
function scrollToNextElement(e) {
  e.preventDefault();
  if (lock) return;
  lock = true;
  nextElement++;
  if (nextElement >= elements.length) {
    nextElement = 0;
  }
  elements[nextElement].scrollIntoView({behavior: "smooth"});
  setTimeout(() => {
    lock = false;
  }, 300);
}