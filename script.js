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