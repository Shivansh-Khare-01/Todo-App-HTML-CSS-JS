const inputText = document.getElementById("input-text");
const doTask = document.querySelector(".task");

function addTask(){
    if (inputText.value === ''){
        alert("Add some task first !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        doTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputText.value = '';
    saveList()
}

doTask.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList()
    }
}, false);

function saveList(){
    localStorage.setItem("listData", doTask.innerHTML);
}

function displayList(){
    doTask.innerHTML = localStorage.getItem("listData");
}
displayList()