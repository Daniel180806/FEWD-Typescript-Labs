//Create task that implements the interface
var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    //adds task in this array
    Tasks.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added to my Tasks list.");
        return this.myTasks.length;
    };
    //lists all task in this array
    Tasks.prototype.listAllItems = function () {
        for (var i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my Tasks list.");
        }
    };
    //removes task from this array
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index === -1) {
            console.log(task + " is not in my Task list.");
        }
        else {
            this.myTasks.splice(index, 1);
        }
        return this.myTasks.length;
    };
    return Tasks;
}());
//Initialising the class to use its methods;
var myTodo = new Tasks();
myTodo.addTask("Clean");
myTodo.addTask("Farm");
