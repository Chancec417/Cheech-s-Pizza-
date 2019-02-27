

document.getElementById(`but1`).addEventListener("click", addItems);

var pizzaType = ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Hawaiin" ];s

function addItems() {
    taskList = document.getElementById(`list`);
    for(var i = 0; i < pizzaType.length; i++) {
        taskList.innerHTML += "<li>" + pizzaTpe[i] + "</li>";
    }
}

