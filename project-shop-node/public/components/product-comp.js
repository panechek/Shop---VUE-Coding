const productTemp = `<section class="product">
<div class="center">
    <div class="product-flex">
        <p class="product-title">Fetured Items</p>
        <p class="product-title-text">Shop for items based on what we featured in this week</p>
        <div class="goods-list">
        <item-comp v-for="good of goods" v-bind:good="good" v-on:add="addHandler"></item-comp>
        </div>
        <a href="product.html" class="product-button">Browse All Product</a>
    </div>
</div>
</section>`

Vue.component('product-comp', {
        template: productTemp,
        props: ['goods'],
        methods: {
            addHandler(id_product) {
                this.$emit('add', id_product)
            }
        }
    }

)