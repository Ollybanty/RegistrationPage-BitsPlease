// function openSignupForm() {
//   document.querySelector(".hidden").style.display = "block";
//   document.getElementById("overlay").style.display = "block";
// }

// function openSigninForm() {
//   document.querySelector(".sign-in-ctn").style.display = "block";
//   document.getElementById("overlay").style.display = "block";
// }

// function closeAllForms() {

//   document.getElementById("overlay").style.display = "hidden";
// }

// Scrtipts used

const openSignup = document.querySelectorAll(" [data-form2-target] ");
const openSignin = document.querySelectorAll(" [data-form1-target] ");
const closeFormOne = document.querySelector("[data-close-button-one]");
const closeFormTwo = document.querySelector("[data-close-button-two]");

const overlay = document.getElementById("overlay");

openSignup.forEach((button) => {
  button.addEventListener("click", () => {
    const formTwo = document.querySelector(button.dataset.form2Target);
    openFormTwo(formTwo);
  });
});

function openFormTwo(formTwo) {
  if (formTwo == null) return;
  formTwo.classList.add("active");
  overlay.classList.add("active");
}

openSignin.forEach((button) => {
  button.addEventListener("click", () => {
    const formOne = document.querySelector(button.dataset.form1Target);
    openFormOne(formOne);
  });
});

closeFormOne.forEach((button) => {
  button.addEventListener("click", () => {
    const formOne = button.closest(".sign-in-ctn");
    closeFirstForm(formOne);
  });
});

function openFormOne(formOne) {
  if (formOne == null) return;
  formOne.classList.add("active");
  overlay.classList.add("active");
}

function closeFirstForm(formOne) {
  if (formOne == null) return;
  formOne.classList.remove("active");
  overlay.classList.remove("active");
}

function closeSecondForm(formTwo) {
  if (formTwo == null) return;
  formTwo.classList.remove("active");
  overlay.classList.remove("active");
}

var openTray = document.querySelector(".menu-toggle");

function openTray() {
  document.getElementById("navBarr").style.display = "flex";
}

var closeTray = document.querySelector(".sideBarCloseBtn");

function closeTray() {
  document.getElementById("navBarr").style.display = "none";
}

var openSignupForm = document.getElementById("firstList");
var openSigninForm = document.querySelector(".logins");

function openSignupForm() {
  document.querySelector(".sign-up-ctn").style.display = "block";
}
