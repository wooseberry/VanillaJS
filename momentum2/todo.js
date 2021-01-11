const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector(".input"),
    toDoList = document.querySelector(".js-toDoList")

    const TODOS_LS = "toDos"; 

    function paintToDo(){
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerText = "❌";
        delBtn.addEventListener("click",deleteTodo);
        const span = document.createElement("span");
        const newId = toDos.length  +1;
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id = newId;
        toDoList.appendChild(li)

    }

    function handleSubmit(evet){
        const currentValue = toDoInput.Value;
        paintToDo(currentValue);
        toDoInput.Value="";
    }
    
    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){

        }
    }

    function init(){
        loadToDos();

    }

    init();