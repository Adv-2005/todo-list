
let todo = [];
let userInput = document.getElementById("userInput").value;
    let outputDiv = document.getElementById("output");

function handleKeyPress(event) {
    if (event.key === "Enter") {
        add();
    }
}
function add(){
    
    let userInput= document.getElementById('userInput').value

        todo.push(userInput);
        outputDiv.innerHTML = "Task added";

        list()
        document.getElementById("userInput").value = "";
}
let addbtn=document.getElementById('add')
addbtn.addEventListener('click',add)
function list() {
    let result = "";
    
    for (let i = 0; i < todo.length; i++) {
        result += "<div class='task'><span class='task-number'>" + (i + 1) + 
                  "</span><span class='task-text'>" + todo[i] + "</span></div>";
    }
    
    outputDiv.innerHTML = result;
}
let listbtn=document.getElementById('list')


function dlt(){
    let idx = prompt("Enter the task number you want to delete");
        todo.splice(idx - 1, 1);
        outputDiv.innerHTML = "Task deleted";
        list()

}
let dltbtn=document.getElementById('delete')
dltbtn.addEventListener('click',dlt)




