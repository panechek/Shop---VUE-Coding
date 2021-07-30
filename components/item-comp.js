const itemTemp = `<div class="goods-item"><a href="product.html" class="item"><img :src="good.img" class="item-img"><div class="item-text"><p class="item-name">{{good.title}}</p><p class="item-description">{{good.description}}</p><p class="item-price">{{good.price}}</p></div></a><div class="box-add">
<a v-on:click="addHandler" class="add" href="#"><img class="add-img" src="img/cart_add.svg" alt="cart-img">Add to cart</a>
</div></div>`

Vue.component('item-comp', {
    template: itemTemp,
    props: ['good'],
    methods: {
        addHandler() {
            this.$emit('add', this.good.id)
        }
    }
})