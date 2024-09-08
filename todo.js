
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
        result += `
        <div class='task'>
        <button class="delete-btn" onclick="deleteTask(${i})">O</button>
            <span class='task-text'>${todo[i]}</span>
            
        </div>
    `
    }
    
    outputDiv.innerHTML = result;
}





function deleteTask(index) {
    todo.splice(index, 1);  
    list();  
}




