 const vue = new Vue({
     el: "#app",
     data() {
         return {
             goods: [],
             filteredGoods: [],


             cart: [],
             count: 0

         }
     },
     methods: {

         filtred(searchText) {
             console.log(searchText);
             const regex = new RegExp(searchText);
             this.filteredGoods = this.goods.filter((good) => regex.test(good.title));
             console.log(this.filteredGoods)
         },

         addHandler(id_product) {
             const good = this.goods.find(good => good.id_product === id_product)
             this.cart.push(good)
             fetch('/cart', {
                 method: 'POST',
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify(good)
             })



             console.log(this.cart)

         },
         deleteHandler(id_product) {
             const good = this.goods.find(good => good.id_product === id_product)
             this.cart.splice(this.cart.findIndex(good => good.id_product === id_product), 1)

             fetch('/cart', {
                 method: 'PUT',
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify(good),


             })


         },

         clear() {
             this.cart.splice(0, (this.cart.length + 1))

             fetch('/cart', {
                 method: 'DELETE',
                 headers: {
                     "Content-Type": "application/json"
                 },



             })

         }


     },

     mounted() {
         fetch('/catalog')
             .then((response) => response.json())
             .then((response) => this.goods = response)
             .then((response) => this.filteredGoods = response)

         fetch('/cart')
             .then((response) => response.json())
             .then((response) => this.cart = response)
     }



 })