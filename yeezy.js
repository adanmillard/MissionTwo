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

// Email confirmation
const thanksMsg = document.getElementById("kw-quote");
const userEmail = document.getElementById("email");
const userName = document.getElementById("name");
const btn = document.getElementById("submit");
const form = document.getElementById("a");
const errorMsg = document.getElementById("error");
let timeOut = setTimeout(() => errorMsg.remove(), 3000);

form.addEventListener("submit", onClick);

function onClick(e) {
  e.preventDefault();
  // validateEmail();
  emailChecker();
}

function emailChecker() {
  let gmail = userEmail.value.search("@gmail");
  let hotmail = userEmail.value.search("@hotmail");
  let yahoo = userEmail.value.search("@yahoo");
  // console.log(gmail);
  // console.log(hotmail);
  // console.log(yahoo);
  if (gmail >= 0 || yahoo >= 0 || hotmail >= 0) {
    thanksMsg.innerHTML = `" Thanks ${userName.value}, we will be sending you a confirmation Email to: ${userEmail.value}. "`;
    thanksMsg.classList.add("confirmation");
    userEmail.style.backgroundColor = "lightgrey";
    userName.style.backgroundColor = "lightgrey";
    btn.disabled = true;
    userEmail.disabled = true;
    userName.disabled = true;
    // console.log("true");
  } else {
    errorMsg.classList.add("error");
    errorMsg.innerHTML = "please enter all fields with correct email format.";
    timeOut();

    // console.log("false");
  }
}

// countdown timer
const countDownDate = new Date("June 1, 2022 16:30:00").getTime();

const countDownTimer = setInterval(function () {
  const todaysDate = new Date().getTime();
  const timeToCountdown = countDownDate - todaysDate;
  const days = Math.floor(timeToCountdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeToCountdown % (1000 * 60 * 60)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeToCountdown % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeToCountdown % (1000 * 60)) / 1000);
  document.getElementById(
    "countdown"
  ).innerHTML = `Time until Yeezy launch: ${days} D ${hours} H ${minutes} M ${seconds} S`;

  if (timeToCountdown < 0) {
    clearInterval(countDownTimer);
    document.getElementById("countdown").innerHTML =
      "Launch has already started";
  }
}, 1000);
