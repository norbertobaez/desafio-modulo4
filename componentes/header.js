function menuOculto() {
   const abrirVentana = document.querySelector(".header__nav-menu");
   const ventanaOculta = document.querySelector(".header__ventana-oculta");
   const cierreVentana = document.querySelector(".header__boton");

   abrirVentana.addEventListener("click",()=>{
    ventanaOculta.style.display = "flex";
   });
   
   cierreVentana.addEventListener("click",()=>{
    ventanaOculta.style.display = "";
   });
   
}


//menu hamburguesa:
function componenteHeader(el){
   const componenteHeaderEl = document.createElement("div");
   componenteHeaderEl.innerHTML = `<header class="header">
        
   <div class="header__logo">
    <h2 class="header__logo-h2"><a href="./index.html">DANNY</a></h2>
   </div>
        <nav class="header__menu-largo">
         <a href="./portfolio.html">
            <button class="header__button-escritorio">Portfolio</button>
         </a>

         <a href="./servicios.html">
            <button class="header__button-escritorio">Servicios</button>
         </a>

         <a href="./contacto.html">
            <button class="header__button-escritorio">Contacto</button>
         </a>
        </nav>
        <nav class="header__nav-menu">
            <button class="header__button-nav"></button>
            <button class="header__button-nav"></button>
            <button class="header__button-nav"></button>
        </nav>
        <div class="header__ventana-oculta" >
         <div class="header__boton">
            <button class="header__boton-cierre" >x</button>
         </div>
            <div class="header__ventana-oculta-opciones">
                <a class="opciones" href="./portfolio.html">Portfolio</a>
                <a class="opciones" href="./servicios.html">Servicios</a>
                <a class="opciones" href="./contacto.html">Contacto</a>
            </div>
        </div>

        <div class="header__escritorio-menu">
            <a class="menu-escritorio" href="./portfolio.html">Portfolio</a>
            <a class="menu-escritorio" href="./servicios.html">Servicios</a>
            <a class="menu-escritorio" href="./contacto.html">Contacto</a>
        </div>
</header>`;

el.appendChild(componenteHeaderEl);
menuOculto();
}

