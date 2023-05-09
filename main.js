//scroll Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//dropDown cart 
// $("#shoppingCart").click(function () {
//   $(".dropdown").show();
//   console.log("this", $("#order"));
// });
// $("#closeDrop").click(function () {
//   $(".dropdown").hide();
//   console.log("this", $("#order"));
// });


var  products = [
  {
    id: 1,
    name: "Redvelvet",
    price: 3600,
    image: "./assets/332340187_5868929159857206_2814745815983228390_n.webp",
  },
  {
    id: 2,
    name: "Sneakers",
    price: 4500,
    image: "./assets/335598893_901112211228583_1819133099813035427_n.webp",
  },
  {
    id: 3,
    name: "Cookie Cake",
    price: 25000,
    image: "./assets/339686413_164924926466530_220648748350103497_n.webp",
  },
  { id: 4, name: "Lemon", price: 4000, image: "./assets/lemon cookie.jpg" },
  { id: 5, name: "Lotus", price: 6000, image: "./assets/lotus.jpg" },
  { id: 6, name: "Oreo", price: 4500, image: "./assets/oreo.jpg" },
];
 
// create the cookies product list
const productList = document.querySelector(".Cookies_List");
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p id="proId">${product.name}</p>
      <p id="proPrice">${product.price}</p>
      
    `;
    //<button class="add-to-cart">add to cart</button>
  productList.appendChild(productDiv);
});

//Search 

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}



function search() {
  var searchTerm = document.getElementById("search").value.toLowerCase();
  var filteredProducts = products.filter(function(product) {
    return product.name.toLowerCase().indexOf(searchTerm) !== -1;
  });

  var searchResultsList = document.getElementById("search-results");

  // Clear list
  searchResultsList.innerHTML = "";

  // Add to list
  filteredProducts.forEach(function(product) {
    var listItem = document.createElement("li");
    listItem.innerText = product.name;
    listItem.addEventListener("click", function() {
      location.href = "#getAll";
    });
    searchResultsList.appendChild(listItem);
  });

  // Display list
  searchResultsList.style.display = "block";
}





