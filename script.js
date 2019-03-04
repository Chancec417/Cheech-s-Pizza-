var pizzas = ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Hawaiian" ];
var prices = [7.99,8.99,9.99,10.99,9.99];
 
 
 
//displays pizza types, we might be able to set option.value to a second array 
//with prices for each type of pizzas, I haven't played with it yet
window.onload = addPizzas();
function addPizzas(){
    pizzaTypes = document.getElementById('typeSelect');
    for(var i = 0; i < pizzas.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = pizzas[i];
        option.value = prices[i]; 
        pizzaTypes.appendChild(option);
               
    } 
}
button1 = document.getElementById(`but1`);
button1.onclick = addItems;
 function addItems(){
    var pizzaSelection = document.getElementById(`typeSelect`);
    var price = pizzaSelection.options[pizzaSelection.selectedIndex].value;
    var pizzaQty = document.getElementById('pizzaQty');
    var quantity = pizzaQty.options[pizzaQty.selectedIndex].value;
    var tax = .0765
    var subTotal = quantity * price;
    var total = (subTotal*tax) + subTotal;
    var total2 = total.toFixed(2);    
    window.alert("your total is: $" + total2 +"\n if this is correct please click place order");
    }

    

//Order Button Refreshes page
button2 = document.getElementById(`but2`);
button2.onclick= orderTotal;
function orderTotal() {
    window.alert("Thank you for your order, " + document.getElementById(`name`).value + "\n Your contact number: " +
  document.getElementById(`phone`).value + "\n Your pizza will arrive in 30 minutes or less!");
}
    