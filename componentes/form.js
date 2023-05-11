function componenteContact(el){
    const componenteFormEl = document.createElement("div");

    componenteFormEl.innerHTML=`<section class="contacto">
    <div class="contacto__titulo">
        <h2 class="contacto__h2">Escribime</h2>
    </div>
   
    <form action="" class="contacto__form">
    
    <div class="contacto__div-label">
        <label class="contacto__label" for="">Nombre</label>
    </div>
    <input class="input" type="text">

    <div class="contacto__div-label">
        <label class="contacto__label" for="">Email</label>
    </div>
    <input class="input" type="email">

    <div class="contacto__div-label">
        <label class="contacto__label" for="">Mensaje</label>
    </div>
    <textarea class="textarea" name="" id="" cols="30" rows="10"></textarea>

    <div class="contacto__button">
        <button class="button">Enviar <img class="contacto__img" src="./img/Vector (6).png" alt=""></button>
    </div>
    
   </form>
</section>`;

el.appendChild(componenteFormEl);
}