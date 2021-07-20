`use strict`;

const homeTab = document.querySelector(".home");
const historyTab = document.querySelector(".history");
const logTitle = document.querySelector(".log_title");
const logBody = document.querySelector(".log_body");
const messageRow = document.querySelector(".message_row");
const mailCompose = document.querySelector(".mail_compose");
const btnCompose = document.querySelector(".compose");

homeTab.addEventListener("click", function () {
  homeTab.classList.add("active_navigator");
  homeTab.classList.remove("tab");
  if (historyTab.classList.contains("active_navigator")) {
    historyTab.classList.remove("active_navigator");
  }
  historyTab.classList.add("tab");

});

historyTab.addEventListener("click", function () {
  historyTab.classList.add("active_navigator");
  historyTab.classList.remove("tab");
  if (homeTab.classList.contains("active_navigator")) {
    homeTab.classList.remove("active_navigator");
  }
  homeTab.classList.add("tab");


});

btnCompose.addEventListener("click", function () {
  mailCompose.style.display = "block";
});

var markupStr = $('#summernote').summernote('code');
console.log(markupStr);
