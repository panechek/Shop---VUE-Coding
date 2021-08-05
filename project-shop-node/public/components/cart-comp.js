const cartTemp = `<div><a style="padding-right: 0;" href="cart.html" class="header__cart"><img src="img/cart.svg"
alt="cart"><p v-if="cart.length>0" class="cart-count">{{ cart.length }}<p></a></div>`

Vue.component('cart-comp', {
    template: cartTemp,
    props: ['cart']
})