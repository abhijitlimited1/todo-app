
// Create a Function to Show User Todo Lis
    const userInput = document.querySelector("#input");
    const userDate = document.querySelector("#date");
    const addButton = document.querySelector("#add-btn");
    const addTodo = document.querySelector(".todo-list");
    const deleteButton = document.querySelectorAll(".delete-btn");
    
    

function userTodoList(){
    addButton.addEventListener('click',(e)=>{
        const html = `<div class="parent">
            <div class="todo-text">
            ${userInput.value}
             </div>
             <span>${userDate.value}</span>
             <button class="delete-btn">Delete</button>
        </div>`;

       if(userInput.value!== '' && userDate.value !== ''){
        addTodo.innerHTML += html;
       } else{
         return false;
       }
       
        userInput.value = '';
        userDate.value = '';
        loadTodo();
    });

    addTodo.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
          e.target.parentNode.remove();
          loadTodo();
        }
      });
}

function loadTodo(){
  localStorage.setItem('data',addTodo.innerHTML);
}

function getData(){
  addTodo.innerHTML = localStorage.getItem('data');
}

getData()
userTodoList();