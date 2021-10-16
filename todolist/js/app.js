// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem("todos"));

// console.log(todos);
// console.log(typeof todos);
if(todos){
    todos.forEach( todo => addtodo(todo));
}

formel.addEventListener('submit',(e)=>{

    // console.log('hay');

    addtodo();
    
    e.preventDefault();
});

function addtodo(todo){
    // console.log('i am working');

    let todotext = inputel.value;
    // console.log(todotext);

    if(todo){

        todotext = todo.text;
    }

    if(todotext){
    
        const li = document.createElement('li');


        if(todo && todo.complete){

            // add class
            li.classList.add("completed");

        }
        // console.log(li);
        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        todoul.appendChild(li);
        inputel.value = '';

        // add to localStorage
        upadatelocalstorage();

        // add line-through by left-click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');

            upadatelocalstorage();

        });

        // remove by right click
        li.addEventListener('contextmenu',(e)=>{
            // console.log('i am working');
            e.target.remove();
            
            upadatelocalstorage();

            e.preventDefault();
            
        });
    
    }else{
        
        window.alert('Enter your todo');
    }
}

function upadatelocalstorage(){
    // console.log('storage is ready');

   let  todolis = document.querySelectorAll('li');
    // console.log(todolis);

    let todos = [];

    todolis.forEach(todoli=>{

        // console.log(todoli);
        // console.log(todoli.innerText);

        todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        });


    });

    // console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
}