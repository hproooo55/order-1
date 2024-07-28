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
        overlay1.style.transform = "translateY(-1px)";
        overlay1.style.cursor = "pointer";
        overlay1.style.transition = "all 500ms ease";
    });
}
if (op2 && overlay2) {
    op2.addEventListener("mouseover", function() {
        overlay2.style.transform = "translateY(-1px)";
        overlay2.style.cursor = "pointer";
        overlay2.style.transition = "all 500ms ease";
    });
}

if (op3 && overlay3) {
    op3.addEventListener("mouseover", function() {
        overlay3.style.transform = "translateY(-1px)";
        overlay3.style.cursor = "pointer";
        overlay3.style.transition = "all 500ms ease";
    });
}

if (op4 && overlay4) {
    op4.addEventListener("mouseover", function() {
        overlay4.style.transform = "translateY(-1px)";
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
