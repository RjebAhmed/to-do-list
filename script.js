const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delCheck);
//functions
function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  todoInput.value = "";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //complete
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<img src="done.png" alt="">';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //trash
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<img src="trash.png" alt="">';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
}
function delCheck(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    item.parentElement.style.opacity = 0.5;
    item.parentElement.style.textDecoration = "line-through";
  }
}
