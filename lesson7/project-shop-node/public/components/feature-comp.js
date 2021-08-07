const featureTemp = ` <div class="feature">
<div class="center">
    <div class="feature-flex">
        <article class="feature-item">
            <img src="img/Forma1.svg" alt="forma">
            <p class="feature-title">Free Delivery</p>
            <p class="feature-text">Worldwide delivery on all. Authorit tively morph next-generation innov
                tion
                with extensive models.</p>
        </article>
        <article class="feature-item">
            <img src="img/Forma2.svg" alt="forma">
            <p class="feature-title">Sales & discounts</p>
            <p class="feature-text">Worldwide delivery on all. Authorit tively morph next-generation innov
                tion
                with extensive models.</p>
        </article>
        <article class="feature-item">
            <img src="img/Forma3.svg" alt="forma">
            <p class="feature-title">Quality assurance</p>
            <p class="feature-text">Worldwide delivery on all. Authorit tively morph next-generation innov
                tion
                with extensive models.</p>
        </article>
    </div>
</div>
</div>`

Vue.component('feature-comp', {
    template: featureTemp
})