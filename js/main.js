// cart = () => {
//     let cartTotal = JSON.parse(localStorage.getItem('key'))
//     console.log(cartTotal.length);
//     let totalOrder = document.getElementById ("totalOrder");
//     totalOrder.innerHTML += `
        
//         <div class="card">
//             ${cartTotal.length}
//         </div>`
// }

bun1 = () => {   
    let pizzaOrder = [
        {pizzaName: 'king', pizzaSize: 'bigg', pizzaBase: 'bread', pizzaPrice: 150, pizzaToppings:['food', 'pie']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('key'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('key', JSON.stringify(pizzaOrder))
    } else {
        let newArray = pizzaOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('key', JSON.stringify(newArray))
    }

}

bun2 = () => {   
    let pizzaOrder = [
        {pizzaName: 'queen', pizzaSize: 'bigg', pizzaBase: 'asd', pizzaPrice: 150, pizzaToppings:['food']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('key'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('key', JSON.stringify(pizzaOrder))
    } else {
        let newArray = pizzaOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('key', JSON.stringify(newArray))
    }
    // localStorage.clear();
}

