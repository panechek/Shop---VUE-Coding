const itemTemp = `<div class="goods-item"><a href="product.html"><img :src="good.img"><div class="item-text"><p class="item-name">{{good.title}}</p><p class="item-description">{{good.description}}</p><p class="item-price">{{good.price}}</p></div></a></div>`

Vue.component('item-comp', {
    template: itemTemp,
    props: ['good']
})