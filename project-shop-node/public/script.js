
class item {
    constructor({id_product:id, title, price, img, description}) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._img = img;
        this._description = description;
        // items.push(this);

        } 
    getPrice() {
        return this._price;
    }

    render() {
        return `<div class="goods-item"><img src="${this._img}"><div class="item-text"><p class="item-name">${this._title}</p><p class="item-description">${this._description}</p><p class="item-price">${this._price}</p></div></div>`;
    }
}

class ItemInCart extends item {
    constructor(title, price, quantity = 1) {
        super(title, price);

        this._quantity = quantity;
    }

    getPrice() {
        return this._price * this._quantity;
    }

    addItem(){
        return this._quantity++
    }

    removeItem(){
        return this._quantity--
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>`;
    }
}

class ItemList {
    constructor (container) {
        this._items = [];
        this._$itemsListContainer = container
    }

    add(item) {
        this._items.push(item);
    }

    renderItemsList() {
        let itemsList = this._items.map(
                item => item.render()
            ).join(' ');
    
        this._$itemsListContainer.insertAdjacentHTML('beforeend', itemsList);
    }
}

class ItemListCart  {
    constructor (container,summ=0) {
        this._items = [];
        this._$itemsListContainer = container;
        this._summ = summ;
    }

    renderItemsInCartList() {
        let itemsList = this._items.map(
            ItemInCart => ItemInCart.render()
            ).join(' ');
    
        this._$itemsListContainer.insertAdjacentHTML('beforeend', itemsList);
    }

    getSumm(){
        return ItemInCart.getPrice+this._summ;
    }

    
}

const list = new ItemList(document.querySelector('.goods-list'))

fetch('catalog.json')
    .then((response) => {
        return response.json()
    })
    .then( (response) => {
        response.forEach(newItem => {
            list.add(new item(newItem));
        });
        console.log(list);
        list.renderItemsList();
    })
    .catch( (err) => {
        console.log(err)
    })


// list.renderItemsList();

const cartList = new ItemListCart ([
    new item("ELLERY X M'O CAPSULE", "$52.00", "img/item1.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."),
    new item("ELLERY X M'O CAPSULE","$52.00","img/item2.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."),
], document.querySelector('.cart-list'))
cartList.renderItemsInCartList();
console.log(cartList);

// const $goodsList = document.querySelector('.goods-list');
  
// const renderGoodsItem = ({ img, title, description, price }) => {
//     return `<div class="goods-item"><img src="${img}"><div class="item-text"><p class="item-name">${title}</p><p class="item-description">${description}</p><p class="item-price">${price}</p></div></div>`;
// };
  
// const renderGoodsList = (list = items) => {
//     let goodsList = list.map(
//             item => renderGoodsItem(item)
//         ).join(" ");

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }
  
