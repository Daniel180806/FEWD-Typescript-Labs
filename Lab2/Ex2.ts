//Create interface
interface myTaskInterface {
    myTasks: string[];
    addTask(task: string): number;
    listAllItems(): void;
    deleteTask(task: string): number;
}

//Create task that implements the interface
class Tasks implements myTaskInterface {
    constructor() { }

    myTasks: string[] = [];
    //adds task in this array
    addTask(task: string): number {
        this.myTasks.push(task);
        console.log(task + " has been added to my Tasks list.");
        return this.myTasks.length;
    }
    //lists all task in this array
    listAllItems(): void {
        for (let i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my Tasks list.")
        }
    }
    //removes task from this array
    deleteTask(task: string): number {
        let index: number = this.myTasks.indexOf(task);

        if (index === -1) {
            console.log(task + " is not in my Task list.")
        } else {
            this.myTasks.splice(index, 1);
        }
        return this.myTasks.length;
    }
}

//Initialising the class to use its methods;
let myTodo = new Tasks();
myTodo.addTask("Clean");
myTodo.addTask("Farm");