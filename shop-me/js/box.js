let product = JSON.parse(localStorage.getItem("pro"));
console.log(product);
let table = document.querySelector("table");
console.log(table.parentElement);
let count = 0;
let addPrice = document.querySelector("#price");
product.forEach(function(item) {
    table.insertAdjacentHTML(
        "beforeend",
        "<tr><td>" +
        item.title +
        "</td><td>" +
        item.price +
        '</td><td><button id="delete" data-id="' +
        item.id +
        '">حذف محصول</button></td></tr>'
    );
    count += item.p;
    addPrice.innerHTML = " تومان" + count;
});

let allDelete = document.querySelector("#alldelete");
allDelete.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});
let deleteBtn = document.querySelectorAll("#delete");
deleteBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        let id = event.target.dataset.id;
        toDelete(id);
    });
});

function toDelete(id) {
    let indexOfItem = product.findIndex(function(item) {
        return item.id == id;
    });
    product.splice(indexOfItem, 1);
    localStorage.clear();
    localStorage.setItem("pro", JSON.stringify(product));
    location.reload();
}