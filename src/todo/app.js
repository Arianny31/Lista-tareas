import html from './app.html?raw';
import todoStore from '../store/todo.store';
import  {renderTodos}  from './use-case/render-todos';

const ElementId ={
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId 
 */


export const  App = (elementId) =>{

    const displayTodos= ()=>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos( ElementId.TodoList, todos )
    }

    (() =>{

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //referencias HTML
    const NewDescriptionInput = document.querySelector(ElementId.NewTodoInput);
    const todoListUL = document.querySelector(ElementId.TodoList);

    //listerners
    NewDescriptionInput.addEventListener('keyup', ( event ) =>{
       if(event.keyCode !== 13 ) return;
       if(event.target.value.trim().length ===0) return;

       todoStore.addTodo( event.target.value );
       displayTodos();
       event.target.value= '';
    })

    todoListUL.addEventListener('click' , (event)=>{
        const  element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })
}