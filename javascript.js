

var toDosAndCompletions = {
    toDoArray: retrieveLocalStorageValue("Saved To Dos"),
    compArray: retrieveLocalStorageValue("Saved completions")
}



var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var toDoList = document.querySelector("#confirmed-to-do-list");
var userInput = document.querySelector(".to-do-input");

var ToDoEntry = document.createTextNode(userInput.value)
var submitButton = document.querySelector(".submit");






function deleteDomLiItems() {
    toDoList.innerHTML = " ";
    completionListOnDom.innerHTML = " ";
    console.log("deleteDomLiItems was executed")
}


function putArrayItemsOntoDom() {
    toDosAndCompletions.toDoArray.forEach(function (item) {
        toDoList.prepend(liAndButtonsDom(item));
    });
    toDosAndCompletions.compArray.forEach(function (item) {
        completionListOnDom.prepend(liAndButtonsDom(item));
    });

}

function arrayCheck(userTask) {
    if (toDosAndCompletions.toDoArray.includes(userTask)) {
        alert("This item is already in your to do list.")
    } else if (toDosAndCompletions.compArray.includes(userTask) && confirm("This item is in your completion list. Do you want to move it to your to do list? (Press 'OK' to confirm.)")) {
        console.log(userTask);
        var deleteMe = deleteSelectedItem(toDosAndCompletions.compArray, userTask);
        deleteMe();
        toDosAndCompletions.toDoArray.push(userTask);
        save();
        deleteDomLiItems();
        putArrayItemsOntoDom();
    } else (
        
        alert("No changes has occured.")
    
    )
}


function addToDo() {
    return function () {
        var userTask = userInput.value
        if (toDosAndCompletions.toDoArray.includes(userTask) || toDosAndCompletions.compArray.includes(userTask)) {
            arrayCheck(userTask);
            return;
        }
        toDosAndCompletions.toDoArray.push(userTask)
        save();
        deleteDomLiItems();
        putArrayItemsOntoDom();
        
    }
}


submitButton.addEventListener("click", addToDo());


function save() {
    localStorage.setItem("Saved To Dos", JSON.stringify(toDosAndCompletions.toDoArray))
    localStorage.setItem("Saved completions", JSON.stringify(toDosAndCompletions.compArray))
}
function deleteSelectedItem(array, inputFromUser) {
    return function () {
    var index = array.indexOf(inputFromUser);
    array.splice(index, 1);
    save();
    deleteDomLiItems();
    putArrayItemsOntoDom();
    }
    
}
        

function completedButtonPromptAndMoveToComp(inputFromUser) {
    return function () {
        var deletion = deleteSelectedItem(toDosAndCompletions.toDoArray, inputFromUser);
        toDosAndCompletions.compArray.push(inputFromUser);
        deletion();
        save();
        deleteDomLiItems();
        putArrayItemsOntoDom();
    }
}

function liAndButtonsDom(userInput) {
    var liForList;
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode('DEL'));
    var newLi = document.createElement("li");
    if (toDosAndCompletions.toDoArray.includes(userInput)) {
        newLi.appendChild(document.createTextNode(userInput));
        var completedButton = document.createElement("button");
        completedButton.appendChild(document.createTextNode("COMPELETED"));
        newLi.appendChild(completedButton);    
        newLi.appendChild(delButton);
        delButton.addEventListener("click", deleteSelectedItem(toDosAndCompletions.toDoArray, userInput));
        completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(userInput))
        liForList = newLi;
    } else if (toDosAndCompletions.compArray.includes(userInput)) {
        newLi.appendChild(document.createTextNode(userInput));
        newLi.appendChild(delButton);
        delButton.addEventListener("click", deleteSelectedItem(toDosAndCompletions.compArray, userInput));
        liForList = newLi;
    }
    return liForList;
}








var clearOptions = document.getElementById("clear-options-container");
var clearAll = document.getElementById("clear-all");
var clearToDos = document.getElementById("clear-to-dos");
var clearCompList = document.getElementById("clear-completions");
var clearConfirmedButton = document.querySelector("#clear-button");
var completionListOnDom = document.querySelector('#user-completion-list')


function clearSelectedArray(array) {
    array.splice(0);
    save();
    deleteDomLiItems();
    putArrayItemsOntoDom();
}


function clearDomList() {
    return function () {
        if ((toDosAndCompletions.compArray.length >= 0 || toDosAndCompletions.toDoArray.length >= 0) && clearOptions.value == "make a selection") {
            alert("Please make a selection.")
        }
        else if (toDosAndCompletions.toDoArray.length >= 1 && clearOptions.value == "CLEAR TO DOS" && confirm("Your to dos will now be deleted. Press 'OK' to continue.")) {
            clearSelectedArray(toDosAndCompletions.toDoArray);
        } else if (toDosAndCompletions.compArray.length >= 1 && clearOptions.value == "CLEAR COMPLETIONS" && confirm("Your completions will now be deleted. Press 'OK' to continue.")) {
            clearSelectedArray(toDosAndCompletions.compArray)
        } else if ((toDosAndCompletions.compArray.length >=1 || toDosAndCompletions.toDoArray.length >=1)  && clearOptions.value == "CLEAR ALL" && confirm("Both your to dos and completions will now be deleted. Press 'OK' to continue.")) {
            clearSelectedArray(toDosAndCompletions.toDoArray);
            clearSelectedArray(toDosAndCompletions.compArray);
        } else if (toDosAndCompletions.toDoArray.length===0 && toDosAndCompletions.compArray.length===0) {
            alert("There are no items in your to dos and completion list.")
        }
        else {
            alert("No changes has occured.")
        }
    }
}


clearConfirmedButton.addEventListener("click", clearDomList())







function retrieveLocalStorageValue(keyName) {
    var array = JSON.parse(localStorage.getItem(keyName))
    if (array == null || 0) {
        array = [];
    } else if (array.length >= 1) {}
    return array;
}




putArrayItemsOntoDom();


