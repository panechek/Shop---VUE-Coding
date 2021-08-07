const cartItemTemp = `<div class="cart-item">
<a href="product.html">
<img :src="good.img" class="cart-item-img">
</a>
<div class="cart-item-info">
<p class="cart-item-name">{{good.title}}</p>
<p class="cart-item-text">Price:<span class="cart-item-pink"> {{good.price}}</span></p>
<p class="cart-item-text">Color: Red</p>
<p class="cart-item-text">Size: Xl	</p>
<p class="cart-item-text">Quantity:	<span class="cart-item-count"> {{good.count}}</span></p>
</div>

<div class="cart-item-delete">
<button v-on:click="deleteHandler" class="cart-delete" href="#">x</button>
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