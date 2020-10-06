//NOTA:Profe,  no sabemos cómo hacer para que el overlay quede atrás de la ventana modal, porque el botón de cerrar si sale bien, pero el contenido no!! :(

function openModal(){
    let ventana=document.getElementById('vent');
    ventana.classList.add('displayBlock');
    let openOverlay=document.getElementById('overlay');
    openOverlay.classList.add('displayBlock');
}
function closeModal(){
    let ventana2=document.getElementById('vent');
    ventana2.classList.remove('displayBlock');
    let openOverlay2=document.getElementById('overlay');
    openOverlay2.classList.remove('displayBlock');
}

let open=document.getElementById('open');
open.addEventListener('click',openModal);

let close=document.getElementById('close');
close.addEventListener('click',closeModal);

