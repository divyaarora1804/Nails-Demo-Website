const products = [
    { name: "Glue-On Fake Nails (Set of 24)", image: "product1.jpg", price: "200" },
    { name: "Press-On Fake Nails (Set of 20)", image: "product2.jpg", price: "150" },
    { name: "Nail Art Stickers (Pack of 50)", image: "product3.jpg", price: "120" },
    { name: "Nail Polish Remover", image: "product4.jpg", price: "50" },
    { name: "Nail Brushes Set (Set of 15)", image: "product5.jpg", price: "250" }
];
function displayProducts() {
    const productListContainer = document.getElementById("productList");
    productListContainer.innerHTML = "";

    
    products.forEach(product => {
       
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        
        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;
    
        const nameElement = document.createElement("h3");
        nameElement.textContent = product.name;

        const priceElement = document.createElement("p");
        priceElement.textContent = "Price: Rs. " + product.price;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";

        addToCartButton.addEventListener("click", function() {
            incrementCartCount();
        });

        productDiv.appendChild(imageElement);
        productDiv.appendChild(nameElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(addToCartButton);

        productListContainer.appendChild(productDiv);
    });
}
function incrementCartCount() {
    const cartCountElement = document.getElementById("cartCount");
    let count = parseInt(cartCountElement.textContent);
    count++;
    cartCountElement.textContent = count;
}
displayProducts();
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function() {
    mainNav.style.display = mainNav.style.display === "block" ? "none" : "block";
});
