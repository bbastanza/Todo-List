document.addEventListener('DOMContentLoaded', function () {
    todo();
});

document.getElementById("addToList").addEventListener("click", function () {
    addToArray();
});

document.getElementById("clearDone").addEventListener("click", function () {
    clearDone();
});

document.getElementById("clearAll").addEventListener("click", function () {
    clearAll();
});

let recall = false

function todo() {
    findJson();
    displayTodos();
}


// empty array where items on list will be located
let todoArray = ["active learn", "passive learn"];


function addToArray() {
    let newItem = " " + "item"

    console.log(newItem)
    if (newItem == Array.isArray(todoArray)) {
        alertMessage = document.getElementById("responce")
        alertMessage = "Item Already Listed"
    } else {
        todoArray.push(newItem)
    }
    displayTodos();
    updateJson();
}

function strikeOut() {
    // if item is clicked item is struckout-> changing html font of item
    // maybe add to another list that can be cleared by another function
    displayTodos();
    updateJson();
}

function clearDone() {
    // checks to see what is struckout and removes them from list
    // maybe compares list doneList and deletes OR
    // checks to see the font style and deletes those items
    displayTodos();
    updateJson();
}

// clears entire array// DONE
function clearAll() {
    todoArray = [];
    displayTodos();
    updateJson();
}

/// DEF NEED TO RELOOK AT THIS. I THINK I'M ON THE RIGHT TRACK THOUGH :)
// this will take the info in the todoList and display it on the webpage
function displayTodos() {
    // let list = document.querySelector(items.todo)
    // list = todoArray
    let todo = document.getElementById("todo")
    todo.textContent = todoArray
    for (i = 0; 1 < list.length; i++) {
        textBox.insertBefore(textBox, todo)
    }
    console.log(todoArray)

}










/////////////////////////////////////////////////////////
function findJson() {
    // looks for json file... maybe handleing error of file not found to point to makeJson
    if (recall = true) {
        recallJson();
    } else {
        makeJson();
    }

}


function recallJson() {
    // checks to see if json file exists
    // takes info from json file and adds it to list
}

function makeJson() {
    // creates a json file and loads its content
}

function updateJson() {
    // rewrites the json file with current list
}
