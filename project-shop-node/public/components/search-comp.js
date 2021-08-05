const searchTemp = `<div>
<button v-on:click="seeSearch" class="header__search">
<img src="img/search.png" alt="search"></button>
<template v-if="isVisibleSearch">
<input type="text" v-model="searchText" class="goods-search">
<button v-on:click="filtred" class="search-button">Искать</button>
</template>
</div>`

Vue.component('search-comp', {
    template: searchTemp,
    data() {
        return {
            isVisibleSearch: false,
            searchText: ""
        }
    },


    methods: {
        seeSearch() {
            this.isVisibleSearch = !this.isVisibleSearch;
            console.log(this.isVisibleSearch)
        },
        // filtred() {
        //     const regex = new RegExp(this.searchLine);
        //     this.filteredGoods = this.goods.filter((good) => regex.test(good.title))

        // },
        filtred() {
            this.$emit('filtred', this.searchText)
            console.log(this.searchText)
        }
    }

})