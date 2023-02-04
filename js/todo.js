/* TO DO LIST 관련 js파일입니다.
✅todo 입력, 생성, 삭제
*/

const todoContents = document.querySelector("#todoContents"); //영역(div)
const listShowBtn = document.querySelector("#listShowBtn"); //todo toggle btn
const todoList = document.querySelector("#todoList"); //todolist-Div

const todoInputForm = document.querySelector("#todoList form"); //todo 입력 form
const todoInput = document.querySelector("#todoList form .todoInput"); //todo 입력창
const list = todoList.querySelector("#list");

const TODOS_KEY = "todos";
let todos = []; //작성된 todo들을 담는 배열

//화면 우측하단 todoBtn - list toggle
function todoListToggle() {
  todoList.classList.toggle("toggle");
}
listShowBtn.addEventListener("click", todoListToggle);

//todo 입력 처리
function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj); //추가된 todo배열에 객체 저장
  addToDo(newTodoObj);
  savedTodo();
}
todoInputForm.addEventListener("submit", todoSubmit);

//todo list add item
function addToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const div = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = "◾";
  const spanText = document.createElement("span");
  spanText.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(div);
  li.appendChild(button);
  div.appendChild(span);
  div.appendChild(spanText);
  list.appendChild(li);
}

//생성된 todo 로컬에 저장.불러오기
function savedTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  console.log(parsedToDos);
  todos = parsedToDos; //기존에 저장되어있던 todo복원
  parsedToDos.forEach(addToDo);
}

//todo item 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  const id = parseInt(li.id);
  li.remove();
  todos = todos.filter((todo) => todo.id !== id);
  //배열에서 버튼 클릭한 요소를 제외하고 보여줌.
  savedTodo();
}

function deleFilter(todo) {
  return todo.id !== "1675489605800";
}
