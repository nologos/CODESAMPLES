function scrollToNextElement(e) {
  if (!lock) {
    if (((lock = !0), "up" === e)) {
      if ((currentElement--, currentElement < 0)) return currentElement++, void (lock = !1);
    } else if ("down" === e && (currentElement++, currentElement >= elements.length)) return currentElement--, void (lock = !1);
    elements[currentElement].scrollIntoView({ behavior: "smooth" }),
      setTimeout(() => {
        (lock = !1), console.log("locked");
      }, 300);
  }
}
var elements = document.getElementsByClassName("snap"),
  lock = !1,
  currentElement = 0;
document.body.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault(), e.deltaY < 0 ? scrollToNextElement("up") : scrollToNextElement("down");
  },
  { passive: !1 }
),
  (document.body.style.overflow = "hidden");
