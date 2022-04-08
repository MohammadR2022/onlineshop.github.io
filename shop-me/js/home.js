let product = [{
        id: 1,
        title: "لپ تاپ 15.6 اینچی ایسوس مدل ROG Strix G15 G513IE-AA ",
        price: " ۳۵,۲۵۰,۰۰۰تومان ",
        p: 35250000,
        img: "product/1.jpg",
    },
    {
        id: 2,
        title: " لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506LH-US53 ",
        price: " ۱۲,۶۰۰,۰۰۰ تومان  ",
        p: 12600000,
        img: "product/2.jpg",
    },
    {
        id: 3,
        title: " لپ تاپ 15.6 اینچی ایسوس مدل X543MA-GQ1012 ",
        price: " ۱۰,۱۰۰,۰۰۰ تومان ",
        p: 10100000,
        img: "product/3.jpg",
    },
    {
        id: 4,
        title: " لپ تاپ 14 اینچی ایسوس مدل R465FA-EB028 ",
        price: "  ۲۷,۸۰۰,۰۰۰ تومان  ",
        p: 27800000,
        img: "product/4.jpg",
    },
    {
        id: 5,
        title: " لپ تاپ 15.6 اینچی لنوو مدل Ideapad 3 15IML05-R8 ",
        price: " ۸,۲۰۰,۰۰۰ تومان",
        p: 8200000,
        img: "product/5.jpg",
    },
    {
        id: 6,
        title: " گوشی موبایل شیائومی مدل Redmi Note 10 pro M2101K6G ",
        price: " ۷,۷۷۷,۰۰۰ تومان",
        p: 7777000,
        img: "product/6.jpg",
    },
    {
        id: 7,
        title: " گوشی موبایل شیائومی مدل 11T Pro 2107113SG 5G ",
        price: " ۱۴,۱۹۹,۰۰۰ تومان",
        p: 14199000,
        img: "product/7.jpg",
    },
    {
        id: 8,
        title: "   گوشی موبایل شیائومی مدل Redmi Note 11    ",
        price: " ۵,۴۷۵,۰۰۰ تومان",
        p: 5475000,
        img: "product/8.jpg",
    },
    {
        id: 9,
        title: " گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG ",
        price: " ۷,۳۴۹,۰۰۰ تومان",
        p: 7349000,
        img: "product/9.jpg",
    },
    {
        id: 10,
        title: " گوشی موبایل شیائومی مدل Redmi 9A M2006C3LG ",
        price: " ۲,۵۹۹,۰۰۰ تومان",
        p: 2599000,
        img: "product/10.jpg",
    },
];
let count = document.querySelector("#count");
let number = 0;
let box = [];
let container = document.querySelector(".container");
product.forEach(function(items) {
    container.insertAdjacentHTML(
        "beforeend",
        ' <div class="item"><img src="' +
        items.img +
        '" alt=""><h2>' +
        items.title +
        "</h2><p>" +
        items.price +
        '</p><button data-id="' +
        items.id +
        '">افزودن به سبد خرید</button"></div>'
    );
});
let btn = document.querySelectorAll("button");
////////////////////////////////////////////
function read(event) {
    let x = event.target.dataset.id;
    basket(x);
}
//////////////////////////////////////
btn.forEach(function(button) {
    button.addEventListener("click", read);
});
//////////////////////////////////
function basket(x) {
    number += 1;
    count.innerHTML = number;
    let item = product.find(function(y) {
        return y.id == x;
    });

    box.push(item);
    console.log(box);
    localStorage.setItem("pro", JSON.stringify(box));
    localStorage.setItem("number", number);
}
(function() {
    let z = localStorage.getItem("number");
    count.innerHTML = z;
})();