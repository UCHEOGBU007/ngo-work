let menu = document.querySelector(".menu");
let activeMenu = document.querySelector(".navigation");

menu.addEventListener("click", function(){
  activeMenu.classList.toggle("activeMenu");
})