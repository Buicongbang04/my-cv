"use strict";
// Thông tin cá nhân
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const myInfo = document.querySelector(".info");
const showcase = document.querySelector(".showcase-form");
const display = document.querySelector(".submit");

function displayInfo() {
  myInfo.classList.remove("hidden");
  showcase.classList.add("hidden");
}

display.addEventListener("click", function () {
  const data = document.querySelector(".input").value;
  if (regex.test(data)) {
    displayInfo();
  } else {
    alert("Email của bạn không hợp lệ!");
  }
});

// Ẩn thông tin nghề nghiệp
const dots = document.querySelectorAll(".dots");
const moreText = document.querySelectorAll(".more");
const btnText = document.querySelectorAll(".myBtn");
console.log(btnText);
// function myFunction() {
//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "VIEW MORE";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "VIEW LESS";
//     moreText.style.display = "inline";
//   }
// }
for (let i = 0; i < btnText.length; i++) {
  btnText[i].addEventListener("click", function () {
    if (dots[i].style.display === "none") {
      dots[i].style.display = "inline";
      btnText[i].innerHTML = "VIEW MORE";
      moreText[i].style.display = "none";
    } else {
      dots[i].style.display = "none";
      btnText[i].innerHTML = "VIEW LESS";
      if (i === 3) {
        moreText[i].style.display = "flex";
      } else {
        moreText[i].style.display = "inline";
      }
    }
  });
}
