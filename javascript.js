
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







// function saveUserInputTaskAndDueDate() {
//     localStorage.setItem("Tasks and Due Dates", JSON.stringify(userTaskAndSelectedDueDateArray))
// }
function saveUserInputTaskAndDueDate(array) {
    localStorage.setItem("Tasks and Due Dates", JSON.stringify(array))
}
function storeUserTaskAndSelectInputIntoArray() {
    //PUT USER TASK AND DUEDATES INTO THE addToDo function, defined them in there 
        var userTask = (userInput.value);
        var dueDates = (userDueDateInput.value);
        userTaskAndSelectedDueDateArray.push((userTask + " | DUE ON: " + dueDates + " | "));
        saveUserInputTaskAndDueDate(userTaskAndSelectedDueDateArray);
        console.log(userTaskAndSelectedDueDateArray);
    
}





// function delFromToDoListPromptAndRemoval(listItem) {
//     return function () {
//         if (confirm("Do you want to delete this entry?")) {
//             listItem.remove("li");
//             alert("Entry has been deleted.")
//         } else {
//             alert("No changes has occured.")
//         }
//     }
// }






// function delFromToDoListPromptAndRemoval(listItem) {
//     return function () {
//         if (confirm("Do you want to delete this entry?")) {
//                 listItem.remove("li");
//                 alert("Entry has been deleted.")
//             }
//         // else {
//         //     alert("No changes has occured.")
//         // }
//     }
// }


var userTaskAndSelectedDueDateArray = [];
var toDoArray = [];
var compList = [];

function delItemFromUserTaskAndSelectedDueDateArray(deleteMe) {
    var filteredUserTaskAndSelectedDueDateArray = userTaskAndSelectedDueDateArray.filter(function (userTaskAndDueDate) {
        return userTaskAndDueDate !== deleteMe;
    })
        userTaskAndSelectedDueDateArray = filteredUserTaskAndSelectedDueDateArray;
        saveUserInputTaskAndDueDate(userTaskAndSelectedDueDateArray);
        console.log("user task and due date: ", userTaskAndSelectedDueDateArray);
    } 

function saveUserInputTaskAndDueDate(array) {
    localStorage.setItem("Tasks and Due Dates", JSON.stringify(array))
}

function deleteItemFromCompArray(deleteThisItem) {    
        var filterCompArray = compList.filter(function (compListItem) {
            return compListItem !== deleteThisItem;
        })
        compList = filterCompArray;
        saveCompList();
        console.log("Saved: ", compList);
    
}

function delFromToDoListPromptAndRemoval(listItem, deleteThisItem, userTaskAndDueDate) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            deleteItemInToDoArray(deleteThisItem);
            delItemFromUserTaskAndSelectedDueDateArray(userTaskAndDueDate); 
            // delItemFromStoreUserDueDateIntoArray(userDueDate)
            alert("Entry has been deleted.")
        }
        // else {
        //     alert("No changes has occured.")
        // }
    }
}

function delItemInCompListAndArray(item, userInput) {
    return function () {
        if (confirm("This item will now be deleted from your completion list. Press 'OK' to continue.")) {
            deleteItemFromCompArray(userInput);
            item.remove("li");
            alert("Entry has been deleted from your completion list.")
        }
//         else {
//              alert("No changes has occured.")
//    }
 }
}



function moveTaskToCompListArray(task) {
    compList.push(task);
    saveCompList(compList);
    console.log("Your completions: ", compList);
    
}



// function delUserInputFromUserTaskAndSelectedDueDateArray(delItem) {
//             var userTaskAndSelectedDueDateArrayFiltered = userTaskAndSelectedDueDateArray.filter(function (toDoTask) {
//                 return toDoTask !== delItem;
//             })
//             userTaskAndSelectedDueDateArray = userTaskAndSelectedDueDateArrayFiltered;
//             saveUserInputTaskAndDueDate(userTaskAndSelectedDueDateArray);
//             console.log(userTaskAndSelectedDueDateArray);
// }

function saveDueDateArray(array) {
    localStorage.setItem("Due Dates", JSON.stringify(array))
    
}

// var storeUserDueDateIntoArray = []
// function storeDueDatesIntoArray() {
//         storeUserDueDateIntoArray.push((userDueDateInput.value));
//         saveDueDateArray(storeUserDueDateIntoArray);
// }


// onRefresh.addEventListener("refresh", getAndDisplayUserInput)
function addToDo() {
    var buttonForCompList = document.createElement("button");
    var textForCompListButton = document.createTextNode("DEL");
    buttonForCompList.appendChild(textForCompListButton);   
    var newLi = document.createElement("li");
    var task = userInput.value;
    var userDueDates = userDueDateInput.value;
    var userSelectedDueDateAsTextNode = document.createTextNode(userDueDateInput.value);
    addToDoArray(task);
    var singleSeparator = document.createTextNode("|");
    var dueOnText = document.createTextNode(" | DUE ON: ");
    // newLi.innerText = task + " | DUE ON: " + dueDate + " | "
    newLi.appendChild(document.createTextNode(task)); 
    newLi.appendChild(dueOnText);
    newLi.appendChild(userSelectedDueDateAsTextNode);
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
    var taskAndDueDate = (task + " | DUE ON: " + userDueDates + " | ")
    delButton.addEventListener("click", delFromToDoListPromptAndRemoval(newLi, task, taskAndDueDate));
    
    
    
    // userTaskAndSelectedDueDateArray.push((userTask + " | DUE ON: " + dueDates + " | "));
    
    //this deletes as selected item taskAndDueDate from userTaskAndSelectedDueDateArray, use this code to delete the selected item from the stored array of all user input and selected due dates   
    // delButton.addEventListener("click", delUserInputFromUserTaskAndSelectedDueDateArray(taskAndDueDate));
    
   
    
    // GOAL:
    const taskToDelete = document.querySelector("li").firstChild.textContent

    // delButton.addEventListener("click", deleteItemInToDoArray(task));
//     function completedButtonPromptAndMoveToComp(listItem, userDueDate,textDisplayDueDate, compButton, task, deleteMe) {
//     return function () {
//         if (
//             confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
//         ) {
//             moveTaskToCompListArray(task);
//             delItemFromToDoArrayWhenCompButtonIsClicked(task);
//             delItemFromUserTaskAndSelectedDueDateArray(deleteMe);
//             listItem.removeChild(userDueDate);
//             listItem.removeChild(textDisplayDueDate);
//             // add attribute: "complete on *current date*"
//             listItem.removeChild(compButton)
//             completionList.appendChild(listItem);
            
        
//         } else {
//             alert("No changes has occured.")
//         }
//     }
// }
    completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, userSelectedDueDateAsTextNode, dueOnText, completedButton, task, delButton, buttonForCompList, taskAndDueDate));
    // completedButton.addEventListener("click", delDueDateWhenCompButtonClicked(userDueDates))
    // compButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, userSelectedDueDateAsTextNode, dueOnText, completedButton, task, delButton, buttonForCompList, taskAndDueDate));
    //this will move the selected item to the complist of the usertask and selected due date
    buttonForCompList.addEventListener("click", delItemInCompListAndArray(newLi, task));
   
}

// function delItemFromStoreUserDueDateIntoArray(dueDates) {
//     var filterStoredUserDueDateIntoArray = storeUserDueDateIntoArray.filter(function (item) {
//         return item !== dueDates;
//     })
//     storeUserDueDateIntoArray = filterStoredUserDueDateIntoArray;
//     saveDueDateArray(storeUserDueDateIntoArray);
//     console.log(storeUserDueDateIntoArray);
// }

function delItemFromToDoArrayWhenCompButtonIsClicked(deleteThisItem) {
    var filteredToDoArray = toDoArray.filter(function (todoItem) {
        return todoItem !== deleteThisItem;
            })
            toDoArray = filteredToDoArray;
            saveToDoList(toDoArray);
}

// function delDueDateWhenCompButtonClicked(dueDate) {
     
//         var filterDueDateArray = storeUserDueDateIntoArray.filter(function (item) {
//             return item !== dueDate
//         })
//         storeUserDueDateIntoArray = filterDueDateArray;
//         saveDueDateArray(storeUserDueDateIntoArray);
    
// }
function completedButtonPromptAndMoveToComp(listItem, userDueDate,textDisplayDueDate, compButton, task, deleteButton, newDelButton, userTaskAndDueDueDate) {
    return function () {
        if (
            confirm("You pressed 'completed.' This is task will now be inserted into your completion list Press 'Ok' to continue.")
        ) {
            // delDueDateWhenCompButtonClicked(dueDates);
            moveTaskToCompListArray(task);
            delItemFromToDoArrayWhenCompButtonIsClicked(task);
            listItem.removeChild(userDueDate);
            listItem.removeChild(textDisplayDueDate);
            delItemFromUserTaskAndSelectedDueDateArray(userTaskAndDueDueDate);
            // add attribute: "complete on *current date*"
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


var userTaskAndSelectedDueDateArray = [];
var toDoArray = [];
var compList = [];
// var taskAndDueDate = (task + " | DUE ON: " + userDueDates + " | ")

//     }
// }




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
    console.log(toDoArray)
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



//  function displayTaskAndDueDatesOnRefresh(){
//      if (localStorage.getItem('Tasks and Due Dates') !== null || 0) {
//          userTaskAndDueDates = localStorage.getItem('Tasks and Due Dates');
//          toDosAndDueDates = JSON.parse(userTaskAndDueDates);
//          saveUserInputTaskAndDueDate(toDosAndDueDates);
//          toDosAndDueDates.forEach(function (item) {
//             userTaskAndDueDates = localStorage.getItem('Tasks and Due Dates');
//             toDosAndDueDates = JSON.parse(userTaskAndDueDates);
//             var completedButton = document.createElement("button");
//             var completedButtonText = document.createTextNode("COMPELETED");
//             completedButton.appendChild(completedButtonText);
//             var delButton = document.createElement("button");
//             var delButtonText = document.createTextNode("DEL");
//             delButton.appendChild(delButtonText);
//             var newLi = document.createElement("li");
//             newLi.innerHTML = item;
//             newLi.appendChild(completedButton);
//             newLi.appendChild(delButton);
//             toDoList.prepend(newLi);

//     saveUserInputTaskAndDueDate(toDosAndDueDates);    })
//     } else {
//         alert("toDoList array is empty.")
//     }
// }

function delCharactersWhenCompButtonIsClickedAfterRefresh(string) {
    var delCharString = string;    
        for (i = 0; i < 1; i++) {
            return delCharString.replace(/[\,[\]"]/g, "");
        }
} 

function addSplitCharacterSignal(string) {
    var stringToBeSplit = string;
        for (i = 0; i < 1; i++) {
            return stringToBeSplit.replace(/[\|]/g, " | ");
        }
}

function splitDelCharUserTaskAndDueDates(string) {
    for (i = 0; i < 1; i++) {
        return string.split(" | ").filter(function (delEmptyArrayItem) {
            return delEmptyArrayItem.length != 0
        })
    }
}

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

function dueDates(array) {
    var dueDateArray = [];
    for (var i = 0; i < array.length; i+=1) {
        if (i % 2 == 1)
            dueDateArray.push(array[i])
    }
    return dueDateArray;
}

// function delDueDates(array) {
//     array.fitler(function (index) {
//         return index % 2 === 1;
//     })
    
// }
        

 function displayTaskAndDueDatesOnRefresh(){
     if (localStorage.getItem('Tasks and Due Dates') !== null || 0) {
         userTaskAndDueDates = localStorage.getItem('Tasks and Due Dates');
         // console.log(delCharactersWhenCompButtonIsClickedAfterRefresh(userTaskAndDueDates));
         toDosAndDueDates = JSON.parse(userTaskAndDueDates);
         console.log(userTaskAndDueDates);
        //  var delCharUserTaskAndDueDates = userTaskAndDueDates.replace(/[\,[\]|"]/g, "");
         var delCharUserTaskAndDueDates = delCharactersWhenCompButtonIsClickedAfterRefresh(userTaskAndDueDates);
         console.log(delCharUserTaskAndDueDates);
        //  var signalForSplitString = addSplitCharacterSignal((delCharUserTaskAndDueDates));
        //  console.log(signalForSplitString);
         var delCharUserTaskAndDueDatesArray = splitDelCharUserTaskAndDueDates(delCharUserTaskAndDueDates);
         //have a function that iterates this array by spitting out two items at a time 
         console.log(delCharUserTaskAndDueDatesArray);
         var userToDos = toDoItems(delCharUserTaskAndDueDatesArray);
         var userDueDates = dueDates(delCharUserTaskAndDueDatesArray);
         console.log(userDueDates);
         console.log(userToDos);
         saveToDoList(userToDos);
        //  console.log(compItems(delCharUserTaskAndDueDatesArray));
        //  console.log(delCharUserTaskAndDueDatesArray);
        
         
         
         
        //  console.log(userTaskAndDueDates.replace("\"" , ""));
         
         
        
        
         
    
      
            userToDos.forEach(function (item) {  
             
            userTaskAndDueDates = localStorage.getItem('Tasks and Due Dates');
            toDosAndDueDates = JSON.parse(userTaskAndDueDates);
            var completedButton = document.createElement("button");
            var completedButtonText = document.createTextNode("COMPELETED");
            completedButton.appendChild(completedButtonText);
            var delButton = document.createElement("button");
            var delButtonText = document.createTextNode("DEL");
            delButton.appendChild(delButtonText);
            var newLi = document.createElement("li");
            var text = document.createTextNode(item);
            newLi.appendChild(text);
            newLi.appendChild(completedButton);
            newLi.appendChild(delButton);
            toDoList.prepend(newLi);
            delButton.addEventListener("click", deleteToDoTask(newLi, text, toDosAndDueDates));  
             saveUserInputTaskAndDueDate(toDosAndDueDates);
        
     }
         )
    } else {
        alert("toDoList array is empty.")
    }
 }
function dueDateAsTextNode(array) {
    array.forEach(function (task) {
        var userTask = document.createTextNode(task);
        return userTask; 

    })
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

function delFromTaskAndDueDateInLocalStorage(array, delTaskAndDueDate) {
    var filterToDosAndDueDates = array.filter(function (taskAndDueDate) {
        return taskAndDueDate !== delTaskAndDueDate;
    })
    var array = filterToDosAndDueDates;
    saveUserInputTaskAndDueDate(array);
    
    
}
function delFromToDoListPromptAndRemoval(listItem, deleteThisItem, userTaskAndDueDate) {
    return function () {
        if (confirm("Do you want to delete this entry?")) {
            listItem.remove("li");
            deleteItemInToDoArray(deleteThisItem);
            delItemFromUserTaskAndSelectedDueDateArray(userTaskAndDueDate); 
            // delItemFromStoreUserDueDateIntoArray(userDueDate)
            alert("Entry has been deleted.")
        }
        // else {
        //     alert("No changes has occured.")
        // }
    }
}


function delItemFromUserTaskAndSelectedDueDateArray(deleteMe) {
    var filteredUserTaskAndSelectedDueDateArray = userTaskAndSelectedDueDateArray.filter(function (userTaskAndDueDate) {
        return userTaskAndDueDate !== deleteMe;
    })
        userTaskAndSelectedDueDateArray = filteredUserTaskAndSelectedDueDateArray;
        saveUserInputTaskAndDueDate(userTaskAndSelectedDueDateArray);
        console.log("user task and due date: ", userTaskAndSelectedDueDateArray);
    } 



window.onload = function () {
    displayTaskAndDueDatesOnRefresh();
}






// submitButton.addEventListener("click", selectUserInputAsText);


// window.onload;


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







