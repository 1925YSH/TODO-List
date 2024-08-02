document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});



// document.addEventListener('DOMContentLoaded',()=>{

//         const form =document.getElementById('todo-form');
//         const inputForm =document.getElementById('todo-input');
//         const todoList =document.getElementById('todo-list');


//         form.addEventListener('submit',(e)=>{

//                 e.preventDefault;

//                 addTask(inputForm.value);
//                 inputForm.value='';



//         });


//         function addTask(task) {

//             const li =document.createElement('li');
//             li.textContent=task;
        
//             const deleteBtn=document.createElement('button');
//            deleteBtn.textContent='Delete';
//             deleteBtn.classList.add('delete');
            
//             deleteBtn.addEventListener('click',()=>{
        
//                 todoList.removeChild(li);
        
//             });
        
//                 li.appendChild(deleteBtn);
//                 todoList.appendChild(li);
        
            
//         }
// });




