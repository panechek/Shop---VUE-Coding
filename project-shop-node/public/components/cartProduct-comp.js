const cartProductTemp = `<section class="cart">
<div class="center">
    <div class="cart-flex">
        <div class="cart-list">
        <cartitem-comp v-for="good of goods" v-bind:good="good" v-on:delete="deleteHandler"></cartitem-comp>
        <div class="cart-list-buttons>
            <a href="product.html" class="product-button">CLEAR SHOPPING CART</a>
            <a href="product.html" class="product-button">CONTINUE SHOPPING</a>
        </div>
        </div>
    </div>
    <div class="cart-form"></div>
</div>
</section>`

Vue.component('cartproduct-comp', {
        template: cartProductTemp,
        props: ['goods'],
        methods: {
            deleteHandler(id_product) {
                this.$emit('delete', id_product)
            }
        }
    }

)