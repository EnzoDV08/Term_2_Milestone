let overallTotal = 0;
let subOrder = [];

function getData() {
  // Retrieving the string
  let retString = localStorage.getItem("subOrders");

  // Retrieved array
  subOrder = JSON.parse(retString);
  console.log(subOrder);

  let area = document.getElementById("checkoutOrder");
  let total = document.getElementById("totalOut");

  area.innerHTML = "";

  for (let i = 0; i < subOrder.length; i++) {
    let name = subOrder[i].subName;
    let size = subOrder[i].subSize;
    let base = subOrder[i].subBase;
    let toppings = subOrder[i].subToppings;
    let cost = parseFloat(subOrder[i].subPrice);

    overallTotal += cost;

    area.innerHTML += `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">${name}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Base:</strong> ${base}</li>
        <li class="list-group-item"><strong>Size:</strong> ${size}</li>
        <li class="list-group-item"><strong>Toppings:</strong> ${toppings.join(", ")}</li>
        <li class="list-group-item"><strong>R${cost.toFixed(2)}</strong></li>
      </ul>
    </div>`;
  }

  total.innerHTML = "R" + overallTotal.toFixed(2);
}

let discountRun = false;

function discount() {
  let total = document.getElementById("totalOut");
  let discountNum = document.getElementById("promo").value;

  if (discountRun === false) {
    if (discountNum === "#1010" || discountNum === "#2020" || discountNum === "#3030") {
      console.log('discount');
      overallTotal -= 10;
      discountRun = true;
    } else {
      console.log("Wrong Code ;)");
    }

    console.log(overallTotal);
    total.innerHTML = "R" + overallTotal.toFixed(2);
  } else {
    console.log("Runned");
  }
}

function showAlert() {
  alert("Thank you for your payment");
  displayOrder(); // Call the displayOrder() function to show the card on the checkout page
}
