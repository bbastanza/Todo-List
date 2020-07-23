//
// Project #2 - Todo Application
//
// this sets the main array to info from the local storage
// if there is no local storage made yet the main array is created
let todoArray = JSON.parse(window.localStorage.getItem('list'));
if (todoArray === null) {
    todoArray = [];
}

// this calls the first function when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    displayTodos(todoArray);
});

// these handle the three buttons and the button press 'Enter' to triggar functions
document.getElementById("addToList").addEventListener("click", addToArray);

document.getElementById("clearDone").addEventListener("click", clearDone);

document.getElementById("clearAll").addEventListener("click", clearAll);

document.getElementById('textBox').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        addToArray();
    }
});


// this is used to strikeout the item by changeing classname on a click
// this also adds the "state" of the item to local storage
document.addEventListener('click', function (e) {
    let target = e.target;
    for (i = 0; i < todoArray.length; i++) {

        if (todoArray[i] == target.id) {
            if (target.className != "strikeOut") {
                target.className = "strikeOut";
                localStorage.setItem(target.id, "isComplete");
            } else {
                target.className = "notStrikeOut";
                localStorage.setItem(target.id, "notComplete");
            }

        }
    }
});


// this gets the value from the textbox and adds it to the new array and 
// passes the information to the displayNewItem function
function addToArray() {
    let itemToAdd = document.getElementById("textBox").value;
    if (itemToAdd !== "") {
        todoArray.push(itemToAdd);
        displayNewItem(itemToAdd, todoArray);
        document.getElementById("textBox").value = ""
    }
}

// display a new item and updates the local storage
function displayNewItem(itemToAdd, todoArray) {

    let newItem = document.createElement('li');

    newItem.id = todoArray[todoArray.length - 1];

    let newItemText = document.createTextNode(itemToAdd);
    newItem.appendChild(newItemText);

    let container = document.querySelector('.container #itemList');
    let end = document.querySelector("#container #end");
    container.insertBefore(newItem, end);

    window.localStorage.setItem('list', JSON.stringify(todoArray));
}


// clears entire array and updates the local storage to a blank array
function clearAll() {
    todoArray = [];
    let ol = document.getElementById("itemList");
    ol.innerHTML = ""
    displayTodos(todoArray);
    window.localStorage.setItem('list', JSON.stringify(todoArray));
}


// clears items that have been struckout by checking class type and removing them
function clearDone() {
    let item = document.getElementsByTagName('li');
    let itemList = document.getElementById('itemList');
    let newArray = Array.from(item);

    for (i = 0; i < newArray.length; i++) {
        if (newArray[i].className === "strikeOut") {
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
    window.localStorage.setItem('list', JSON.stringify(newTodoArray));
}


// this will take the initial todoList and display it on the webpage
function displayTodos(todoArray) {

    for (i = 0; i < todoArray.length; i++) {

        // this sets the variable itemState to "isComplete" or "notComplete" by the key that was set to the items name
        let itemState = localStorage.getItem(todoArray[i])
        let item = document.createElement('li');
        console.log(itemState)

        // this compare the itemState(which is the local storage value)
        if (itemState === "isComplete") {
            item.className = "strikeOut";
        } else {
            item.className = "notStrikeOut"
        }

        let itemText = document.createTextNode(todoArray[i]);
        item.id = todoArray[i];
        item.appendChild(itemText);

        let container = document.querySelector('.container #itemList');
        let end = document.querySelector("#container #end");
        container.insertBefore(item, end);

    }
}