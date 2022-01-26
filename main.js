window.addEventListener("scroll", function () {
  let nav = document.querySelector(".scroll-nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("scroll-active", windowPosition);
});

let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let toggle = document.querySelector(".toggle");
let list = document.querySelector(".list");
let test = document.querySelector(".test");

// add.addEventListener("click", () => {
//   console.log(list);
//   list.classList.add("style-list");
// });

test.addEventListener("click", () => {
  console.log(list);
  list.classList.toggle("hide");
  if (list.classList.contains("hide")) {
    test.textContent = "Show";
  } else {
    test.textContent = "Hide";
    console.log("it doesn't have hide class");
  }
});

// remove.addEventListener("click", () => {
//   list.classList.remove("style-list");
// });

// toggle.addEventListener("click", () => {
//   list.classList.toggle("hide");
// });

let date = new Date();
let year = date.getFullYear();

let copyYear = document.getElementById("current-year");

copyYear.innerHTML = year;
