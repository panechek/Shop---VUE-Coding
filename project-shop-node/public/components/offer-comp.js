const offerTemp = `<div class="offer">
<div class="center">
    <div class="offer-top">
        <a href="#" class="offer-top-item">
            <img src="img/offer1.jpg" alt=""
                style="position: absolute; filter: brightness(50%); z-index: -1;">
            <p class="offer-top-item-text">30% OFF</p>
            <p class="offer-top-item-text-pink">FOR WOMEN</p>
        </a>
        <a href="#" class="offer-top-item">
            <img src="img/offer2.jpg" alt=""
                style="position: absolute; filter: brightness(50%); z-index: -1;">
            <p class="offer-top-item-text">HOT DEAL</p>
            <p class="offer-top-item-text-pink">FOR MEN</p>
        </a>
        <a href="#" class="offer-top-item">
            <img src="img/offer3.jpg" alt=""
                style="position: absolute; filter: brightness(50%); z-index: -1;">
            <p class="offer-top-item-text">NEW ARRIVALS</p>
            <p class="offer-top-item-text-pink">FOR KIDS</p>
        </a>
    </div>
    <a href="#" class="offer-bottom">
        <img src="img/offer4.jpg" alt="" style="position: absolute; filter: brightness(50%); z-index: -1;">
        <p class="offer-top-item-text">LUXIROUS & TRENDY</p>
        <p class="offer-top-item-text-pink">ACCESORIES</p>
    </a>
</div>
</div>`

Vue.component('offer-comp', {
    template: offerTemp
})