// when the button is clicked, create a new checklist item


document.getElementById("addTaskButton").addEventListener("click",function(event) {
    var taskInput = document.getElementById("taskInput").value;
    var taskItem = document.createElement("li");
    taskItem.innerHTML = `
                <input type="checkbox" name="task" value="${taskInput}">
                <label >${taskInput}</label>
            `;
    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskInput").value = "";
})
