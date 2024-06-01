const host = "http://35.169.187.32:800";
const todosContainer = document.querySelector('.comments-history');

function getTodos() {
    axios.get(`${host}/todo`)
         .then(response => {
            console.log(response.data);
            renderTodos(response.data.todos);
         })
         .catch(error => {
            console.error('Error fetching todos:', error);
         });
}

function renderTodos(todos) {
   todosContainer.innerHTML=''; // todosContainer 초기화
   todos.forEach(todo => {
        const todoDiv=document.createElement('div');
        todoDiv.classList.add('comment-item');
        todoDiv.innerHTML = `
            <div class="todo-person">작성자: ${todo.person}</div>
            <div class="todo-item">내용: ${todo.item}</div>
            <div class="todo-timestamp">${todo.timestamp}</div>
        `;
        todosContainer.appendChild(todoDiv);
    // 삭제버튼생성및이벤트처리
        const deleteBtn=document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent='x';

        deleteBtn.addEventListener('click', function () {
            deleteTodo(todo.id);
        });
    // todoDiv에삭제버튼추가
        todoDiv.appendChild(deleteBtn);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    getTodos();
});
const todoname=document.querySelector('.todo-input-name');
const todoInput = document.querySelector('.todo-input');

    todoInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' ) {
            addTodo();
            todoname.addTodo()
        }
});

function addTodo() {
    const title=todoInput.value.trim();
    const name=todoname.value.trim();
    //const person=todonameinput.value.trim();
    let todoData={
        id:0,
        person: name, 
        item: title,
        timestamp:new Date().toLocaleString()
    };

    if(title===''||name=='') return;
    axios.post(`${host}/todo`, todoData)
        .then(response=>{
            todoInput.value='';
            todoname.value='';
            getTodos();
        })
        .catch(error=>{
            console.error('Error adding todo:', error);
        });
}

function deleteTodo(id) {
    axios.delete(`${host}/todo/${id}`)
        .then(function (response) {
            console.log('Todo deleted:', response.data);
            getTodos();
        })
        .catch(function (error) {
            console.error('Error deleting todo:', error);
        });
}


