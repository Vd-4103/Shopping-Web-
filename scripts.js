let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  let totalPrice = 0;
  cart.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(listItem);
    totalPrice += product.price;
  });
  document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.name;
    const productPrice = parseFloat(button.dataset.price);
    addToCart(productName, productPrice);
  });
});

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length > 0) {
    alert('Checkout complete. Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
  } else {
    alert('Your cart is empty. Add some items before checking out.');
  }
});
// Function to handle navigation to the home page
function navigateToHome() {
  // Replace this with the actual URL of your home page
  window.location.href = 'https://www.croma.com/phones-wearables/mobile-phones/c/10';
}
// Add event listeners to the navigation links
document.getElementById('home-link').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  navigateToHome();
});

// Function to handle navigation to the products page
function navigateToProducts() {
  // Replace this with the actual URL of your products page
  window.location.href = 'https://www.91mobiles.com/list-of-phones/super-amoled-display-mobiles';
}

document.getElementById('products-link').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  navigateToProducts();
});
// Function to handle navigation to the contact page
function navigateToContact() {
  // Replace this with the actual URL of your contact page
  window.location.href = 'contact.html';
}
document.getElementById('contact-link').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  navigateToContact();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form data
  const formData = new FormData(this);

  // Construct an object from the form data
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });

  // You can now use formDataObj to send the form data to your server using AJAX or fetch
  // For example:
  fetch('your-server-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formDataObj),
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    document.getElementById('responseMessage').textContent = 'Message sent successfully!';
    // You can also reset the form here if needed
    // this.reset();
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    document.getElementById('responseMessage').textContent = 'An error occurred. Please try again later.';
  });
});
