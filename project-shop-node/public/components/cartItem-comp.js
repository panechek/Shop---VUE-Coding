const cartItemTemp = `<div class="goods-item"><a href="product.html" class="item"><img :src="good.img" class="item-img"><div class="item-text"><p class="item-name">{{good.title}}</p><p class="item-description">{{good.description}}</p><p class="item-price">{{good.price}}</p></div></a><div class="box-add">
<button v-on:click="deleteHandler" class="add" href="#"><img class="add-img" src="img/cart_add.svg" alt="cart-img">Add to cart</button>
</div></div>`

Vue.component('cartitem-comp', {
    template: cartItemTemp,
    props: ['good'],
    methods: {
        deleteHandler() {
            this.$emit('delete', this.good.id_product)
        }
    }
})