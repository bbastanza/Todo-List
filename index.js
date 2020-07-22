
// this sets the main array to info from the local storage
// if there is no local storage made yet the main array is created here
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


// this is used to strikeout the item by changeing classname on a double click
document.addEventListener('dblclick', function (e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    if (target.id > 0) {
        if (target.className != "strikeOut") {
            target.className = "strikeOut"
        } else {
            target.className = "notStrikeOut"
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

    newItem.id = todoArray.length

    let newItemText = document.createTextNode(itemToAdd);
    newItem.appendChild(newItemText);

    let container = document.querySelector('.container #itemList')
    let end = document.querySelector("#container #end")
    container.insertBefore(newItem, end)

    window.localStorage.setItem('list', JSON.stringify(todoArray));
}


// clears entire array and updates the local storage to a blank array
function clearAll() {
    todoArray = [];
    let ol = document.getElementById("itemList")
    ol.innerHTML = ""
    displayTodos(todoArray);
    window.localStorage.setItem('list', JSON.stringify(todoArray))
}


// clears items that have been struckout by checking class type and removing them
function clearDone() {
    let item = document.getElementsByTagName('li')
    let itemList = document.getElementById('itemList')
    let newArray = Array.from(item)
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i].className === "strikeOut") {
            itemList.removeChild(newArray[i])
            delete todoArray[i]
        }
    }
    // this adds items that have not been deleted to a new array to add to the local storage
    let newTodoArray = [];
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i] != null) {
            newTodoArray.push(todoArray[i])

        }
    }
    console.log(newTodoArray)
    window.localStorage.setItem('list', JSON.stringify(newTodoArray));
}



// this will take the info in the original todoList and display it on the webpage
function displayTodos(todoArray) {
    for (i = 0; i < todoArray.length; i++) {

        let item = document.createElement('li');
        item.id = todoArray.length
        let itemText = document.createTextNode(todoArray[i]);

        item.appendChild(itemText);

        let container = document.querySelector('.container #itemList')
        let end = document.querySelector("#container #end")
        container.insertBefore(item, end)

    }
}