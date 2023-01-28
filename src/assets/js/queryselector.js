document.querySelectorAll(".product_container img").forEach(product_card =>  {
    product_card.onclick = () => {
    document.querySelector(".popup_image").style.display = "block";
    document.querySelector(".popup_image img").src = product_card.getAttribute("src");
}
});

    document.querySelector(".popup_image span").onclick = () => {
    document.querySelector(".popup_image ").style.display = "none";
}


/*function showProductDetails(element) {
    var productImg = element.previousElementSibling;
    var name = productImg.getAttribute("data-name");
    var price = productImg.getAttribute("data-price");
    document.querySelector("#product-details-img").src = productImg.src;
    document.querySelector("#product-details-name").innerHTML = name;
    document.querySelector("#product-details-price").innerHTML = price;
    document.querySelector(".product-details-popup").style.display = "block";
}

function hideProductDetails() {
    document.querySelector(".product-details-popup").style.display = "none";
}

function addToCart() {
    // Add code to add the product to the cart
    alert("Product added to cart!");
}
*/



function showPopup(element) {
    var productImg = element.previousElementSibling;
    document.querySelector("#popup-img").src = productImg.src;
    document.querySelector(".popup_image").style.display = "block";
}


  