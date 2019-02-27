


var pizzas = ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Hawaiin" ];

document.getElementById(`but1`).addEventListener("click", addItems);

function addItems() {
    taskList = document.getElementById(`list`);
    for(var i = 0; i < pizzas.length; i++) {
        taskList.innerHTML += "<li>" + pizzas[i] + "</li>";
    } 
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
    
        taskList.innerHTML += "<li>" +;

}