let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");
let $create = document.getElementById("create");
let $deleteButtons = document.querySelectorAll(".btn-delete");

function updateSubtot($product) {
  // Iteration 1.1

  let unitPrice = $product.querySelector(".pu").innerText;
  let price = parseFloat(
    unitPrice
      .split("")
      .slice(1)
      .join("")
  );

  let unitQty = $product.querySelector(".qty input").value;
  let unit = parseFloat(unitQty);
  let sub = price * unit;

  $product.querySelector(".subtot span").innerText = `${sub}`;

  return sub;
}

function calcAll() {
  // Iteration 1.2

  document.querySelectorAll(".product").forEach(function(prod) {
    updateSubtot(prod);
  });

  let sum = 0;
  document.querySelectorAll(".product").forEach(function(prod) {
    let currentSub = updateSubtot(prod);
    sum += currentSub;
  });

  document.querySelector("h2 span").innerText = `${sum}`;
}

$calc.onclick = calcAll;

$deleteButtons.forEach(function(button) {
  button.onclick = removeProduct;
});

function removeProduct(event) {
  console.log(event.target.parentNode.parentNode);
  let productRow = event.target.parentNode.parentNode;

  document.querySelector("tbody").removeChild(productRow);

  calcAll();
}

let productClone = document.querySelector(".product").cloneNode(true);

function newProductLine(name, price) {
  let clone = productClone.cloneNode(true);

  clone.querySelector(".name").innerText = `${name}`;
  clone.querySelector(".pu").innerText = `$${price}`;

  clone.querySelector(".btn-delete").onclick = removeProduct;

  return clone;
}

function createProduct() {
  let newName = document.querySelector(".new-name input").value;
  let newPrice = document.querySelector(".new-price input").value;
  let newProduct = newProductLine(newName, newPrice);

  document.querySelector("tbody").appendChild(newProduct);
  console.log(newProduct);
  document.querySelector(".new-name input").value = "";
  document.querySelector(".new-price input").value = "";
}

$create.onclick = createProduct;
