
var toDoList;
toDoList = document.querySelector("#confirmed-to-do-list");
var userInput;

userInput = document.querySelector(".to-do-input");

//END GOAL: add to the to-do list
//steps:
//create new li
//append to the new li the user input
//append that new li to the to do list on the html page

var completionList = document.querySelector('#user-completion-list')
var userDueDateInput = document.querySelector("#due-date");
var ToDoEntry = document.createTextNode(userInput.value)




function delFromToDoListPromptAndRemoval(listItem) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            alert("Entry has been deleted.")
        } else {
            alert("No changes has occured.")
        }
    }
}

function completedButtonPromptAndMoveToComp(listItem, userDueDate,textDisplayDueDate, compButton) {
        return function(){if (confirm("You pressed 'completed.' This is task will now be inserted into your completion list. Press 'Ok' to continue.")) {
        listItem.removeChild(userDueDate);
        listItem.removeChild(textDisplayDueDate);
            // add attribute: "complete on *current date*"
        listItem.removeChild(compButton)
        completionList.appendChild(listItem);
            
        
        } else {
            alert("No changes has occured.")
        }
    }
}
var toDoArray = [];

function save() {
    return localStorage.setItem("Todos", toDoArray);
}

var deletedItems = toDoArray.filter(function (value) {
    return 
})
function addUserInputToArray() {
    storeInArray = toDoArray.push(userInput.value)
    stringifyToDoArray = JSON.stringify(storeInArray);
    save()
    return stringifyToDoArray;
    
}
function delFromToDoListPromptAndRemoval(listItem) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            alert("Entry has been deleted.")
        } else {
            alert("No changes has occured.")
        }
    }
}

function addToDo() {
    var newLi = document.createElement("li");
    var singleSeparator = document.createTextNode(" | ");
    var dueDateText = document.createTextNode(" | DUE ON: ");
    // this is making a textnode
    var ToDoEntry = document.createTextNode(userInput.value)
    var dueDate = document.createTextNode(userDueDateInput.value)
    newLi.appendChild(ToDoEntry)
    newLi.appendChild(singleSeparator);
    newLi.appendChild(dueDateText);
    newLi.appendChild(dueDate);
    newLi.appendChild(singleSeparator);
    var completedButton = document.createElement("button");
    var completedButtonText = document.createTextNode("COMPELETED")
    completedButton.appendChild(completedButtonText);
    newLi.appendChild(completedButton);
    var delButton = document.createElement("button");
    var delButtonText = document.createTextNode("DEL");
    delButton.appendChild(delButtonText);
    newLi.appendChild(delButton);
    toDoList.appendChild(newLi);

    delButton.addEventListener("click", delFromToDoListPromptAndRemoval(newLi))
    completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, dueDate, dueDateText, completedButton));

}




var submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", addToDo);


// create an array to store to-do's

var userDueDatesStoredArray = [];

function toDoName(name) {
    return this.name = name;
}



submitButton.addEventListener("click", addUserInputToArray);


// storeUserInputIntoVar = function (input) {
//     userInputAsVar = input 
//     save()
//     return userInputAsVar; 
    
// }

// var userInputStored = storeUserInputIntoVar(userInput.value);

// function appendMe(variable) {
//     return toDoArray.push(variable);
// }


// submitButton.addEventListener("click", userInputStored);
// submitButton.addEventListener("click", userInputStored)
// submitButton.addEventListener("click", appendMe(userInputStored));

var compList = [];
//to save to-do's from the user into the local storage
// function saveToDo() {
//     var jsonStrToDo = JSON.stringify(toDoArray);
//     localStorage.setItem("todos",jsonStrToDo);
// }



//create an array to store the due-dates
// var toDoDueDateArray = [];





