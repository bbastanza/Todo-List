document.addEventListener("DOMContentLoaded", function () {
    let todoArray = getSavedTodos();

    displayTodos(todoArray);
});

document.getElementById("add-to-list").addEventListener("click", createNewTodoItem);

document.getElementById("text-box").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        createNewTodoItem();
    }
});

function createNewTodoItem() {
    let todoItemText = document.getElementById("text-box").value;

    if (todoItemText === "") return;

    const todoItem = {
        id: new Date().getTime() * Math.random(),
        text: todoItemText,
        isComplete: false,
    };

    let todoArray = getSavedTodos();
    todoArray.push(todoItem);
    document.querySelector("#item-list").innerHTML = "";
    displayTodos(todoArray);
    document.getElementById("text-box").value = "";
    window.localStorage.setItem("list", JSON.stringify(todoArray));
}

document.getElementById("clear-done").addEventListener("click", function (e) {
    let todoArray = getSavedTodos();

    let item = document.getElementsByTagName("li");
    let itemList = document.getElementById("item-list");
    let newArray = Array.from(item);

    for (i = 0; i < newArray.length; i++) {
        if (newArray[i].className === "strikeOut") {
            newArray[i].className = "notStrikeOut";
            localStorage.setItem(newArray[i].id, "notComplete");
            itemList.removeChild(newArray[i]);
            delete todoArray[i];
        }
    }

    let newTodoArray = [];
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i] != null) {
            newTodoArray.push(todoArray[i]);
        }
    }
    todoArray = newTodoArray;
    window.localStorage.setItem("list", JSON.stringify(todoArray));
});

document.getElementById("clear-all").addEventListener("click", function (e) {
    const todoArray = [];

    let ol = document.getElementById("item-list");
    ol.innerHTML = "";

    displayTodos(todoArray);

    window.localStorage.setItem("list", JSON.stringify(todoArray));
});

function getSavedTodos() {
    let savedTodos = JSON.parse(window.localStorage.getItem("list"));
    if (savedTodos === null) {
        savedTodos = [];
    }
    return savedTodos;
}

document.addEventListener("click", function (e) {
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
    window.localStorage.setItem("list", JSON.stringify(todoArray));
});

function displayTodos(todoArray) {
    for (i = 0; i < todoArray.length; i++) {
        let item = document.createElement("li");

        item.className = todoArray[i].isComplete === true ? "strikeOut" : "notStrikeOut";

        let itemText = document.createTextNode(todoArray[i].text);
        item.id = todoArray[i].id;
        item.appendChild(itemText);

        let container = document.querySelector(".container #item-list");
        let end = document.querySelector("#container #end");
        container.insertBefore(item, end);
    }
}
