function componenteFooter(el){
    const componenteFooterEl = document.createElement("div");
    componenteFooterEl.innerHTML = `<section class="footer">
    <div class="footer__contenedor">
      <div class="footer__logo">
      <h2 class="footer__logo-h2">DANNY</a></h2>
    </div>
    <div class="footer__iconos">
        <a class="footer__a" href="#" target="_blank">
            <img class="footer_img" src="./img/Frame 24.png" alt="">
            
        </a>
        <a class="footer__a" href="#" target="_blank">
            <img class="footer_img" src="./img/Frame 26.png" alt="">
            
        </a>
        <a class="footer__a" href="#" target="_blank">
            <img class="footer_img" src="./img/Frame 27.png" alt="">
            
        </a>
    </div>   
  </div>
</section>`;

el.appendChild(componenteFooterEl);
}