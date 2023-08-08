//Custom changes in JS
function showOfferPopup() {
  document.getElementById("offerPopup").style.display = "block";
}

function hideOfferPopup() {
  document.getElementById("offerPopup").style.display = "none";
}


// Shopping Cart
let cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  alert('Product added to cart!');
}

// Checkout
function goToCheckout() {
  if (cartItems.length === 0) {
    alert('Your cart is empty. Please add products to the cart first.');
  } else {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'checkout.html';
  }
}

// JavaScript for handling the checkout process
function completePurchase() {
  // Validate and process form data (not shown in this basic example)
  alert('Thank you for your purchase!');
  localStorage.removeItem('cartItems');
  window.location.href = 'index.html'; // Redirect to the homepage after purchase
}


// This function will load global footer and header
$(document).ready(function() {
  $(function(){
    // Load header
    $("#header").load("header.html");
  
    // Load footer
    $("#footer").load("footer.html");

  });
});