 const vue = new Vue({
     el: "#app",
     data: {
         goods: [],
         filteredGoods: [],


         cart: [],
         id: '',

     },

     methods: {

         filtred(searchText) {
             console.log(searchText);
             const regex = new RegExp(searchText);
             this.filteredGoods = this.goods.filter((good) => regex.test(good.title));
             console.log(this.filteredGoods)
         },

         addHandler(id) {
             const good = this.goods.find(good => good.id === id)
             this.cart.push(good);

             console.log(this.cart)
         }






     },

     mounted() {
         fetch('catalog.json')
             .then((response) => response.json())
             .then((response) => this.goods = response)
             .then((response) => this.filteredGoods = response)
     }



 });