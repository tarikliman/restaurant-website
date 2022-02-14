let navs = document.querySelectorAll(".nav-item");


function activeLink() {
    navs.forEach((item) => item.classList.remove('active'));
    
    this.classList.add('active');
    }

navs.forEach((item) => item.addEventListener("click", activeLink));


let hambutton = document.getElementById("hamburger");
let navmenu = document.getElementById("hammenu");

hambutton.addEventListener("click", () => {
    hambutton.classList.toggle("is-active");
    navmenu.classList.toggle("is-active");
    document.body.classList.toggle("body-shift");
});




//video start image

let play = document.getElementById("video-play");
let openvideo = document.getElementById("openvideo");
let section = document.getElementById("intro");

play.addEventListener("click", () => {
    section.style.backgroundImage = "none";
    play.classList.add("d-none");
    openvideo.classList.remove("d-none");
    openvideo.classList.add("d-block");



} );


//scroll change header

const header = document.querySelector("header");
const sectionOne = document.querySelector(".bg-image"); //olmuyorsa burada hata vardır
const sectionOneOptions = {}; //olmazsa buraya amrginlerle dene
const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');

        } else {
            header.classList.remove("nav-scrolled");
        }
    });


}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
