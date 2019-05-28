let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];
let copyTodos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $customCheckbox = document.querySelector('.custom-checkbox');
const $btn = document.querySelector('.btn');
const $comtodos = document.querySelector('.completed-todos');
const $actodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');

function render() {
  let html = '';

  if (navState === 'all') {
    copyTodos = todos;
  } else if (navState === 'active') {
    copyTodos = todos.filter(todo => !todo.completed);
  } else {
    copyTodos = todos.filter(todo => todo.completed);
  }

  copyTodos.forEach(({ id, content, completed }) => {
    html += `<li id=${id} class="todo-item">
        <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${[completed ? 'checked' : '']}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;

  const ctnImcomplete = todos.filter(todo => !todo.completed).length;
  const ctnComplete = todos.filter(todo => todo.completed).length;
  $actodos.textContent = ctnImcomplete;
  $comtodos.textContent = ctnComplete;
}

function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

$nav.addEventListener('click', (e) => {
  // $nav요소의 자식요소들을 배열로변환
  [...$nav.children].forEach((todo) => {
    todo.classList.remove('active');
  });
  e.target.classList.add('active');

  navState = e.target.id;

  render();
});

$todos.onclick = function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  render();
};

$todos.onchange = function (e) {
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
  render();
};

$inputTodo.onkeyup = function (e) {
  const content = $inputTodo.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  $inputTodo.value = '';
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  render();
};

$customCheckbox.onchange = function (e) {
  if (e.target.checked) todos = todos.map(todo => Object.assign(todo, { completed: true }));
  else todos = todos.map(todo => Object.assign(todo, { completed: false }));
  render();
};

$btn.onclick = function () {
  // complted가 false인 것만 filter해서 가져오기
  todos = todos.filter(todo => !todo.completed);
  render();
};


render();
