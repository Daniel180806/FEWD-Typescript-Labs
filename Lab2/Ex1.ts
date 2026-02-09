//Initialising an array
let myTasks:string[] = [];

//Function that adds task into the array
let addTask = (task:string):number=>{
    myTasks.push(task);
    console.log(task+" has been added to my Tasks list.");
    return myTasks.length;
}

//Function that lists out all items within the array
let listAllItems = ():void=>{
    for(let i=0;i<myTasks.length;i++){
        console.log("Task: " +myTasks[i]+" is in my Tasks list.")
    }
}


//Function removes items from the array
let deleteTask =(task:string):number =>{
    let index:number = myTasks.indexOf(task);

    if(index === -1){
        console.log(task + " is not in my Task list.")
    }else{
        myTasks.splice(index, 1);
    }
    return myTasks.length;
}

//Running functions
addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Work");
deleteTask("Stuff");
