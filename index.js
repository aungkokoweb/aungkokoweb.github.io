let toggle = document.querySelector(".nav-toggle");
let nav = document.querySelector(".nav-list");
let links = document.querySelectorAll(".nav-list li");
toggle.addEventListener("click",function(){
  toggle.classList.toggle("nav-toggle-active");
  nav.classList.toggle("nav-list-active");
  links.forEach((link,index)=>{
    if(link.style.animation){
      link.style.animation = "";
    }else{
      link.style.animation = `navLinkFade 0.5s ease-out forwards ${index/7}s`;
    }
  });
});
