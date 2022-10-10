
const carousel=document.querySelector("#carousel");
let elementos_carousel= document.querySelectorAll(".seccion-carousel");


const btn_derecho=document.querySelector("#btn-derecho");
const btn_izquierdo=document.querySelector("#btn-izquierdo");

let ultimo_elemento= elementos_carousel[elementos_carousel.length-1];
carousel.insertAdjacentElement('afterbegin',ultimo_elemento);


function mover_derecha(){
    let primer_elemento=document.querySelectorAll(".seccion-carousel")[0];
    carousel.style.marginLeft ="-200";
    carousel.style.transition ='all 0.5s';
    setTimeout(() => {
        carousel.style.transition="none";
        carousel.insertAdjacentElement('beforeEnd',primer_elemento);
        carousel.style.marginLeft ="-100";

    }, 500);
};

function mover_izquierda(){
    let elementos_carousel= document.querySelectorAll(".seccion-carousel");
    let ultimo_elemento= elementos_carousel[elementos_carousel.length-1];
    carousel.style.marginLeft ="0";
    carousel.style.transition ='all 0.5s';
    setTimeout(() => {
        carousel.style.transition="none";
        carousel.insertAdjacentElement('afterbegin',ultimo_elemento);
        carousel.style.marginLeft ="-100";

    }, 500);
};

btn_derecho.addEventListener("click",()=>{
    mover_derecha();
});

btn_izquierdo.addEventListener("click",()=>{
    mover_izquierda();
});
setInterval(()=>{
    mover_derecha();
},7000)