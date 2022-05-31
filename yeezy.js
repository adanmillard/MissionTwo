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

// countdown timer
const countDownDate = new Date("June 1, 2022 16:30:00").getTime();

const countDownTimer = setInterval(function () {
  const todaysDate = new Date().getTime();
  const timeToCountdown = countDownDate - todaysDate;
  const days = Math.floor(timeToCountdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeToCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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

// video pause/play

const video = document.getElementById("video-kw");
const pauseBtn = document.getElementById("mybtn");

video.addEventListener("click", pausePlay);
pauseBtn.addEventListener("click", pausePlay);

function pausePlay() {
  if (video.paused) {
    video.play();
    pauseBtn.innerHTML = "pause";
  } else {
    video.pause();
    pauseBtn.innerHTML = "play";
  }
}

// Email confirmation
const thanksMsg = document.getElementById("kw-quote");
const userEmail = document.getElementById("email");
const userName = document.getElementById("name");
const btn = document.getElementById("submit");
const errorMsg = document.getElementById("error");

btn.addEventListener("click", onClick);

function onClick() {
  emailChecker();
}

function emailChecker() {
  let gmail = userEmail.value.search("@gmail");
  let hotmail = userEmail.value.search("@hotmail");
  let yahoo = userEmail.value.search("@yahoo");
  if (gmail >= 0 || yahoo >= 0 || hotmail >= 0) {
    errorMsg.innerHTML = "";
    errorMsg.classList.remove("error");
    thanksMsg.innerHTML = `" Thanks ${userName.value}, we will be sending you a confirmation Email to: ${userEmail.value}. "`;
    thanksMsg.classList.add("confirmation");
    userEmail.style.backgroundColor = "lightgrey";
    userName.style.backgroundColor = "lightgrey";
    disableInputs();
  } else {
    errorMsg.classList.add("error");
    errorMsg.innerHTML = "please enter all fields with correct email format.";
  }
}

function disableInputs() {
  btn.disabled = true;
  userEmail.disabled = true;
  userName.disabled = true;
}

// Modal

const modal = document.getElementById("modal");
const opener = document.getElementById("thankyou");
const span = document.getElementsByClassName("close")[0];

opener.addEventListener("click", thankYouModal);
span.addEventListener("click", closeModal);
window.addEventListener("click", outsideModalClose);

function thankYouModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideModalClose(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
