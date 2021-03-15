const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".navbar");

hamburger.addEventListener("click", () =>{
    navlink.classList.toggle("open")
})