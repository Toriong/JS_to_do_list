var addButton;
addButton = document.querySelector(".add-button");

var toDoList;
toDoList = document.querySelector("#confirmed-to-do-list");

var userInput;
userInput = document.querySelector(".to-do-input");





//END GOAL: add to the to-do list
//steps:
//create new li
//append to the new li the user input
//append that new li to the to do list on the html page
addButton.addEventListener("click", function () {
    var newLi = document.createElement("li");
    // var span = document.createElement("span");
    // var delButtonText = document.createTextNode("DEL");
    // var createDelButton = document.createdElement("button");
    // this is making a textnode
    var confirmedToDoEntry = document.createTextNode(userInput.value);
    newLi.appendChild(confirmedToDoEntry);
    // createDelButton.appendChild(delButtonText);
    // span.appendChild(createDelButton);
    // span.appendChild(newLi)

    
    toDoList.appendChild(newLi);


})

// addButton.addEventListener("click", function () {
//     var newLi = document.createElement("li");
//     // var span = document.createElement("span");
//     // var delButtonText = document.createTextNode("DEL");
//     // var createDelButton = document.createdElement("button");
//     //this is making a textnode
//     var confirmedToDoEntry = document.createTextNode(userInput.value);
//     newLi.appendChild(confirmedToDoEntry);
//     // createDelButton.appendChild(delButtonText);
//     // span.appendChild(createDelButton);
//     // span.appendChild(newLi)

    
//     toDoList.appendChild(newLi);


// })

// toDoList.classList.add("listDecoration");

// var allEntriesOnToDoList = document.querySelectorAll('#confirmed-to-do-list li');
// var plusIcon = 

// for (user of allEntriesOnToDoList) {
    
// }
// var delButton = document.querySelector("del-button");

// delButton.addEventListener("click", function () {
    
// })


