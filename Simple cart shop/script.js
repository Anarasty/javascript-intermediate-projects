let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Tshirt-1",
    tag: "tshirt1",
    price: 19.99,
    inCart: 0,
  },
  {
    name: "Tshirt-2",
    tag: "tshirt2",
    price: 15.0,
    inCart: 0,
  },
  {
    name: "Tshirt-3",
    tag: "tshirt3",
    price: 25.0,
    inCart: 0,
  },
  {
    name: "Tshirt-4",
    tag: "tshirt4",
    price: 29.99,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function onLoadCardNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector('.cart span').textContent = 1;
  }
}

onLoadCardNumbers();