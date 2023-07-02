// This code will make the navigation bar stick to the top of the screen when the user scrolls down.
window.onscroll = function() {
  if (window.scrollY > 0) {
    document.querySelector("nav").classList.add("sticky");
  } else {
    document.querySelector("nav").classList.remove("sticky");
  }
};