const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar)  {
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}
const buttons = document.querySelectorAll('.normal');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    
    alert('Button clicked!');
  });
});


const whiteButtons = document.querySelectorAll('.white');


whiteButtons.forEach(button => {
  button.addEventListener('click', function() {
    
    alert('gift voucher/free delivery clicked!');
  });
});

function addToCart(event) {
  event.preventDefault();
  alert("Added to cart successfully");
  window.location.href = 'cart.html';
}

document.addEventListener('DOMContentLoaded', function () {
  var cartButtons = document.querySelectorAll('.cart-button');
  cartButtons.forEach(function(button) {
      button.addEventListener('click', addToCart);
  });
});
function addToCart(event) {
  event.preventDefault();
  const productElement = event.target.closest('.pro');
  const product = {
    image: productElement.querySelector('img').src,
      product: productElement.querySelector('h5').innerText,
      quantity: productElement.querySelector('h5').innerText,
      price: productElement.querySelector('h4').innerText
     
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert("Added to cart successfully");
  window.location.href = 'cart.html';
}

document.addEventListener('DOMContentLoaded', function () {
  const cartButtons = document.querySelectorAll('.cart-button');
  cartButtons.forEach(function(button) {
      button.addEventListener('click', addToCart);
  });
});

function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" width="100">
          <div>
              <h5>${item.name}</h5>
              <p>${item.price}</p>
              <button onclick="removeFromCart(${index})">Remove</button>
          </div>
      `;

      cartContainer.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

document.addEventListener('DOMContentLoaded', displayCart);