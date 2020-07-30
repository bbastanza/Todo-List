//
// Project #2 - Todo Application
//


// this calls the first function when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    let todoArray = getSavedTodos();

    displayTodos(todoArray);
});

// these handle the three buttons and the button press 'Enter' to triggar functions
document.getElementById("add-to-list").addEventListener("click", createNewTodoItem);

document.getElementById('text-box').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        createNewTodoItem();
    }
});

// this gets the value from the textbox and adds it to the new array/ clears list innerHTML and redisplays items
function createNewTodoItem() {
    let todoItemText = document.getElementById("text-box").value;

    if (todoItemText === "") return;

    const todoItem = {
        id: new Date().getTime() * Math.random(),
        text: todoItemText,
        isComplete: false,
    }

    let todoArray = getSavedTodos();
    todoArray.push(todoItem);
    document.querySelector("#item-list").innerHTML = ""
    displayTodos(todoArray)
    document.getElementById("text-box").value = ""
    window.localStorage.setItem('list', JSON.stringify(todoArray));

}


document.getElementById("clear-done").addEventListener("click", function (e) {
    let todoArray = getSavedTodos();

    let item = document.getElementsByTagName('li');
    let itemList = document.getElementById('item-list');
    let newArray = Array.from(item);
    // changes the value back to notStrikeOut when it is deleted so if it is entered again it can remain "notComlete"
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i].className === "strikeOut") {
            newArray[i].className = "notStrikeOut";
            localStorage.setItem(newArray[i].id, "notComplete");
            itemList.removeChild(newArray[i]);
            delete todoArray[i];
        }
    }

    // this adds items that have not been deleted to a new array to add to the local storage
    let newTodoArray = [];
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i] != null) {
            newTodoArray.push(todoArray[i]);

        }
    }
    todoArray = newTodoArray
    window.localStorage.setItem('list', JSON.stringify(todoArray));
});

document.getElementById("clear-all").addEventListener("click", function (e) {
    const todoArray = [];

    let ol = document.getElementById("item-list");
    ol.innerHTML = "";

    displayTodos(todoArray);

    window.localStorage.setItem('list', JSON.stringify(todoArray));
});


function getSavedTodos() {
    let savedTodos = JSON.parse(window.localStorage.getItem('list'));
    if (savedTodos === null) {
        savedTodos = [];
    }
    return savedTodos;
}

// this is used to strikeout the item by changeing classname on a click
document.addEventListener('click', function (e) {
    const todoArray = getSavedTodos();

    let target = e.target;
    for (i = 0; i < todoArray.length; i++) {

        if (todoArray[i].id.toString() === target.id) {

            todoArray[i].isComplete = !todoArray[i].isComplete;

            if (todoArray[i].isComplete === true) {
                target.className = "strikeOut";
            } else {
                target.className = "notStrikeOut";
            }

        }
    }
    window.localStorage.setItem('list', JSON.stringify(todoArray));
});


// this will take the todoList and display it on the webpage
function displayTodos(todoArray) {

    for (i = 0; i < todoArray.length; i++) {

        // this sets the variable itemState to "isComplete" or "notComplete" by the key that was set to the items name
        let item = document.createElement('li');

        // this compare the itemState(which is the local storage value)
        item.className = todoArray[i].isComplete === true
            ? "strikeOut"
            : "notStrikeOut";

        let itemText = document.createTextNode(todoArray[i].text);
        item.id = todoArray[i].id
        item.appendChild(itemText);

        let container = document.querySelector('.container #item-list');
        let end = document.querySelector("#container #end");
        container.insertBefore(item, end);
    }
}