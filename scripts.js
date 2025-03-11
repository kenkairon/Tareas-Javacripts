document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Función para agregar una tarea
    window.agregarTarea = function () {
        const tareaTexto = taskInput.value.trim();
        if (tareaTexto === "") {
            alert("Escribe una tarea antes de agregar.");
            return;
        }

        // Crear elementos
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = tareaTexto;

        const btnComplete = document.createElement("button");
        btnComplete.textContent = "✅";
        btnComplete.classList.add("task-btn", "complete");
        btnComplete.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "❌";
        btnDelete.classList.add("task-btn", "delete");
        btnDelete.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        // Agregar elementos al li
        li.appendChild(span);
        li.appendChild(btnComplete);
        li.appendChild(btnDelete);

        // Agregar la tarea a la lista
        taskList.appendChild(li);

        // Limpiar el input
        taskInput.value = "";
    };
});
