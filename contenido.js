let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }


const img1 = document.querySelector(".img1");
const info1 = document.querySelector(".card1");
const fondo1 = document.querySelector(".fondo1")
const close = document.querySelector(".flechita-atras1");

img1.addEventListener("click",abrirInfo1)
close.addEventListener("click",cerrarInfo1)

function abrirInfo1(){
    info1.classList.toggle("inactive")
    fondo1.classList.add("blur")
}
function cerrarInfo1(){
    info1.classList.add("inactive")
    fondo1.classList.toggle("blur")
}






//////////////////////////////////////////////////////////////////////
const img2 = document.querySelector(".img2");
const info2 = document.querySelector(".card2");
const fondo2 = document.querySelector(".fondo1")
const close2 = document.querySelector(".flechita-atras2");

img2.addEventListener("click",abrirInfo2)
close2.addEventListener("click",cerrarInfo2)

function abrirInfo2(){
    info2.classList.toggle("inactive")
    fondo2.classList.add("blur")
}
function cerrarInfo2(){
    info2.classList.add("inactive")
    fondo2.classList.toggle("blur")
}
////////////////////////////////////////////////////////////////////////////
const img3 = document.querySelector(".img3");
const info3 = document.querySelector(".card3");
const fondo3 = document.querySelector(".fondo1")
const close3 = document.querySelector(".flechita-atras3");

img3.addEventListener("click",abrirInfo3)
close3.addEventListener("click",cerrarInfo3)

function abrirInfo3(){
    info3.classList.toggle("inactive")
    fondo3.classList.add("blur")
}
function cerrarInfo3(){
    info3.classList.add("inactive")
    fondo3.classList.toggle("blur")
}
///////////////////////////////////////////////////////
const img4 = document.querySelector(".img4");
const info4 = document.querySelector(".card4");
const fondo4 = document.querySelector(".fondo1")
const close4 = document.querySelector(".flechita-atras4");

img4.addEventListener("click",abrirInfo4)
close4.addEventListener("click",cerrarInfo4)

function abrirInfo4(){
    info4.classList.toggle("inactive")
    fondo4.classList.add("blur")
}
function cerrarInfo4(){
    info4.classList.add("inactive")
    fondo4.classList.toggle("blur")
}
///////////////////////////////////////////////////////////
const img5 = document.querySelector(".img5");
const info5 = document.querySelector(".card5");
const fondo5 = document.querySelector(".fondo1")
const close5 = document.querySelector(".flechita-atras5");

img5.addEventListener("click",abrirInfo5)
close5.addEventListener("click",cerrarInfo5)

function abrirInfo5(){
    info5.classList.toggle("inactive")
    fondo5.classList.add("blur")
}
function cerrarInfo5(){
    info5.classList.add("inactive")
    fondo5.classList.toggle("blur")
}
///////////////////////////////////////////////////
const img6 = document.querySelector(".img6");
const info6 = document.querySelector(".card6");
const fondo6 = document.querySelector(".fondo1")
const close6 = document.querySelector(".flechita-atras6");

img6.addEventListener("click",abrirInfo6)
close6.addEventListener("click",cerrarInfo6)

function abrirInfo6(){
    info6.classList.toggle("inactive")
    fondo6.classList.add("blur")
}
function cerrarInfo6(){
    info6.classList.add("inactive")
    fondo6.classList.toggle("blur")
}
///////////////////////////////////////
const img7 = document.querySelector(".img7");
const info7 = document.querySelector(".card7");
const fondo7 = document.querySelector(".fondo1")
const close7 = document.querySelector(".flechita-atras7");

img7.addEventListener("click",abrirInfo7)
close7.addEventListener("click",cerrarInfo7)

function abrirInfo7(){
    info7.classList.toggle("inactive")
    fondo7.classList.add("blur")
}
function cerrarInfo7(){
    info7.classList.add("inactive")
    fondo7.classList.toggle("blur")
}
////////////////////////////////////////////
const img8 = document.querySelector(".img8");
const info8 = document.querySelector(".card8");
const fondo8 = document.querySelector(".fondo1")
const close8 = document.querySelector(".flechita-atras8");

img8.addEventListener("click",abrirInfo8)
close8.addEventListener("click",cerrarInfo8)

function abrirInfo8(){
    info8.classList.toggle("inactive")
    fondo8.classList.add("blur")
}
function cerrarInfo8(){
    info8.classList.add("inactive")
    fondo8.classList.toggle("blur")
}
///////////////////////////////////////////////
const img9 = document.querySelector(".img9");
const info9 = document.querySelector(".card9");
const fondo9 = document.querySelector(".fondo1")
const close9 = document.querySelector(".flechita-atras9");

img9.addEventListener("click",abrirInfo9)
close9.addEventListener("click",cerrarInfo9)

function abrirInfo9(){
    info9.classList.toggle("inactive")
    fondo9.classList.add("blur")
}
function cerrarInfo9(){
    info9.classList.add("inactive")
    fondo9.classList.toggle("blur")
}

//////////////////////////////////////////////////////
// const img10 = document.querySelector(".col1");
// const info10 = document.querySelector(".card10");
// const fondo10 = document.querySelector(".fondo1")
// const close10 = document.querySelector(".flechita-atras10");

// img10.addEventListener("click",abrirInfo10)
// close10.addEventListener("click",cerrarInfo10)

// function abrirInfo10(){
//     info10.classList.toggle("inactive")
//     fondo10.classList.add("blur")
    
// }




// function cerrarInfo10(){
//     info10.classList.add("inactive")
//     fondo10.classList.toggle("blur")
// }




// //////////////////////////////////////////////////////////
// const img11 = document.querySelector(".col2");
// const info11 = document.querySelector(".card11");
// const fondo11 = document.querySelector(".fondo1")
// const close11 = document.querySelector(".flechita-atras11");

// img11.addEventListener("click",abrirInfo11)
// close11.addEventListener("click",cerrarInfo11)

// function abrirInfo11(){
//     info11.classList.toggle("inactive")
//     fondo11.classList.add("blur")
// }
// function cerrarInfo11(){
//     info11.classList.add("inactive")
//     fondo11.classList.toggle("blur")
// }
// //////////////////////////////////////////////////////////
// const img12 = document.querySelector(".col3");
// const info12 = document.querySelector(".card12");
// const fondo12 = document.querySelector(".fondo1")
// const close12 = document.querySelector(".flechita-atras12");

// img12.addEventListener("click",abrirInfo12)
// close12.addEventListener("click",cerrarInfo12)

// function abrirInfo12(){
//     info12.classList.toggle("inactive")
//     fondo12.classList.add("blur")
// }
// function cerrarInfo12(){
//     info12.classList.add("inactive")
//     fondo12.classList.toggle("blur")
// }

///////////////////////////////////////////////////////////////////

const img10 = document.querySelector('.col1');
const info10 = document.querySelector('.card10');
const fondo10 = document.querySelector('.fondo1')
const close10 = document.querySelector('.flechita-atras10');

const img11 = document.querySelector('.col2');
const info11 = document.querySelector('.card11');
const fondo11 = document.querySelector('.fondo1')
const close11 = document.querySelector('.flechita-atras11');

const img12 = document.querySelector('.col3');
const info12 = document.querySelector('.card12');
const fondo12 = document.querySelector('.fondo1')
const close12 = document.querySelector('.flechita-atras12');       


img10.addEventListener('click', toggleSeguidores);
close10.addEventListener('click', cerrarSeguidores);

img11.addEventListener('click', togglePublicaciones);
close11.addEventListener('click', cerrarpublicaciones);

img12.addEventListener('click', toggleInteracciones);
close12.addEventListener('click', cerrarinteracciones);

function toggleSeguidores(){
    const isPublicacionesClose = info11.classList.contains('inactive');
    const isInteraccionesClose = info12.classList.contains('inactive');

    if (!isPublicacionesClose){
        info11.classList.add('inactive');
    }
    if (!isInteraccionesClose){
        info12.classList.add('inactive');
    }
    
    info10.classList.toggle('inactive');
    fondo10.classList.toggle('blur');
}

function cerrarSeguidores(){
    info10.classList.add('inactive');
    fondo10.classList.toggle('blur')

}

function togglePublicaciones(){
    const isSeguidoresClose = info10.classList.contains('inactive');
    const isInteraccionesClose = info12.classList.contains('inactive');

    if (!isSeguidoresClose){
        info10.classList.add('inactive');
    }
    if (!isInteraccionesClose){
        info12.classList.add('inactive');
    }
    
    info11.classList.toggle('inactive');
    fondo11.classList.toggle('blur')
}
function cerrarpublicaciones(){
    info11.classList.add('inactive');
    fondo11.classList.toggle('blur');
}

function toggleInteracciones(){
    const isSeguidoresClose = info10.classList.contains('inactive');
    const isPublicacionesClose = info11.classList.contains('inactive');

    if (!isSeguidoresClose){
        info10.classList.add('inactive');
    }
    if (!isPublicacionesClose){
        info11.classList.add('inactive');
    }
    
    info12.classList.toggle('inactive');
    fondo12.classList.toggle('blur')
}

function cerrarinteracciones(){
    info12.classList.add('inactive');
    fondo12.classList.toggle('blur');
}

/////////////////////////////////////////////////////
const img1_1 = document.querySelector("#img1");
const info1_1 = document.querySelector(".card1");
const fondo1_1 = document.querySelector(".fondo1")
const close1_1= document.querySelector(".flechita-atras1");

img1_1.addEventListener("click",abrirInfo1)
close1_1.addEventListener("click",cerrarInfo1)

function abrirInfo1(){
    info1_1.classList.toggle("inactive")
    fondo1_1.classList.add("blur")
}
function cerrarInfo1(){
    info1_1.classList.add("inactive")
    fondo1_1.classList.toggle("blur")
}






//////////////////////////////////////////////////////////////////////
const img2_2 = document.querySelector("#img2");
const info2_2 = document.querySelector(".card2");
const fondo2_2 = document.querySelector(".fondo1")
const close2_2 = document.querySelector(".flechita-atras2");

img2_2.addEventListener("click",abrirInfo2)
close2_2.addEventListener("click",cerrarInfo2)

function abrirInfo2(){
    info2_2.classList.toggle("inactive")
    fondo2_2.classList.add("blur")
}
function cerrarInfo2(){
    info2_2.classList.add("inactive")
    fondo2_2.classList.toggle("blur")
}
////////////////////////////////////////////////////////////////////////////
const img3_3 = document.querySelector("#img3");
const info3_3 = document.querySelector(".card3");
const fondo3_3 = document.querySelector(".fondo1")
const close3_3 = document.querySelector(".flechita-atras3");

img3_3.addEventListener("click",abrirInfo3)
close3_3.addEventListener("click",cerrarInfo3)

function abrirInfo3(){
    info3_3.classList.toggle("inactive")
    fondo3_3.classList.add("blur")
}
function cerrarInfo3(){
    info3_3.classList.add("inactive")
    fondo3_3.classList.toggle("blur")
}
///////////////////////////////////////////////////////
const img4_4 = document.querySelector("#img4");
const info4_4 = document.querySelector(".card4");
const fondo4_4 = document.querySelector(".fondo1")
const close4_4 = document.querySelector(".flechita-atras4");

img4_4.addEventListener("click",abrirInfo4)
close4_4.addEventListener("click",cerrarInfo4)

function abrirInfo4(){
    info4_4.classList.toggle("inactive")
    fondo4_4.classList.add("blur")
}
function cerrarInfo4(){
    info4_4.classList.add("inactive")
    fondo4_4.classList.toggle("blur")
}
///////////////////////////////////////////////////////////
const img5_5 = document.querySelector("#img5");
const info5_5 = document.querySelector(".card5");
const fondo5_5 = document.querySelector(".fondo1")
const close5_5 = document.querySelector(".flechita-atras5");

img5_5.addEventListener("click",abrirInfo5)
close5_5.addEventListener("click",cerrarInfo5)

function abrirInfo5(){
    info5_5.classList.toggle("inactive")
    fondo5_5.classList.add("blur")
}
function cerrarInfo5(){
    info5_5.classList.add("inactive")
    fondo5_5.classList.toggle("blur")
}
///////////////////////////////////////////////////
const img6_6 = document.querySelector("#img6");
const info6_6 = document.querySelector(".card6");
const fondo6_6 = document.querySelector(".fondo1")
const close6_6 = document.querySelector(".flechita-atras6");

img6_6.addEventListener("click",abrirInfo6)
close6_6.addEventListener("click",cerrarInfo6)

function abrirInfo6(){
    info6_6.classList.toggle("inactive")
    fondo6_6.classList.add("blur")
}
function cerrarInfo6(){
    info6_6.classList.add("inactive")
    fondo6_6.classList.toggle("blur")
}
///////////////////////////////////////
const img7_7 = document.querySelector("#img7");
const info7_7 = document.querySelector(".card7");
const fondo7_7 = document.querySelector(".fondo1")
const close7_7 = document.querySelector(".flechita-atras7");

img7_7.addEventListener("click",abrirInfo7)
close7_7.addEventListener("click",cerrarInfo7)

function abrirInfo7(){
    info7_7.classList.toggle("inactive")
    fondo7_7.classList.add("blur")
}
function cerrarInfo7(){
    info7_7.classList.add("inactive")
    fondo7_7.classList.toggle("blur")
}
////////////////////////////////////////////
const img8_8 = document.querySelector("#img8");
const info8_8 = document.querySelector(".card8");
const fondo8_8 = document.querySelector(".fondo1")
const close8_8 = document.querySelector(".flechita-atras8");

img8_8.addEventListener("click",abrirInfo8)
close8_8.addEventListener("click",cerrarInfo8)

function abrirInfo8(){
    info8_8.classList.toggle("inactive")
    fondo8_8.classList.add("blur")
}
function cerrarInfo8(){
    info8_8.classList.add("inactive")
    fondo8_8.classList.toggle("blur")
}
///////////////////////////////////////////////
const img9_9 = document.querySelector("#img9");
const info9_9 = document.querySelector(".card9");
const fondo9_9 = document.querySelector(".fondo1")
const close9_9 = document.querySelector(".flechita-atras9");

img9_9.addEventListener("click",abrirInfo9)
close9_9.addEventListener("click",cerrarInfo9)

function abrirInfo9(){
    info9_9.classList.toggle("inactive")
    fondo9_9.classList.add("blur")
}
function cerrarInfo9(){
    info9_9.classList.add("inactive")
    fondo9_9.classList.toggle("blur")
}

////////////////////////////