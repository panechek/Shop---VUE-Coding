const cartProductTemp = `<section class="product">
<div class="center">
    <div class="product-flex">
        <p class="product-title">Fetured Items</p>
        <p class="product-title-text">Shop for items based on what we featured in this week</p>
        <div class="goods-list">
        <cartitem-comp v-for="good of goods" v-bind:good="good" v-on:delete="deleteHandler"></cartitem-comp>
        </div>
        <a href="product.html" class="product-button">Browse All Product</a>
    </div>
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