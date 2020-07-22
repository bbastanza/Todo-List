let todoArray = JSON.parse(window.localStorage.getItem('list'));
if (todoArray === null) {
    todoArray = [];
}

console.log(todoArray)


document.addEventListener('DOMContentLoaded', function () {
    displayTodos(todoArray);
});

document.getElementById("addToList").addEventListener("click", addToArray);

document.getElementById("clearDone").addEventListener("click", clearDone);

document.getElementById("clearAll").addEventListener("click", clearAll);

document.getElementById('textBox').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        addToArray();
    }
});




////strikeout
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



function todo() {
    displayTodos(todoArray);
}


// empty array where items on list will be located



function addToArray() {
    let itemToAdd = document.getElementById("textBox").value;
    todoArray.push(itemToAdd);
    displayNewItem(itemToAdd, todoArray);
    document.getElementById("textBox").value = ""


}


// clears entire array// DONE
function clearAll() {
    todoArray = [];
    let ol = document.getElementById("itemList")
    ol.innerHTML = ""
    displayTodos(todoArray);
    window.localStorage.setItem('list', JSON.stringify(todoArray))
}



// display a new item
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


// clears items that have been struckout
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
    let newTodoArray = [];
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i] != null) {
            newTodoArray.push(todoArray[i])

        }
    }
    console.log(newTodoArray)
    window.localStorage.setItem('list', JSON.stringify(newTodoArray));
}



// this will take the info in the todoList and display it on the webpage
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








