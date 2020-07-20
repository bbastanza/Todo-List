document.addEventListener('DOMContentLoaded', function () {
    todo();
});

let addToListVar = document.getElementById("addToList").addEventListener("click", addToArray);

let clearDoneVar = document.getElementById("clearDone").addEventListener("click", clearDone);

let clearAllVar = document.getElementById("clearAll").addEventListener("click", clearAll);

let recall = false

function todo() {
    findJson();
    displayTodos();
}


// empty array where items on list will be located
let todoArray = ["active learn", "passive learn"];


function addToArray(e) {
    todoArray.push("newitem")
    console.log(e.target)

    // if (newItem == Array.isArray(todoArray)) {
    //     alertMessage = document.getElementById("responce")
    //     alertMessage = "Item Already Listed"
    // } else {
    //     todoArray.push(newItem)
    // }
    displayTodos();
    // updateJson();
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


// this will take the info in the todoList and display it on the webpage

// I WANT THIS TO DISPLAY THE COMPLETE LIST BY ITSELF WITHOUT THE LIST BEFORE THE UPDATE 
function displayTodos() {


    for (i = 0; i < todoArray.length; i++) {


        let newItem = document.createElement('li');
        let newItemText = document.createTextNode((i + 1 + ": ") + todoArray[i]);

        newItem.appendChild(newItemText);
        console.log(newItem)
        let container = document.querySelector('.container #itemList')
        let end = document.querySelector("#container #end")
        container.insertBefore(newItem, end)

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
