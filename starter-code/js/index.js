var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {
  // Iteration 1.1

  let unitPrice = $product.querySelector(".pu").innerText;
  let price = parseInt(
    unitPrice
      .split("")
      .slice(1)
      .join("")
  );

  let unitQty = $product.querySelector(".qty input").value;
  let unit = parseInt(unitQty);
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

$deleteButtons = document.querySelectorAll("btn btn-delete");

function removeProduct(e) {
  // $deleteButtons.forEach(function(button, index) {
  let toRemove = document.querySelector(".product")[index];
  let currentTarget = document.querySelector("#cart tbody");
  e.currentTarget.removeChild(toRemove);
  // });
}

for (let i = 0; i < $deleteButtons.length; i++) {
  $deleteButtons[i].onclick = removeProduct(i);
}
