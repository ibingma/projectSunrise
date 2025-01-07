"use strict";

function openTab(evt, apartmentType) {
  var i, x, tablinks;
  x = document.getElementsByClassName("apartment");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(apartmentType).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
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
runClock;
	setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
	/* Store the current date and time */
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	/* Display the current date and time */
	document.getElementById("dateNow").innerHTML =
		dateStr + "<br />" + timeStr;
	
	/* Calculate the days until January 1st */
	var newYear = new Date("January 31, 2025"); // Set the target date directly
	var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24); // Difference in milliseconds converted to days

	/* Calculate the hours, minutes, and seconds left */
	var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24; // Fractional part of days * 24
	var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;  // Fractional part of hours * 60
	var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60; // Fractional part of minutes * 60

	/* Display the time left until New Year's */
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
	
	var formattedDate = newYear.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		});
	document.getElementById("date").innerHTML = formattedDate;
}
