document.addEventListener('DOMContentLoaded', function () {
    todo();
});

document.getElementById("addToList").addEventListener("click", addToArray);

document.getElementById("clearDone").addEventListener("click", clearDone);

document.getElementById("clearAll").addEventListener("click", clearAll);

document.getElementById('textBox').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        addToArray();
        strikeOut();
    }
});


let recall = false

function todo() {
    findJson();
    displayTodos();
}


// empty array where items on list will be located
let todoArray = [];


function addToArray() {
    let itemToAdd = document.getElementById("textBox").value;
    todoArray.push(itemToAdd);
    displayNewItem(itemToAdd);
    document.getElementById("textBox").value = ""


    // updateJson();
}


function strikeOut() {
    console.log("strike")
    let clickItem = document.getElementById("1")
    clickItem.className = strikeOut
    updateJson();
}



// clears entire array// DONE
function clearAll() {
    todoArray = [];
    let ol = document.getElementById("itemList")
    ol.innerHTML = ""
    displayTodos();
    updateJson();
}



// display a new item
function displayNewItem(itemToAdd) {

    let newItem = document.createElement('li');
    newItem.id = todoArray.length
    console.log(newItem.id)
    let newItemText = document.createTextNode(itemToAdd);
    newItem.appendChild(newItemText);
    let container = document.querySelector('.container #itemList')
    let end = document.querySelector("#container #end")
    container.insertBefore(newItem, end)

}

function clearDone() {
    // checks to see what is struckout and removes them from list
    // maybe compares list doneList and deletes OR
    // checks to see the font style and deletes those items
    displayTodos();
    updateJson();
}



// this will take the info in the todoList and display it on the webpage

function displayTodos() {


    for (i = 0; i < todoArray.length; i++) {


        let item = document.createElement('li');
        let itemText = document.createTextNode(todoArray[i]);

        item.appendChild(itemText);
        console.log(item)
        let container = document.querySelector('.container #itemList')
        let end = document.querySelector("#container #end")
        container.insertBefore(item, end)

        console.log(itemList)

    }


}










///////////////////////////////////////////////////////// WHEN THE REST IS DONE
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
