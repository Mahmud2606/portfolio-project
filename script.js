var menu = document.querySelector(".menu");
var menuItems = menu.querySelectorAll("li a");
var menuBtn = document.querySelector(".menu-btn");
var icon = document.querySelector(".menu-btn i");

window.addEventListener("scroll", function(){
   
    if (window.scrollY > 20) {
      var navbar = document.querySelector(".navbar");
      navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky")
  }
  if(this.scrollY > 500){
     $(".scrol-up-button").addClass("show");
  }else{
     $(".scrol-up-button").removeClass("show");
  }
});

// typing script
   new Typed (".typing", {
   strings: ["Web designer", "Front end developer"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
});
new Typed (".typing-2", {
  strings: ["Web designer", "Front end developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// scrollup function

$(".scrol-up-button").click(() => {
  $("html").animate({scrollTop: 0})
});

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active");
    
    icon.classList.toggle("active");
});

menuItems.forEach(myFunctoin);

function myFunctoin(x) {
  x.addEventListener("click", function(){
      menu.classList.remove("active")
  });
}

$(".carousel").owlCarousel({
   margin: 20,
   loop: true,
   autoplayTimeOut: 2000,
   autoplayHoverPause: true,
   responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
   }
});