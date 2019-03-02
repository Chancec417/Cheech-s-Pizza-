


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
    var total = quantity * price;
    window.alert("your total is: $" + total +"\n if this is correct please click place order");
    }




//Need to drop have a drop down menu for the pizza, also it says
//that they can only order one type of pizza, which will make things easier. 

// They will pick the pizza choice

//Then how many they want    

//Could write out the list of Pizza before the choice, 
//then type in choice of pizza, then how many? 

//document.getElementById(`but2`).addEventListener("click", orderTotal);

//Order Button, will call this method, will print out final order list
function orderTotal() {
    tasklist = document.getElementById(`orderList`);
    
       //taskList.innerHTML += "<li>" +;

}