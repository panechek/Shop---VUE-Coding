 const vue = new Vue({
     el: "#app",
     data() {
         return {
             goods: [],
             filteredGoods: [],


             cart: [],
             id: '',

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
             //  this.cart.push(good);
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

             const removeIndex = this.cart.map(function (item) {
                 return item.id;
             }).indexOf(id_product);
             this.cart.splice(removeIndex, 1);
             fetch('/cart', {
                 method: 'DELETE',
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify(good)
             })
             fetch('/cart')
                 .then((response) => response.json())
                 .then((response) => this.cart = response)


             console.log(this.cart)

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



 });