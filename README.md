# Tareas-Javacripts
Educativo y de Aprendizaje Personal

---
## Tabla de Contenidos
- [Tecnologías](#Tecnologías)
- [HTML](#HTML)
- [CSS](#CSS)
- [JS](#JS)
---
# Tecnologías
- HTML5.
- CSS3. 
- JavaScript
--- 
# HTML 
1. HTML  
   ```bash
   <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestor de Tareas</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>

        <div class="container">
            <h2>📌 Gestor de Tareas</h2>
            <div class="task-input">
                <input type="text" id="taskInput" placeholder="Escribe una tarea...">
                <button onclick="agregarTarea()">Agregar</button>
            </div>
            <ul id="taskList"></ul>
        </div>

        <script src="scripts.js"></script>
    </body>

    </html>

# CSS
2. CSS
    ```bash 
    /* Estilos generales */
    body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        color: white;
    }

    /* Contenedor principal */
    .container {
        background: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
        width: 350px;
        text-align: center;
        color: #333;
    }

    /* Input y botón */
    .task-input {
        display: flex;
        gap: 10px;
    }

    input {
        flex: 1;
        padding: 10px;
        border: 2px solid #764ba2;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
    }

    button {
        background: #764ba2;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 16px;
    }

    button:hover {
        background: #5a3e85;
    }

    /* Lista de tareas */
    ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
    }

    li {
        background: #f1f1f1;
        margin: 8px 0;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        transition: 0.3s;
    }

    li:hover {
        transform: scale(1.03);
    }

    /* Botones dentro de las tareas */
    .task-btn {
        background: transparent;
        border: none;
        font-size: 18px;
        cursor: pointer;
        transition: 0.3s;
    }

    .task-btn.complete {
        color: green;
    }

    .task-btn.delete {
        color: red;
    }

    .task-btn:hover {
        transform: scale(1.2);
    }

    /* Tareas completadas */
    .completed {
        text-decoration: line-through;
        color: gray;
        opacity: 0.7;
    }
# JS
2. JS
    ```bash
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
