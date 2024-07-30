import html from './app.html?raw';
import todoStore, {Filters} from '../store/todo.store';
import  {renderTodos, renderPending}  from './use-case';

const ElementId ={
    ClearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters:'.filtro',
    PendienteCountLabel:'#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const  App = (elementId) =>{

    
    const updatePendingCount =() =>{
        renderPending(ElementId.PendienteCountLabel);
    }

    const displayTodos= ()=>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos( ElementId.TodoList, todos )
        updatePendingCount()
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
    const ClearCompleted = document.querySelector(ElementId.ClearCompleted);
    const filtersLIs = document.querySelectorAll(ElementId.TodoFilters);

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

    todoListUL.addEventListener('click' , (event)=>{
        const isDestroyElement = event.target.className === 'destroy';
        const  element = event.target.closest('[data-id]');
        if(!element || !isDestroyElement) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    ClearCompleted.addEventListener('click', ()=>{
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersLIs.forEach(element =>{
        element.addEventListener('click',(element)=>{
            filtersLIs.forEach(el => el.classList.remove('selected'))
            element.target.classList.add('selected');

           switch (element.target.text){
            case 'Todos':
                todoStore.setFilter(Filters.All)
                break;
            case 'Pendientes':
                todoStore.setFilter(Filters.Pendiente)
                break;
            case 'Completados':
                todoStore.setFilter(Filters.Completo)
                break;

           }

           displayTodos();
        })
    })
}