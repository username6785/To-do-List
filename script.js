const taskinput = document.getElementById("task");
const add = document.getElementById("btn");
const tasklist = document.getElementById("tasklist");

function addtask() {
    const tasktext = taskinput.value.trim();

    if(tasktext === "") {
        alert("please enter a task");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deletebtn = document.createElement("button");

    span.textContent = tasktext;
    deletebtn.textContent = "Delete";
    deletebtn.classList.add("delete-btn");

    span.addEventListener("click", function () {
                li.classList.toggle("completed");
    });

    deletebtn.addEventListener("click", function() {
        li.remove();
    })

    li.appendChild(span);
    li.appendChild(deletebtn);
    tasklist.appendChild(li);

    taskinput.value = "";
    taskinput.focus();
}
    add.addEventListener("click", addtask);

    taskinput.addEventListener("keydown", function(event) {
        if(event.key == "Enter") {
            addtask();
        }
    });

