const items = [];

class item {
    constructor(title, price, img, description) {
        this.title = title;
        this.price = price;
        // this.count = 0;
        this.img = img;
        this.description = description;
        items.push(this);

        } 
    }

let item1 = new item("ELLERY X M'O CAPSULE", "$52.00", "img/item1.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item2 = new item("ELLERY X M'O CAPSULE","$52.00","img/item2.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item3 = new item("ELLERY X M'O CAPSULE","$52.00","img/item3.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item4 = new item("ELLERY X M'O CAPSULE","$52.00","img/item4.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item5 = new item("ELLERY X M'O CAPSULE","$52.00","img/item5.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
 let item6 = new item("ELLERY X M'O CAPSULE","$52.00","img/item6.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item7 = new item("ELLERY X M'O CAPSULE","$52.00","img/item7.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item8 = new item("ELLERY X M'O CAPSULE","$52.00","img/item8.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");
let item9 = new item("ELLERY X M'O CAPSULE","$52.00","img/item9.jpg", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.");

console.log(items);

const $goodsList = document.querySelector('.goods-list');
  
const renderGoodsItem = ({ img, title, description, price }) => {
    return `<div class="goods-item"><img src="${img}"><div class="item-text"><p class="item-name">${title}</p><p class="item-description">${description}</p><p class="item-price">${price}</p></div></div>`;
};
  
const renderGoodsList = (list = items) => {
    let goodsList = list.map(
            item => renderGoodsItem(item)
        ).join(" ");

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
  
renderGoodsList();