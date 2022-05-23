// Slide show function

let slideIndex = 1;
showSlides(slideIndex);

// Next/Prev controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("yeezy");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/* 
select input boxes
use user info 
Grey out input boxes
change text to thanks text

*/

const thanksMsg = document.getElementById("kw-quote");
const userEmail = document.getElementById("email");
const userName = document.getElementById("name");
const btn = document.getElementById("submit");

btn.addEventListener("click", onClick);

function onClick() {
  thanksMsg.innerHTML = `" Thanks ${userName.value}, we will be sending you a confirmation Email to: ${userEmail.value}. "`;
  thanksMsg.style.backgroundColor = "yellow";
  // console.log(`${userName.value}`);
  // console.log(`${userEmail.value}`);
}
