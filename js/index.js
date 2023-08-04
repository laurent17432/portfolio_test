let hamburgerIcon = document.querySelector("#hamburger");
let navBar = document.querySelector("#liste-liens");
let navLiens = navBar.querySelectorAll("li");
hamburgerIcon.addEventListener("click",() => {
    navBar.classList.toggle("actif");
    hamburgerIcon.classList.toggle("croix");
});
navLiens.forEach((navLiens) =>{
    navLiens.addEventListener("click",()=>{
    navBar.classList.remove("actif");
    hamburgerIcon.classList.toggle("croix");
}) 
})