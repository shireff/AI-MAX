let pag = document.querySelectorAll("ul li");
for (let i = 0; i < pag.length; i++) {
  pag[i].addEventListener("click", function () {
    pag[i].classList.toggle("active");
  });
}

let pagOne = document.getElementById("pagOneBlog");
let pagTwo = document.getElementById("pagTwoBlog");
let pagThree = document.getElementById("pagThreeBlog");

let pagOneDisplay = document.getElementById("pagOneDisplay");
let pagTwoDisplay = document.getElementById("pagTwoDisplay");
let pagThreeDisplay = document.getElementById("pagThreeDisplay");
pagOne.addEventListener("click", function () {
  pagOne.classList.add("active");
  pagTwo.classList.remove("active");
  pagThree.classList.remove("active");
  pagOneDisplay.style.display = "block";
  pagTwoDisplay.style.display = "none";
  pagThreeDisplay.style.display = "none";
});
pagTwo.addEventListener("click", function () {
  pagOne.classList.remove("active");
  pagTwo.classList.add("active");
  pagOneDisplay.style.display = "none";
  pagTwoDisplay.style.display = "block";
});
pagThree.addEventListener("click", function () {
  pagOne.classList.remove("active");
  pagTwo.classList.remove("active");
  pagThree.classList.add("active");
  pagOneDisplay.style.display = "none";
  pagTwoDisplay.style.display = "none";
  pagThreeDisplay.style.display = "block";
});
