import html from './app.html?raw';
import todoStore, {  } from '../store/todo.store';
import { renderTodos } from './use-case/render-todos';

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

    //listerners
    NewDescriptionInput.addEventListener('keyup', ( event ) =>{
        console.log(event);
        console.log(event.target)
    })
}