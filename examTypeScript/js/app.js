var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var $inputTodo = document.querySelector('.input-todo');
var $todolist = document.querySelector('.todolist');
var $showtodos = document.querySelector('.showtodos');
var todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JavaScript', completed: true }
];
function render() {
    var html = '';
    todos.forEach(function (_a) {
        var id = _a.id, content = _a.content, completed = _a.completed;
        html += "<li id=" + id + " class=\"todo-item\">\n        <input class=\"custom-checkbox\" type=\"checkbox\" id=\"ck-" + id + "\" " + [completed ? 'checked' : ''] + ">\n        <label for=\"ck-" + id + "\">" + content + "</label>\n        <button class=\"remove\">X</button>\n      </li>";
    });
    $todolist.innerHTML = html;
    $showtodos.textContent = JSON.stringify(todos, null, 2);
}
$inputTodo.onkeyup = function (e) {
    if (e.keyCode !== 13)
        return;
    todos = [{ id: generateId(), content: $inputTodo.value, completed: false }].concat(todos);
    $inputTodo.value = '';
    render();
};
$todolist.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.classList.contains('remove'))
        return;
    todos = todos.filter(function (todo) { return todo.id !== +target.parentElement.id; });
    render();
});
$todolist.addEventListener('change', function (e) {
    var target = e.target;
    todos = todos.map(function (todo) { return todo.id === +target.parentElement.id ? __assign({}, todo, { completed: !todo.completed }) : todo; });
    render();
});
function generateId() {
    return todos.length ? Math.max.apply(Math, todos.map(function (todo) { return todo.id; })) + 1 : 1;
}
render();
