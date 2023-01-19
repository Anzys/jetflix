const txtarea = document.querySelector("txtarea");
const btn = document.querySelector("btn");
const todolist = document.querySelector("todo-list");

btn.addEventListener("click", function inputValue(e) {
  e.preventDefault();
  if (!inputValue.value) {
    return;
  }
});
const newDiv = document.createElement("div");
newDiv.classList.add("showInput");

const newTodo = document.createElement("li");
newTodo.classList.add("todo-item");
newTodo.innerText = inputValue.value;

newDiv.appendChild(newTodo);
