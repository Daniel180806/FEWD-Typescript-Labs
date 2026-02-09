//Initialising an array
var myTasks = [];
//Function that adds task into the array
var addTask = function (task) {
    myTasks.push(task);
    console.log(task + " has been added to my Tasks list.");
    return myTasks.length;
};
//Function that lists out all items within the array
var listAllItems = function () {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is in my Tasks list.");
    }
};
//Function removes items from the array
var deleteTask = function (task) {
    var index = myTasks.indexOf(task);
    if (index === -1) {
        console.log(task + " is not in my Task list.");
    }
    else {
        myTasks.splice(index, 1);
    }
    return myTasks.length;
};
//Running functions
addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Work");
deleteTask("Stuff");
