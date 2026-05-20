// js/app.js

// REGISTER
const registerForm = document.getElementById('registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Գրանցումը հաջողվեց 🌿');

    window.location.href = 'login.html';
  });
}


// LOGIN (եթե login.html ունես)

const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
      alert('Դուք դեռ գրանցված չեք ❌');
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'welcome.html';
    } else {
      alert('Սխալ Email կամ Password ❌');
    }
  });
}
//////
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

updateCart();

function buy(productName) {
  cart.push(productName);

  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-count").innerText = cart.length;

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${item}
      <button onclick="removeItem(${index})">❌</button>
    `;

    cartItems.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-count").innerText = cart.length;

  updateCart();
}

const cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click", () => {
  document.getElementById("cartModal").style.display = "flex";
});

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("cartModal");

  if (e.target === modal) {
    modal.style.display = "none";
  }
});





// function buy(productName) {
  
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   cart.push(productName);

//   localStorage.setItem('cart', JSON.stringify(cart));

//   alert(productName + " ավելացվեց զամբյուղում 🛒");
// }
// //////////////////////
// function showCart() {
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
//   console.log("Cart:", cart);
//   alert("Քո զամբյուղը՝ \n" + cart.join("\n"));
// }
// //////
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // ➕ Ավելացնել զամբյուղ
// function buy(productName) {
//   cart.push(productName);

//   localStorage.setItem("cart", JSON.stringify(cart));

//   updateCart();
//   alert(productName + " ավելացվեց զամբյուղ 🛒");
// }

// // 🔄 Թարմացնել count-ը
// function updateCart() {
//   document.getElementById("cart-count").innerText = cart.length;
// }

// // 🚀 սկզբնական load
// updateCart();
// /////modal


// function buy(productName) {
//   cart.push(productName);

//   document.getElementById("cart-count").innerText = cart.length;

//   updateCart();
// }

// function updateCart() {
//   const cartItems = document.getElementById("cart-items");

//   cartItems.innerHTML = "";

//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerText = item;
//     cartItems.appendChild(li);
//   });
// }

// const cartBtn = document.querySelector(".cart-btn");

// cartBtn.addEventListener("click", () => {
//   document.getElementById("cartModal").style.display = "flex";
// });

// function closeCart() {
//   document.getElementById("cartModal").style.display = "none";
// }

// window.addEventListener("click", (e) => {
//   const modal = document.getElementById("cartModal");

//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });