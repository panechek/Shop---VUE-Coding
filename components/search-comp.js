const searchTemp = `<div><button  class="header__search">
<img src="img/search.png" alt="search"></button>
       <input type="text" class="goods-search">
       <button class="search-button" type="button">Искать</button></div>`


Vue.component('search-comp', {
    template: searchTemp,
    searchLine: '',
    isVisibleSearch: false,
    methods: {
        seeSearch() {
            this.isVisibleSearch = !this.isVisibleSearch
        },

        filtred() {
            const regex = new RegExp(this.searchLine);
            this.filteredGoods = this.goods.filter((good) => regex.test(good.title))
        },
    }
})