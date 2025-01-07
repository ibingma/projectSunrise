"use strict;"

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  // Stop video on the current slide (if it exists)
  var x = document.getElementsByClassName("mySlides");
  var currentSlide = x[slideIndex - 1];
  if (currentSlide.tagName === "VIDEO") {
    currentSlide.pause();
    currentSlide.currentTime = 0; // Reset the video to the start
  }

  // Move to the next/previous slide
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
   x[slideIndex-1].style.display = "block";  

}