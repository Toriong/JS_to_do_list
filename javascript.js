var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var toDoList;
toDoList = document.querySelector("#confirmed-to-do-list");
var userInput;

userInput = document.querySelector(".to-do-input");


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
    localStorage.setItem("All Entries", JSON.stringify(toDoArray));
}




// function addUserInputToArray() {
//     userInputValueAsObject = new givveNameToToDo(userInput.value);
//     storeInArray = toDoArray.push(userInputValueAsObject);
//     stringifyToDoArray = JSON.stringify((storeInArray));
//     save()
//     return stringifyToDoArray;
    
// }



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
    toDoList.prepend(newLi);
    delButton.addEventListener("click", delFromToDoListPromptAndRemoval(newLi));
    
    // GOAL:
    delButton.addEventListener("click", deleteItemInToDoArray(document.querySelector("li").firstChild.textContent));
    delButton.addEventListener("click", deleteItemInToDoArray(userInput.value));
    completedButton.addEventListener("click", completedButtonPromptAndMoveToComp(newLi, dueDate, dueDateText, completedButton));

}

function deleteItemInToDoArray(deleteThisItem) {
    var filteredToDoArray = toDoArray.filter(function (e) { return e !== deleteThisItem })
    return function () {
        localStorage.setItem("Official To-Do List", JSON.stringify(filteredToDoArray));
        console.log(filteredToDoArray);
    }
}

// function giveNameToToDo(name) {
//     this.name = name; 
    
    
// }
function addToDoArray() {
    var toDoInsertedToArray = toDoArray.push(userInput.value)
    save(); 
    return toDoInsertedToArray;
}
var submitButton = document.querySelector(".submit");

// function insertClass() {
//     var selectLi = document.querySelector("li");
//     return selectLi.classList.add(".container");
// }

function selectUserInputAsText() {
    x = document.querySelector("li").firstChild.textContent;
    return x;
}

// function storeUserInputIntoVar() {
//     y = selectText();
//     return y; 
// }

submitButton.addEventListener("click", addToDo);
submitButton.addEventListener("click", addToDoArray);
// submitButton.addEventListener("click", insertClass);
submitButton.addEventListener("click", selectUserInputAsText);





// create an array to store to-do's

var userDueDatesStoredArray = [];

// function dueDateStore(input) {
//     var dueDateText = document.createTextNode(input)
//     return function () {
//         userDueDatesStoredArray.push(dueDateText);
//     }
// }

// submitButton.addEventListener("click", dueDateStore(userDueDateInput.input));

function toDoName(name) {
    return this.name = name;
}



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

var compList = [];
//to save to-do's from the user into the local storage
// function saveToDo() {
//     var jsonStrToDo = JSON.stringify(toDoArray);
//     localStorage.setItem("todos",jsonStrToDo);
// }



//create an array to store the due-dates
// var toDoDueDateArray = [];





