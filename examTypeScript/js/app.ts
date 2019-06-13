interface Todo{
  id: number;
  content: string;
  completed: boolean;
}

const $inputTodo: HTMLInputElement = document.querySelector('.input-todo');
const $todolist: HTMLUListElement = document.querySelector('.todolist');
const $showtodos: HTMLPreElement = document.querySelector('.showtodos');

let todos: Todo[] = [
  {id:1, content:'HTML', completed:true},
  {id:2, content:'CSS', completed:false},
  {id:3, content:'JavaScript', completed:true}
]

function render():void {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `<li id=${id} class="todo-item">
        <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${[completed ? 'checked' : '']}>
        <label for="ck-${id}">${content}</label>
        <button class="remove">X</button>
      </li>`;
  });

  $todolist.innerHTML = html;
  $showtodos.textContent = JSON.stringify(todos,null,2);
}

$inputTodo.onkeyup = function(e){
  if(e.keyCode !== 13) return;
  todos = [{ id: generateId(), content:$inputTodo.value, completed: false }, ...todos];
  $inputTodo.value = '';
  render();
};

$todolist.addEventListener('click',(e) => {
  const target = <HTMLElement>e.target;
  if (!target.classList.contains('remove')) return;
  todos = todos.filter(todo => todo.id !== +target.parentElement.id);
  render();
});

$todolist.addEventListener('change',(e)=>{
  const target = <HTMLElement>e.target;
  todos = todos.map(todo => todo.id === +target.parentElement.id ? { ...todo, completed: !todo.completed } : todo);
  render();
});

function generateId(){
  return todos.length? Math.max(...todos.map(todo=>todo.id))+1 : 1;
}

render();