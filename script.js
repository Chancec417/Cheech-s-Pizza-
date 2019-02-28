


var pizzas = ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Hawaiian" ];

//document.getElementById(`but1`).addEventListener("click", addItems);


//displays pizza types, we might be able to set option.value to a second array 
//with prices for each type of pizzas, I haven't played with it yet
window.onload = addPizzas();
function addPizzas(){
    pizzaTypes = document.getElementById('typeSelect');
    for(var i = 0; i < pizzas.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = pizzas[i];
        option.value = pizzas[i]; //might be able to store prices here?
        pizzaTypes.appendChild(option);
              
    } 
}


function addItems() {
    taskList = document.getElementById(`list`);
    
}



//Need to drop have a drop down menu for the pizza, also it says
//that they can only order one type of pizza, which will make things easier. 

// They will pick the pizza choice

//Then how many they want    

//Could write out the list of Pizza before the choice, 
//then type in choice of pizza, then how many? 

document.getElementById(`but2`).addEventListener("click", orderTotal);

//Order Button, will call this method, will print out final order list
function orderTotal() {
    tasklist = document.getElementById(`orderList`);
    
       //taskList.innerHTML += "<li>" +;

}