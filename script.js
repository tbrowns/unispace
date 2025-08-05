const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");
//Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close cart
closecart.onclick = () => {
    cart.classList.remove("active");
};
//cart working JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Making Function
function ready(){
    //Remove Items From Cart
    var removecartButtons = document.getElementsByClassName('cart-remove');
    console.log(removecartButtons);
    for (var i = 0; i < removecartButtons.length; i++){
        var button = removecartButtons[i];
        button.addEventListener('click', removecartItem);
    }
    //Quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //Add To cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

//Remove Items From cart
function removecartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Quantity Changes
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
// Add To Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        alert("You have already add this item to cart");
        return;
    }
}
var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                              <div class="cart-product-title">${title}</div>
                              <div class="cart-price">${price}</div>
                              <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- Remove cart-->
                        <i class="fa-solid fa-trash cart-remove"></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
   .getElementsByClassName("cart-remove")[0]
   .addEventListener("click", removecartItem); 
cartShopBox
   .getElementsByClassName("cart-quantity")[0]
   .addEventListener("change", quantityChanged);                     

//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
        //If price  Contain some cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    }
}




let images = [
    "./img/home/gazebo-palette-outdoor.jpg",
    "./img/home/cabin-wall-wardrobe.jpg",
    "./img/home/home-palette-bench.jpg",
    "./img/home/palette-fencing-farm.jpg",
    "./img/home/planters-fencing-4.png",
    "./img/home/stone-wall-window.jpg",
    "./img/home/tree-bench-pal.jpg",
    "./img/home/wall-cabinet-shelves.jpg",
    "./img/home/wardrobe-cabinet-wall.jpg"
  ];
  
  let currentIndex = 0;
  
  function nextImage() {
    let imgElement = document.querySelector(".pro");
    imgElement.src = images[currentIndex];
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }
  
  setInterval(nextImage, 3000); // Change the image every 3 seconds
  
  let imgElement = document.querySelector(".pro");
  imgElement.addEventListener("click", function() {
    window.location.href = "index.html";
  });
  
    




