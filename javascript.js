var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var toDoList = document.querySelector("#confirmed-to-do-list");
var userInput = document.querySelector(".to-do-input");
var completionList = document.querySelector('#user-completion-list')
var userDueDateInput = document.querySelector("#due-date");
var ToDoEntry = document.createTextNode(userInput.value)
var submitButton = document.querySelector(".submit");


var toDoArray = [];
var compList = [];


function saveToDoList(toDoArray) {
    localStorage.setItem("Saved To Do's", JSON.stringify(toDoArray));
}

function saveUserInputTaskAndDueDate() {
    localStorage.setItem("Tasks and Due Dates", JSON.stringify(userTaskAndSelectedDueDateArray))
}
function storeUserTaskAndSelectInputIntoArray() {
    //PUT USER TASK AND DUEDATES INTO THE addToDo function, defined them in there 
        var userTask = (userInput.value);
        var dueDates = (userDueDateInput.value);
        userTaskAndSelectedDueDateArray.push((userTask + " | DUE ON: " + dueDates + " | "));
        saveUserInputTaskAndDueDate();
        console.log(userTaskAndSelectedDueDateArray);
    
}
function saveCompList() {
    return localStorage.setItem("Saved completions", JSON.stringify(compList));
}

function deleteItemFromCompArray(deleteThisItem) {    
        var filterCompArray = compList.filter(function (compListItem) {
            return compListItem !== deleteThisItem;
        })
        compList = filterCompArray;
        saveCompList();
        console.log("Saved: ", compList);
    
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


function completedButtonPromptAndMoveToComp(listItem, userDueDate,textDisplayDueDate, compButton, task) {
    return function () {
        if (
            confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
        ) {
            moveTaskToCompListArray(task);
            delItemFromToDoArrayWhenCompButtonIsClicked(task);
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



function delFromToDoListPromptAndRemoval(listItem) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
                listItem.remove("li");
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
   } else {
             alert("No changes has occured.")
   }
 }
}
function delItemFromUserTaskAndSelectedDueDateArray(deleteMe) {
    return function () {
        var filteredUserTaskAndSelectedDueDateArray = userTaskAndSelectedDueDateArray.filter(function (userTaskAndDueDate) {         
            return userTaskAndDueDate !== deleteMe;
        })
        userTaskAndSelectedDueDateArray = filteredUserTaskAndSelectedDueDateArray;
        saveUserInputTaskAndDueDate(userTaskAndSelectedDueDateArray);
        console.log("user task and due date: ", userTaskAndSelectedDueDateArray);
    }
}
var compListUserTaskAndSelectedDueDate = [];
var userTaskAndSelectedDueDateArray = [];
// function saveCompTaskAndDueDate() {
//     localStorage.setItem("Tasks", JSON.stringify(userTaskAndSelectedDueDateArray))
// }
function moveItemToCompListUserTaskAndSelectedDueDateArray(userInput, deleteMe) {
    return function () {
        delItemFromUserTaskAndSelectedDueDateArray(deleteMe);
        saveUserInputTaskAndDueDate(userInput);

    }
    
}
function addToDo() {
    var buttonForCompList = document.createElement("button");
    var textForCompListButton = document.createTextNode("DEL");
    buttonForCompList.appendChild(textForCompListButton);   
    var newLi = document.createElement("li");
    var task = userInput.value;
    var userSelectedDueDate = document.createTextNode(userDueDateInput.value);
    addToDoArray(task);
    var singleSeparator = document.createTextNode(" | ");
    var dueOnText = document.createTextNode(" | DUE ON: ");
    // newLi.innerText = task + " | DUE ON: " + dueDate + " | "
    newLi.appendChild(document.createTextNode(task)); 
    newLi.appendChild(dueOnText);
    newLi.appendChild(userSelectedDueDate);
    newLi.appendChild(singleSeparator);
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
    var taskAndDueDate = (task + " | DUE ON: " + userDueDateInput.value + " | ")
    //this deletes as selected item taskAndDueDate from userTaskAndSelectedDueDateArray, use this code to delete the selected item from the stored array of all user input and selected due dates   
    delButton.addEventListener("click", delItemFromUserTaskAndSelectedDueDateArray(taskAndDueDate))
    
   
    
    // GOAL:
    const taskToDelete = document.querySelector("li").firstChild.textContent

    // delButton.addEventListener("click", deleteItemInToDoArray(task));
    completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, userSelectedDueDate, dueOnText, completedButton, task, delButton, buttonForCompList));
    //this will move the selected item to the complist of the usertask and selected due date
    completedButton.addEventListener("click", moveItemToCompListUserTaskAndSelectedDueDateArray(taskAndDueDate), taskAndDueDate);
    buttonForCompList.addEventListener("click", delItemInCompListAndArray(newLi, task));
   
}


function completedButtonPromptAndMoveToComp(listItem, userDueDate,textDisplayDueDate, compButton, task, deleteButton, newDelButton) {
    return function () {
        if (
            confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
        ) {
            moveTaskToCompListArray(task);
            delItemFromToDoArrayWhenCompButtonIsClicked(task);
            listItem.removeChild(userDueDate);
            listItem.removeChild(textDisplayDueDate);
            // add attribute: "complete on *current date*"
            listItem.removeChild(compButton)
            listItem.removeChild(deleteButton);
            listItem.appendChild(newDelButton);
            // listItem.appendChild(addCompDelButton);
            completionList.appendChild(listItem);
            
        
        } else {
            alert("No changes has occured.")
        }
    }
}




function deleteItemInToDoArray(deleteThisItem) {
            var filteredToDoArray = toDoArray.filter(function (todoItem) {
                return todoItem !== deleteThisItem
            })
            toDoArray = filteredToDoArray;
            saveToDoList(toDoArray);
            console.log('ToDoArray saved: ', toDoArray);
}

function delFromToDoListPromptAndRemoval(listItem, deleteThisItem) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            deleteItemInToDoArray(deleteThisItem);
            alert("Entry has been deleted.")
        } else {
            alert("No changes has occured.")
        }
    }
}

function addToDoArray(item) {
    toDoArray.push(item);
    saveToDoList(toDoArray);
    console.log(toDoArray)
}



function moveTaskToCompListArray(task) {
    compList.push(task);
    saveCompList(compList);
    console.log("Your completions: ", compList);
    
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
submitButton.addEventListener("click", storeUserTaskAndSelectInputIntoArray);

// submitButton.addEventListener("click", selectUserInputAsText);





// create an array to store to-do's


// function dueDateStore(input) {
//     var dueDateText = document.createTextNode(input)
//     return function () {
//         userDueDatesStoredArray.push(dueDateText);
//     }
// }

// submitButton.addEventListener("click", dueDateStore(userDueDateInput.input));





// submitButton.addEventListener("click", addUserInputToArray);


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







