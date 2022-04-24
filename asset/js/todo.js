const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDoWindow = document.querySelector("#todo_window_title");
const todo_load_User_Name = localStorage.getItem("username");

todo_window_title.innerText = `${todo_load_User_Name}'s Todo list`;

const TODOS_KEY = `${todo_load_User_Name}_todos`;

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("div");
    let articles_date = new Date(newTodo.id);
    let articles_Year = String(articles_date.getFullYear());
    let articles_Month = String(articles_date.getMonth());
    let articles_Day = String(articles_date.getDate()).padStart(2, "0");
    let articles_Hour = String(articles_date.getHours()).padStart(2, "0");
    let articles_Minute = String(articles_date.getMinutes()).padStart(2, "0");
    span.innerHTML = `<p class="todo_detail">${newTodo.text}</p><p class="todo_date">${articles_Year}년 ${articles_Month}월 ${articles_Day}일 ${articles_Hour}시 ${articles_Minute}분</p>`;
    const button = document.createElement("button");
    button.innerText = "미션완료!";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}