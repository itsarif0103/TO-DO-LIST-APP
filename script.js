const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//this function is used to add task.
function addTask() {
    if(inputBox.value === ''){
        alert("Please add a task first!")
    } else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
    saveData()
}
//this functionality is used for click(complete task and close task).
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    
}, false)

//This function is to set data in local storage.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();