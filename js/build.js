let subOrder = [];

    function makeSub() {
      let subTotal = 0;
      let subName = document.getElementById("subName").value;
      let size = document.getElementById("size").value;

      if (size === "Cob") {
        subTotal += 10;
      } else if (size === "Hoagie roll") {
        subTotal += 20;
      } else if (size === "Baguettes") {
        subTotal += 30;
      }

      let baseOption = document.getElementsByName("baseRadio");
      let baseValue;
      for (let i = 0; i < baseOption.length; i++) {
        if (baseOption[i].checked) {
          baseValue = baseOption[i].value;
          subTotal += parseFloat(baseOption[i].dataset.cost);
        }
      }

      let toppingOptions = document.getElementsByName("toppings");
      let topArray = [];
      for (let i = 0; i < toppingOptions.length; i++) {
        if (toppingOptions[i].checked) {
          topArray.push(toppingOptions[i].value);
          subTotal += parseFloat(toppingOptions[i].dataset.cost);
        }
      }

      subOrder.push({
        subName: subName,
        subSize: size,
        subBase: baseValue,
        subToppings: topArray,
        subPrice: subTotal.toFixed(2)
      });

      let oldArray = JSON.parse(localStorage.getItem('subOrders'));
      if (oldArray === null) {
        localStorage.setItem('subOrders', JSON.stringify(subOrder));
      } else {
        let newArray = subOrder.concat(oldArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray));
      }

      document.getElementById("realTimeCost").innerHTML = "R0.00";
      document.getElementById("subForm").reset();
    }

    function realTimeCost() {
      let realTimeValue = 0;
      let size = document.getElementById("size").value;

      if (size === "Cob") {
        realTimeValue += 10;
      } else if (size === "Hoagie roll") {
        realTimeValue += 20;
      } else if (size === "Baguettes") {
        realTimeValue += 30;
      }

      let baseOption = document.getElementsByName("baseRadio");

      for (let i = 0; i < baseOption.length; i++) {
        if (baseOption[i].checked) {
          realTimeValue += parseFloat(baseOption[i].dataset.cost);
        }
      }

      let toppingOptions = document.getElementsByName("toppings");
      for (let i = 0; i < toppingOptions.length; i++) {
        if (toppingOptions[i].checked) {
          realTimeValue += parseFloat(toppingOptions[i].dataset.cost);
        }
      }

      document.getElementById("realTimeCost").innerHTML = "R" + realTimeValue.toFixed(2);
    }

   function displayOrder() {
  let area = document.getElementById("checkoutOrder");
  let total = document.getElementById("totalOut");
  let overallTotal = 0;

  area.innerHTML = "";

  for (let i = 0; i < subOrder.length; i++) {
    let name = subOrder[i].subName;
    let size = subOrder[i].subSize;
    let base = subOrder[i].subBase;
    let toppings = subOrder[i].subToppings;
    let cost = subOrder[i].subPrice;

    overallTotal += parseFloat(cost);

    area.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h3 class="card-title">${name}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Base:</strong> ${base}</li>
          <li class="list-group-item"><strong>Size:</strong> ${size}</li>
          <li class="list-group-item"><strong>Toppings:</strong> ${toppings.join(", ")}</li>
          <li class="list-group-item"><strong>Price:</strong> R${cost}</li>
        </ul>
      </div>`;
  }

  total.innerHTML = "Total: R" + overallTotal.toFixed(2);
}

