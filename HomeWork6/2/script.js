var images = document.querySelectorAll("img");

function Item(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
}

var item1 = new Item("Футболка 1", 1360, "shop/item1.jpg");
var item2 = new Item("Футболка 2", 3670, "shop/item2.jpg");
var item3 = new Item("Футболка 3", 3990, "shop/item3.jpg");
var item4 = new Item("Футболка 4", 4045, "shop/item4.jpg");
var item5 = new Item("Футболка 5", 5620, "shop/item5.jpg");
var item6 = new Item("Футболка 6", 11890, "shop/item6.jpg");
var basket = [];
var items = [item1, item2, item3, item4, item5, item6];
console.log(items);

var shop = document.getElementById("shop");
var out = "";
for (var key in items) {
    var div = document.createElement("div");
    div.classList.add("item", "item" + key);
    out = "<p>" + items[key].title + "</p>";
    out += "<p>" + items[key].price + " руб.</p>";
    out += "<img src=" + items[key].img + " >";
    out += "<button>Добавить в Корзину</button>";
    div.innerHTML = out;

    shop.append(div);

}
var sum = 0;
var summOut = document.getElementById("summ");

var buttons = document.querySelectorAll("button");
console.log(buttons);
for (var j = 0; j < 6; j++) {
    buttons[j].id = "b" + j;
    buttons[j].onclick = function (ev) {
        var good = items[ev.target.id[1]];
        sum = 0;
        if (basket.indexOf(good) === -1) {

            basket.push(good);
            good.count = 1;
        } else {
            good.count++;
        }
        console.log(basket);


        var chek = document.getElementById("basket");
        var itemBasket = "";
        chek.innerHTML = "";
        for (var k in basket) {
            var div = document.createElement("div");
            // div.classList.add("item","item"+key);
            itemBasket = "<p>" + basket[k].title + "</p>";
            itemBasket += "<p>" + basket[k].price + " руб.</p>";
            itemBasket += "<img src=" + basket[k].img + " >";
            itemBasket += "<p>Кол-во: " + basket[k].count + "</p>";
            div.innerHTML = itemBasket;
            chek.append(div);
        }

        for (var g in basket) {
            sum = sum + basket[g].price * basket[g].count;
            summOut.innerHTML = "";
            summOut.append(document.createTextNode("Сумма: " + sum + " рублей"));
        }
    }
}