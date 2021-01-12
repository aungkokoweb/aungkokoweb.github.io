let toggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".nav-links");
toggle.addEventListener("click",function(){
  links.classList.toggle("nav-links-active");
});
