
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


function newListItem() {
    var newLi = document.createElement("li")
    return newLi;
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
    function delFromToDoListPromptAndRemoval(){
        if (confirm("Do you want to delete this entry?")) {
        newLi.remove("li");
        alert("Entry has been deleted.")
    } else {
        alert("No changes has occured.")
    }
    }
    delButton.addEventListener("click", delFromToDoListPromptAndRemoval)
    function completedButtonPromptAndMoveToComp() {
        if (confirm("You pressed 'completed.' This is task will now be inserted into your completion list. Press 'Ok' to continue.")) {
        newLi.removeChild(dueDate);
            newLi.removeChild(dueDateText);
            // add attribute: "complete on *current date*"
        newLi.removeChild(completedButton)
        completionList.appendChild(newLi);
            
        
        } else {
            alert("No changes has occured.")
        }
}
    completedButton.addEventListener("click", completedButtonPromptAndMoveToComp);

}
    

var submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", addToDo);

// create an array to store to-do's
var toDoArray = [];
//create an object to name to-do's

function toDoName(name) {
    this.name = name;
}

function addToDoToArray() {
    var add = toDoName(userInput.value)
    toDoArray.push(add);
    saveToDo();
}
//to save to-do's from the user into the local storage
function saveToDo() {
    var jsonStrToDo = JSON.stringify(toDoArray);
    localStorage.setItem("todos",jsonStrToDo);
}



//create an array to store the due-dates
// var toDoDueDateArray = [];


// var userDueDatesStoredArray = [];


