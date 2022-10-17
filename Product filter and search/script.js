let products = {
  data: [
    {
      productName: "Apple Airpods Pro 2nd Generation",
      category: "Airpods",
      price: "250",
      image: "airpods_pro_2gen.png",
    },
    {
      productName: "Apple Watch SE GPS 40mm Midnight",
      category: "Watch",
      price: "400",
      image: "apple_watch_se_midnight.png",
    },
    {
      productName: "Apple Watch SE GPS 40mm Silver",
      category: "Watch",
      price: "400",
      image: "apple_watch_se_silver.png",
    },
    {
      productName: "Apple Watch SE GPS 40mm Starlight",
      category: "Watch",
      price: "400",
      image: "apple_watch_se_starlight.png",
    },
    {
      productName: "Apple IPhone 14 Blue",
      category: "IPhone",
      price: "1100",
      image: "iphone14_blue.png",
    },
    {
      productName: "Apple IPhone 14 Midnight",
      category: "IPhone",
      price: "1100",
      image: "iphone14_midnight.png",
    },
    {
      productName: "Apple IPhone 14 Purple",
      category: "IPhone",
      price: "1100",
      image: "iphone14_purple.png",
    },
    {
      productName: "Apple IPhone 14 Red",
      category: "IPhone",
      price: "1100",
      image: "iphone14_red.png",
    },
    {
      productName: "Apple Macbook Pro 14",
      category: "Macbook",
      price: "2500",
      image: "macbook_pro_14.png",
    },
    {
      productName: "Apple Macbook Pro 16",
      category: "Macbook",
      price: "2800",
      image: "macbook_pro_16.png",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equeals textContent
    if (value.toUpperCase() == button.textContent.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards om 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  // loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if(element.textContent.includes(searchInput.toUpperCase())){
        //display matching card
        cards[index].classList.remove('hide');
    } else {
        //hide others
        cards[index].classList.add('hide');
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
