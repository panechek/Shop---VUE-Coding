 const vue = new Vue({
     el: "#app",
     data: {
         goods: [],
         filteredGoods: [],
         searchLine: '',
         newTitle: '',
         newPrice: 0,
         cart: [],
         id: '',
     },

     methods: {

         filtred() {
             const regex = new RegExp(this.searchLine);
             this.filteredGoods = this.goods.filter((good) => regex.test(good.title))
         },

         addToCart(e) {
             this.cart.push(this.goods[e.target.id - 101]);
             console.log(this.cart)
         },




     },

     mounted() {
         fetch('catalog.json')
             .then((response) => response.json())
             .then((response) => this.goods = response)
             .then((response) => this.filteredGoods = response)
     }



 });