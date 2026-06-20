const slider = document.querySelector(".team-grid");

let isDown = false;
let startX;
let scrollLeft;



// quando clicar no mouse
slider.addEventListener("mousedown", (e) => {

    isDown = true;

    slider.classList.add("active");

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

});



// soltar mouse
slider.addEventListener("mouseup", () => {

    isDown = false;

    slider.classList.remove("active");

});



// sair da área
slider.addEventListener("mouseleave", () => {

    isDown = false;

});



// mover arrastando
slider.addEventListener("mousemove", (e) => {


    if(!isDown) return;


    e.preventDefault();


    const x = e.pageX - slider.offsetLeft;


    const walk = (x - startX) * 2;



    slider.scrollLeft = scrollLeft - walk;


});




// suporte para celular (touch)

let startTouch;

slider.addEventListener("touchstart", (e)=>{

    startTouch = e.touches[0].clientX;


});



slider.addEventListener("touchmove",(e)=>{


    const move = e.touches[0].clientX;


    const difference = startTouch - move;


    slider.scrollLeft += difference;


    startTouch = move;


});


// HERO

const slides = document.querySelectorAll(".slide");

let current = 0;


function changeSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});


slides[current].classList.add("active");

}



setInterval(()=>{


current++;


if(current >= slides.length){

current = 0;

}


changeSlide();


},5000);






// EQUIPE ARRASTAR


const team = document.querySelector(".team-grid");


let down = false;

let startX;

let scroll;



team.addEventListener("mousedown",(e)=>{

down = true;

startX = e.pageX - team.offsetLeft;

scroll = team.scrollLeft;


});



team.addEventListener("mouseup",()=>{

down=false;

});



team.addEventListener("mouseleave",()=>{

down=false;

});



team.addEventListener("mousemove",(e)=>{


if(!down) return;


e.preventDefault();


const x = e.pageX - team.offsetLeft;


const move = (x-startX)*2;


team.scrollLeft = scroll - move;


});