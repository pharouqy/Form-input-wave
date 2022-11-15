const emails = document.querySelectorAll('label[for="email"] > span');
const passwords = document.querySelectorAll('label[for="password"] > span');

const email = document.getElementById("email");
const password = document.getElementById("password");



const focussed = document.querySelectorAll("input");

for (let i = 0; i < focussed.length; i++) {
  focussed[i].addEventListener("focus", handelWaves);
}

function handelWaves(e) {
  if (e.target.id === "email") {
    for (let j = 0; j < emails.length; j++) {
      emails[j].classList.add("wave");
      emails[j].style.animationDelay = `${j / 10}s`;
      emails[j].style.color = `#0B6BEE`;
    }
    email.style.borderBottom = `3px solid #0B6BEE`;
  }
  if (e.target.id === "password") {
    for (let j = 0; j < passwords.length; j++) {
      passwords[j].classList.add("wave");
      passwords[j].style.animationDelay = `${j / 10}s`;
      passwords[j].style.color = `#0B6BEE`;
    }
    password.style.borderBottom = `3px solid #0B6BEE`;
  }
}
