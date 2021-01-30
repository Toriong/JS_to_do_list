
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var toDoList = document.querySelector("#confirmed-to-do-list");
var userInput = document.querySelector(".to-do-input");

var ToDoEntry = document.createTextNode(userInput.value)
var submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", addToDo);



var toDoArray = retrieveLocalStorageValue("Saved To Dos");
var compList = retrieveLocalStorageValue("Saved completions");

function moveTaskToCompListArray(task) {
    compList.push(task);
    saveCompList(compList);
    console.log("Your completions: ", compList);
    
}
function addToDo() {
    var task = userInput.value;
    if (toDoArray.length === null || 0) {
        addToDoArray(task);
    } else if (toDoArray.length !== null || 0) {
        addToDoArray(task)
    }
    saveToDoList(toDoArray);
    var newLi = liAndButtonsDom(task);
    toDoList.prepend(newLi);
    
   
}

function deleteItemInArrayAndFromDom(deleteThisItem, li) {
    return function () {
        if (confirm("This item will be deleted. Press 'OK' to continue.")) {
            if (toDoArray.includes(deleteThisItem)) {
                var index = toDoArray.indexOf(deleteThisItem);
                toDoArray.splice(index, 1);
                saveToDoList(toDoArray);
            } else if (compList.includes(deleteThisItem)) {
                var index = compList.indexOf(deleteThisItem);
                compList.splice(index, 1);
                saveCompList();
            }
            li.remove('li');
            console.log("I was removed.")
            alert("Item has been deleted.")
        } else {
            alert("No changes has occured.")
        }
    }
    
}


function liAndButtonsDom(userInput) {
    var liForList;
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode('DEL'));
    var newLi = document.createElement("li");
    if (toDoArray.includes(userInput)) {
        newLi.appendChild(document.createTextNode(userInput));
        var completedButton = document.createElement("button");
        completedButton.appendChild(document.createTextNode("COMPELETED"));
        newLi.appendChild(completedButton)    
        newLi.appendChild(delButton);
        delButton.addEventListener("click", deleteItemInArrayAndFromDom(userInput, newLi));
        completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, completedButton, userInput))
        liForList = newLi;
    } else if (compList.includes(userInput)) {
        newLi.appendChild(document.createTextNode(userInput));
        newLi.appendChild(delButton);
        delButton.addEventListener("click", deleteItemInArrayAndFromDom(userInput, newLi));
        liForList = newLi;
    }
    return liForList;
}



function delItemFromToDoArrayWhenCompButtonIsClicked(deleteThisItem) {
    var index = toDoArray.indexOf(deleteThisItem);
    toDoArray.splice(index, 1);
    saveToDoList(toDoArray);
    saveCompList();
}

function completedButtonPromptAndMoveToComp(listItem, compButton, task) {
    return function () {
        if (
            confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
        ) {
            moveTaskToCompListArray(task);
            delItemFromToDoArrayWhenCompButtonIsClicked(task);
            listItem.removeChild(compButton)
            completionListOnDom.prepend(listItem);
        }
        else {
            alert("No changes has occured.")
        }
    }
}

function saveToDoList(toDoArray) {
    localStorage.setItem("Saved To Dos", JSON.stringify(toDoArray));
}

function addToDoArray(item) {
    toDoArray.push(item);
    saveToDoList(toDoArray);
    console.log("to do array: ",toDoArray)
}





var clearOptions = document.getElementById("clear-options-container");
var clearAll = document.getElementById("clear-all");
var clearToDos = document.getElementById("clear-to-dos");
var clearCompList = document.getElementById("clear-completions");
var clearConfirmedButton = document.querySelector("#clear-button");


function clearAllToDos() {
    toDoArray.splice(0);
    saveToDoList(toDoArray);
    toDoList.innerHTML = " ";
}
function clearAllComps() {
    compList.splice(0)
    saveCompList();
    completionListOnDom.innerHTML = " ";
}


function clearDomList() {
    return function () {
        if ((compList.length >= 0 || toDoArray.length >= 0) && clearOptions.value == "make a selection") {
            alert("Please make a selection.")
        }
        else if (toDoArray.length >= 1 && clearOptions.value == "CLEAR TO DOS" && confirm("Your to dos will now be deleted. Press 'OK' to continue.")) {
            clearAllToDos();
        } else if (compList.length >= 1 && clearOptions.value == "CLEAR COMPLETIONS" && confirm("Your completions will now be deleted. Press 'OK' to continue.")) {
            clearAllComps();
        } else if ((compList.length >=1 || toDoArray.length >=1)  && clearOptions.value == "CLEAR ALL" && confirm("Both your to dos and completions will now be deleted. Press 'OK' to continue.")) {
            clearAllToDos();
            clearAllComps();
        } else if (compList.length===0 && toDoArray.length===0) {
            alert("There are no items in your to dos and completion list.")
        }
        else {
            alert("No changes has occured.")
        }
    }
}
clearConfirmedButton.addEventListener("click", clearDomList())


function saveCompList() {
    return localStorage.setItem("Saved completions", JSON.stringify(compList));
}


var completionListOnDom = document.querySelector('#user-completion-list')


function retrieveLocalStorageValue(keyName) {
    var array = JSON.parse(localStorage.getItem(keyName))
    console.log(array);
    if (array == null) {
        array = [];
    } else if (array.length >= 1) {}
    return array;
}

function putArrayOntoDom(array, domList) {
    array.forEach(function (item) {
        domList.prepend(liAndButtonsDom(item));
    })
    
}


putArrayOntoDom(toDoArray, toDoList);
putArrayOntoDom(compList, completionListOnDom);


