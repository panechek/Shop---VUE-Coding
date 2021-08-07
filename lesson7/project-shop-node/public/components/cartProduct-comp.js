const cartProductTemp = `<section class="cart">
<div class="center">
    <div class="cart-flex" v-if="goods.length>0">
        
        <div  class="cart-left">
            <div class="cart-list">
                <cartitem-comp v-for="good of goods" v-bind:good="good" v-on:delete="deleteHandler"></cartitem-comp>
            </div>
            <div class="cart-list-buttons">
                <button v-on:click="clear">CLEAR SHOPPING CART</button>
                <a href="catalog.html">CONTINUE SHOPPING</a>
            </div>
        </div>
        <div class="cart-right">
            <div class="cart-form">
        
            </div>
        </div>
    </div>
    <div v-if="goods.length==0">
            <p>Ваша корзина пуста</p>
    </div>
</div>
</section>`

Vue.component('cartproduct-comp', {
        template: cartProductTemp,
        props: ['goods'],
        methods: {
            deleteHandler(id_product) {
                this.$emit('delete', id_product)
            },
            clear() {
                this.$emit('clear')
            },
        }
    }

)