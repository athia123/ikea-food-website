let popup = document.getElementById("popup");

function openPopup(){

    var random = Math.random();
    let num = Math.floor(random * 10000000000);
    document.getElementById("receipt").innerHTML = "Your Receipt ID : " +num
    popup.classList.add("open-popup");
}

const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1;

var price_string = document.getElementById("price-food").innerHTML;
const price = Number(price_string);

let totalPrice = 0;

plus.addEventListener("click", () => {

    if(a < 10){
        a++;
    }
    console.log(typeof price);
    totalPrice = a * price;
    num.innerText = a;
    document.getElementById("total-price").innerHTML = "Rp. " +totalPrice
});

minus.addEventListener("click", () => {

    if (a > 1){
        a--;
    }
    console.log(typeof price);
    totalPrice = a * price;
    num.innerText = a;
    document.getElementById("total-price").innerHTML = "Rp. " +totalPrice
})