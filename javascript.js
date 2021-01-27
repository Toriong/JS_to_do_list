
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var toDoList = document.querySelector("#confirmed-to-do-list");
var userInput = document.querySelector(".to-do-input");

var ToDoEntry = document.createTextNode(userInput.value)
var submitButton = document.querySelector(".submit");





var toDoArray = [];
var compList = [];




function deleteItemFromCompArray(deleteThisItem) {    
        var filterCompArray = compList.filter(function (compListItem) {
            return compListItem !== deleteThisItem;
        })
        compList = filterCompArray;
        saveCompList();
        console.log("Saved: ", compList);
    
}

function delFromToDoListPromptAndRemoval(listItem, deleteThisItem) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            deleteItemInToDoArray(deleteThisItem);
            alert("Entry has been deleted.")
        }
        else {
            alert("No changes has occured.")
        }
    }
}

function delItemInCompListAndArray(item, userInput) {
    return function () {
        if (confirm("This item will now be deleted from your completion list. Press 'OK' to continue.")) {
            deleteItemFromCompArray(userInput);
            item.remove("li");
            alert("Entry has been deleted from your completion list.")
        }
        else {
             alert("No changes has occured.")
   }
 }
}



function moveTaskToCompListArray(task) {
    compList.push(task);
    // saveCompList(compList);
    saveCompList(compList);
    console.log("Your completions: ", compList);
    
}
function getToDoTaskPutThemIntoToDoArray() {
     
        if (toDoArray.length == 0) {
            alert("Local storage is empty")
        } else if (localStorage.getItem("Saved To Do's" !== null)){
            var savedUserToDos = localStorage.getItem('Saved To Do\'s');
            var savedUserToDosAsJson = JSON.stringify(savedUserToDos);
            console.log(savedUserToDosAsJson);
        }
    
    
}
// bring back "Saved To Do's as a array in order to add new items after refresh"
function addToDo() {
    var buttonForCompList = document.createElement("button");
    var textForCompListButton = document.createTextNode("DEL");
    buttonForCompList.appendChild(textForCompListButton);   
    var newLi = document.createElement("li");
    var task = userInput.value;
    if (toDoArray.length === null || 0) {
        //check if toDoArry is empty
        addToDoArray(task);
    } else if (toDoArray.length !== null || 0) {
        //if not empty, add to the toDoArray
        //after refresh, get item's from local storage under the name of 'Saved To Do's', JSON stringify them, and add each one to the toDoArray
        //make a function for the above task
        toDoArray.push(userInput.value);
    }
    saveToDoList(toDoArray);
    newLi.appendChild(document.createTextNode(task));
    var completedButton = document.createElement("button");
    var completedButtonText = document.createTextNode("COMPELETED")
    completedButton.appendChild(completedButtonText);
    newLi.appendChild(completedButton);
    var delButton = document.createElement("button");
    var delButtonText = document.createTextNode("DEL");
    delButton.appendChild(delButtonText);
    newLi.appendChild(delButton);
    toDoList.prepend(newLi);
    delButton.addEventListener("click", delFromToDoListPromptAndRemoval(newLi, task));
    completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, completedButton, task, delButton, buttonForCompList))
    buttonForCompList.addEventListener("click", delItemInCompListAndArray(newLi, task));
   
}


function delItemFromToDoArrayWhenCompButtonIsClicked(deleteThisItem) {
    var filteredToDoArray = toDoArray.filter(function (todoItem) {
        return todoItem !== deleteThisItem;
            })
            toDoArray = filteredToDoArray;
            saveToDoList(toDoArray);
}

function completedButtonPromptAndMoveToComp(listItem, compButton, task, deleteButton, newDelButton) {
    return function () {
        if (
            confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
        ) {
            moveTaskToCompListArray(task);
            delItemFromToDoArrayWhenCompButtonIsClicked(task);
            listItem.removeChild(compButton)
            listItem.removeChild(deleteButton);
            listItem.appendChild(newDelButton);
            completionList.appendChild(listItem);
            
        
        }
        else {
            alert("No changes has occured.")
        }
    }
}

function saveToDoList(toDoArray) {
    localStorage.setItem("Saved To Do's", JSON.stringify(toDoArray));
}

function saveCompList() {
    return localStorage.setItem("Saved completions", JSON.stringify(compList));
}



var toDoArray = [];
var compList = [];





function deleteItemInToDoArray(deleteThisItem) {
            var filteredToDoArray = toDoArray.filter(function (todoItem) {
                return todoItem !== deleteThisItem
            })
            toDoArray = filteredToDoArray;
            saveToDoList(toDoArray);
            console.log('ToDoArray saved: ', toDoArray);
}



function addToDoArray(item) {
    toDoArray.push(item);
    saveToDoList(toDoArray);
    console.log("to do array: ",toDoArray)
}




submitButton.addEventListener("click", addToDo);
function delItemFromToDoArrayWhenCompButtonIsClicked(deleteThisItem) {
    var filteredToDoArray = toDoArray.filter(function (todoItem) {
                return todoItem !== deleteThisItem
            })
            toDoArray = filteredToDoArray;
            saveToDoList(toDoArray);
}


submitButton.addEventListener("click", addToDo);







function toDoItems(array) {
    var toDos = [];
    for (var i = 0; i < array.length; i+=1) {
        if (i % 2 !== 1)
            toDos.push(array[i])
    }
    return toDos;
}

function toDoItemsAsTextNode(toDoArray) {
    var toDos = toDoItems(toDoArray);
    return function () {
        toDos.forEach(function (item) {
            var li = document.createElement("li");
            var ItemAsTextNode = document.createTextNode(item);
            return document.write(li.appendChild(ItemAsTextNode));
        })
    }
}


        

function displayTaskOnRefresh() {
    if (localStorage.getItem('Saved To Do\'s') !== null || 0) {
        var savedUserToDos = localStorage.getItem('Saved To Do\'s');
        // console.log("saved user todos", savedUserToDos);
        localStorage.setItem("Saved To Do\'s", savedUserToDos);
        var tasks = JSON.parse(savedUserToDos);
        // console.log("user tasks: ", tasks);
        tasks.forEach(function (item) {
            var completedButton = document.createElement("button");
            var completedButtonText = document.createTextNode("COMPELETED");
            completedButton.appendChild(completedButtonText);
            var delButton = document.createElement("button");
            var delButtonText = document.createTextNode("DEL");
            delButton.appendChild(delButtonText);
            var newLi = document.createElement("li");
            var text = document.createTextNode(item);
            toDoArray.push(item);
            newLi.appendChild(text);
            newLi.appendChild(completedButton);
            newLi.appendChild(delButton);
            toDoList.prepend(newLi);
            var buttonForCompList = document.createElement("button");
            var textForCompListButton = document.createTextNode("DEL");
            buttonForCompList.appendChild(textForCompListButton);
            completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, completedButton, item, delButton, buttonForCompList));
            delButton.addEventListener("click", delFromToDoListPromptAndRemoval(newLi, item));
            buttonForCompList.addEventListener("click", delItemInCompListAndArray(newLi, item));
        }
        )
    }
}


 
function completedButtonPromptAndMoveToComp(listItem, compButton, task, deleteButton, newDelButton) {
    return function () {
        if (
            confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
        ) {
            moveTaskToCompListArray(task);
            delItemFromToDoArrayWhenCompButtonIsClicked(task);
            listItem.removeChild(compButton)
            listItem.removeChild(deleteButton);
            listItem.appendChild(newDelButton);
            completionList.prepend(listItem);
            
        
        }
        else {
            alert("No changes has occured.")
        }
    }
}

//WORK ON ME
function deleteToDoTask(li, delTaskAndDueDate, array) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            {
                li.remove("li");
                delFromTaskAndDueDateInLocalStorage(array, delTaskAndDueDate)
            }

        }
    }
}

function delFromToDoListPromptAndRemoval(listItem, deleteThisItem) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            deleteItemInToDoArray(deleteThisItem);
            alert("Entry has been deleted.")
        }
        else {
            alert("No changes has occured.")
        }
    }
}

function saveCompList() {
    return localStorage.setItem("Saved completions", JSON.stringify(compList));
}

var completionList = document.querySelector('#user-completion-list')
function displayCompListOnRefresh() {
    if (localStorage.getItem("Saved completions") !== null) {
        var getCompItems = localStorage.getItem("Saved completions");
        console.log(getCompItems);
        userCompletionsList = JSON.parse(getCompItems);
        console.log(userCompletionsList);
        userCompletionsList.forEach(function (item) {
            var newLi = document.createElement("li");
            var delButton = document.createElement("button");
            var delButtonText = document.createTextNode("DEL")
            var text = document.createTextNode(item);
            compList.push(item)
            delButton.appendChild(delButtonText);
            newLi.appendChild(text);
            newLi.appendChild(delButton);
            completionList.prepend(newLi);
            delButton.addEventListener("click", delItemInCompListAndArray(newLi,item))
        })
    }
}



displayTaskOnRefresh();
displayCompListOnRefresh();
getToDoTaskPutThemIntoToDoArray(); 












