import { Todo } from '../todo/models/todo.models';

export const Filters ={
    All:' Todos',
    Completo: 'Completo',
    Pendiente: 'Pendiente',
}


const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Hola'),
        new Todo('adios, espero funcione')
    ],
    filter: Filters.All
}


const initStore =() =>{
    loadStore();
    console.log ('InitStore');

}

const loadStore = ()=>{

    if(!localStorage.getItem('state')) return;

    const { todos=[], filter= Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos= todos;
    state.filter= filter;

}

const saveStateToLocalStore = ()=>{
   localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) =>{
   switch(filter){
    case Filters.All :
        return [...state.todos];

    case Filters.Completo:
        return state.todos.filter(todo => todo.done);

    case Filters.Pendiente:
         return state.todos.filter(todo => !todo.done);

    default:
       throw new Error(`Opcion ${filter} no es valido`);
    
   }
}

/**
 * 
 * @param {Sting} descricion 
 */

const addTodo =(descricion) =>{
    if (!descricion) throw new Error('Descricion es requerida');
    state.todos.push(new Todo (descricion));
    saveStateToLocalStore();
}

const toggleTodo =(todoId) =>{
    state.todos = state.todos.map(todo=>{
        if(todo.id === todoId){
            todo.done= !todo.done;
        }
        return todo;
    })

    saveStateToLocalStore();
}

const deleteTodo  =(todoId) =>{
    state.todos= state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStore();
}

const deleteCompleted =() =>{
    state.todos= state.todos.filter(todo => !todo.done );
    saveStateToLocalStore();
}

const setFilter =( newFilter = Filters.All ) =>{
    state.filter= newFilter;
    saveStateToLocalStore();
}

const getCurrentFilter = ()=>{
   return state.filter;
}

export default{
    initStore, 
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos,

}