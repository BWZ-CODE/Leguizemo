
/////////////Contenido


@media (max-width: 768px) {
    header{
        z-index: 20;
        min-height: 20px;
    }
    

   

    .h1{
        font-size: 0.8em !important;
    }

    .container .contLeft, .contRight {
        font-size: 1.4em;
    }

    .col-sm-6{
        position: relative;
        width: 100%;
        margin-top: 10px;
    }

    .figure2{
        position: relative;
       
    }
    
    .figure-context{
        width: 100%;
        object-fit:contain;
        position: relative;    
        z-index: -1;
    }
    
    .py-2{
        position: relative;
        
    }
    .container .figure-señor .tittle-Init{
        background-color: #f5f504;
        width: 90%;
        position:absolute;
        bottom: 10%;
        right: 0;
        text-align: end;
        padding: 10px;
        font-size: 0.8;
    }

    .container .info-IMG1{
        position: absolute;
        left: 10%;
        bottom: 15%;
    }
    .container .context-prim{
        width: 40%;
        max-height: 60vh;
        overflow: scroll;
        position: absolute;
        right: 0;
        top: 10%;
        margin: 12px;
        border-radius: 5px;
        background-color: rgba(33, 37, 41, 0.75);
    }

    .container .context-prim p{
        font-size: 1rem;
    }
    .post-instagram{
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .post-instagram .postTittle h1, .estadisticas-cool .estadTittle h1{
        position: relative;
        left: 0;
        width: 80%;
        background-color: #f5f504;
        text-align: center;
        padding: 5px;
    }

     /*Carrusel inicio */
    .slider{
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    
}

.item{
    transition: all 0.4s;
    z-index: 100;
}
    .item img{
    position: absolute;
    width: 200px;
    height: 200px;
    object-fit: cover;
    background-color: #fff;
    border-radius: 10px;
    /* padding: 20px; */
    left: calc(50% - 110px);
    top: 0;
    z-index: 10;
}
    #next, #prev{
    position: absolute;
    top: 40%;
    width:20%;
    height: 40%;
    color: #fff;
    background-color: transparent;
    border: none;
    font-family: monospace;
    font-weight: bold;
    left: 0px;
    z-index: 100;
}
    #next {
    left: unset;
    right: 0px;
}


/* 
     Carrusel final */
    .estadisticas-cool .container{
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .row-cols-3{
        gap: 5px;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .col{
        width: 110px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f5f504;
    }

    

    .col1{
        background-image: url(./pictures/one\ byn.jpg);
        background-size: cover;
    }
    .col2{
        background-image: url(./pictures/two\ byn.jpg);
        background-size: cover;
    }
    .col3{
        background-image: url(./pictures/tres\ byn.jpg);
        background-size: cover;
    }

    .card-post{
        position: absolute;
        top: 50%;
        left: 25%;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        z-index: 200;
    }
    .card1,.card2,.card3,.card4,.card5,.card6,.card7,.card8,.card9,.card10,.card11,.card12{
        /* border: solid black; */
        background-color: #fff;
        border-radius: 15px;
    }


    .card-post .cabecera{
        display: flex;
        align-items:center;
        justify-content: space-around;
        height:10vh;
        margin: 5px;
    }
    .card-post .cabecera p{
        margin: 0;
        width: 70%;
        background-color: #f5f504;
        text-align: center;
    }


    .card-post .cabecera img{
        width: 50px;
        margin-right: 10px;
    }
    .imagen-post{
        display: flex;
        justify-content: center;
    }

    .imagen-post .imagen-de-post{
        width: 250px;
    }
    .card-post .cards-info .container .row .col{
        width: 50%;
        height: 25vh;
        padding: 0;
        color: black;
    }
     .card-post .cards-info .container .row .col p{ 
        font-size: 0.8em;
    } 


    .card-post .cards-info img{
        width: 50px;
    }

    .inactive{
        display: none;
    }
    .blur{
        opacity: 0.5;
        transition: all 0.5s;
    }
    .card10 .imagen-post{
        display: flex;
        padding: 5px;
        flex-direction: column;
        justify-content: center;
    }


    .card10 .imagen-post .imagen-de-post{
        width: 300px;
        height: auto;
    }

}



////////////Index

@media (min-width: 768px) {
    header{
        z-index: 20;
        min-height: 20px;
    }
    

   

    .h1{
        font-size: 0.8em !important;
    }

    .container .contLeft, .contRight {
        font-size: 1.4em;
    }
    .figure-señor, .p-0{
        position:relative;
        width: 100%;
        max-height: 300px;
        /* top: -10%; */
        
    }

    .señor-img{
        position: relative;
        max-height: 300px;
        width: 100%;
        z-index: -1;
       
        
        
    }

    .col-sm-6{
        position: relative;
        width: 100%;
        margin-top: 10px;
    }

    .figure2{
        position: relative;
       
    }
    
    .figure-context{
        width: 100%;
        object-fit:contain;
        position: relative;
        z-index: -1;
    }
    
    .py-0{
        position: relative;
        
    }
    .container .figure-señor .tittle-Init{
        background-color: #f5f504;
        width: 90%;
        position:absolute;
        bottom: 10%;
        right: 0;
        text-align: end;
        padding: 10px;
        font-size: 1rem;
    }

    .container .info-IMG1{
        position: absolute;
        left: 10%;
        bottom: 10%;
    }
    .container .context-prim{
        width: 40%;
        /* max-height: 65vh; */
        overflow: scroll;
        position: absolute;
        right: 0;
        top: 5%;
        margin: 12px;
        border-radius: 5px;
        background-color: rgba(33, 37, 41, 0.75);
    }
    .container .context-prim p{
        font-size: 1rem
    }

    .parte-final{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;

    }

    .texto-proposito{
        text-align: center;
        position: relative;
        margin-top: 20px;
        width: 80%;
        
    }
    .texto-proposito-info{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1em;
    }
    /* .cont-Botton{
        width: 100%;
        height: auto;
        position: absolute;
        bottom: -20%;
        display: block;
    } */


    .btn-primary{
        position: relative;
        background-color: #f5f504;
        border: none;
        width: 100px;
        height: 40px;
        
    }
    .btn-primary a{
        color:#000;
        text-decoration: none;

    }
    .footer-first{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10%;
        min-width: 100%;
        height: 5vh;
        background-color: #f5f504;
    } 
    .footer-first p{
        text-align: center;
        align-self: center;
        margin: 0;
    }

} 