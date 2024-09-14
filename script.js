    let p = document.querySelector("p");
    if (p) {
        p.addEventListener("animationend", function() {
            p.style.right = "-120px";
        });
    }

    let overlay1 = document.querySelector(".overlay1");
    let overlay2 = document.querySelector(".overlay2");
    let overlay3 = document.querySelector(".overlay3");
    let overlay4 = document.querySelector(".overlay4");
    let op1 = document.querySelector(".op1");
    let op2 = document.querySelector(".op2");
    let op3 = document.querySelector(".op3");
    let op4 = document.querySelector(".op4");

    if (op1 && overlay1) {
        op1.addEventListener("mouseover", function() {
            overlay1.style.transform = "translateY(-0.1px)";
            overlay1.style.cursor = "pointer";
            overlay1.style.transition = "all 500ms ease";
        });
    }
    if (op2 && overlay2) {
        op2.addEventListener("mouseover", function() {
            overlay2.style.transform = "translateY(-0.1px)";
            overlay2.style.cursor = "pointer";
            overlay2.style.transition = "all 500ms ease";
        });
    }

    if (op3 && overlay3) {
        op3.addEventListener("mouseover", function() {
            overlay3.style.transform = "translateY(-0.1px)";
            overlay3.style.cursor = "pointer";
            overlay3.style.transition = "all 500ms ease";
        });
    }

    if (op4 && overlay4) {
        op4.addEventListener("mouseover", function() {
            overlay4.style.transform = "translateY(-0.01px)";
            overlay4.style.cursor = "pointer";
            overlay4.style.transition = "all 500ms ease";
        });
    }

    if (op1 && overlay1) {
        op1.addEventListener("mouseleave", function() {
            overlay1.style.transform = "translateY(55px)";
            overlay1.style.cursor = "pointer";
            overlay1.style.transition = "all 500ms ease";
        });
    }
    if (op2 && overlay2) {
        op2.addEventListener("mouseleave", function() {
            overlay2.style.transform = "translateY(55px)";
            overlay2.style.cursor = "pointer";
            overlay2.style.transition = "all 500ms ease";
        });
    }

    if (op3 && overlay3) {
        op3.addEventListener("mouseleave", function() {
            overlay3.style.transform = "translateY(55px)";
            overlay3.style.cursor = "pointer";
            overlay3.style.transition = "all 500ms ease";
        });
    }

    if (op4 && overlay4) {
        op4.addEventListener("mouseleave", function() {
            overlay4.style.transform = "translateY(55px)";
            overlay4.style.cursor = "pointer";
            overlay4.style.transition = "all 500ms ease";
        });
    }
function scrolltrigger() {
    gsap.to(".navbar",{
        height:"145px",
        backgroundColor: "rgba(73, 73, 10, 0.5)",
        backdropFilter: "blur(20px)",
        duration:0.5,
        scrollTrigger:{
            trigger:".navbar",
            scroller:"body",
            start: "top -1%",
            end: "top -10%",
            scrub:1,
        }
    
    })

    gsap.to(".process .sct1 ",{
        transform: "translateX(0px)",
        opacity: "1",
        scrollTrigger:{
            trigger:".hmis",
            scroller:"body",
            start: "top 700px",
            end: "top 650px",
            markers:false,
            scrub:1,
        }
    })

    document.querySelector(".swiper").style.width = "100%"
}
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });



function myFunction(x) {
    if (x.matches) { // If media query matches
      scrolltrigger()
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 1000px)")
  
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
    location.reload();
});

gsap.to(".navbar, img",{
    backgroundColor: "transparent",
    

})

