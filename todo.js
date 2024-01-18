// let todo = [];
// let req = prompt("Enter your request:");
// while (true){
//     if (req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if (req == "list"){
//         console.log("------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i+1, todo[i]);
//         }
//         console.log("------------");
//     }

//     else if(req=="add"){
//         let task= prompt("Enter the task you want to add:");
//         todo.push(task);
//         console.log("Task added");
//     }

//     else if(req=="delete"){
//         let idx= prompt("Enter the task number you want to delete");
//         todo.splice(idx-1, 1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("Error: Invalid request")
//     }
//     req = prompt("Enter your request:");
// }


let todo = [];

function processRequest() {
    let userInput = document.getElementById("userInput").value;
    let outputDiv = document.getElementById("output");

    if (userInput == "quit") {
        outputDiv.innerHTML = "Quitting app";
    } else if (userInput == "list") {
        let result = "------------<br>";
        for (let i = 0; i < todo.length; i++) {
            result += (i + 1) + " " + todo[i] + "<br>";
        }
        result += "------------";
        outputDiv.innerHTML = result;
    } else if (userInput == "add") {
        let task = prompt("Enter the task you want to add:");
        todo.push(task);
        outputDiv.innerHTML = "Task added";
    } else if (userInput == "delete") {
        let idx = prompt("Enter the task number you want to delete");
        todo.splice(idx - 1, 1);
        outputDiv.innerHTML = "Task deleted";
    } else {
        outputDiv.innerHTML = "Error: Invalid request";
    }

    // Clear the input field
    document.getElementById("userInput").value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        processRequest();
    }
}


