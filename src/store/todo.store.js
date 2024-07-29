import { Todo } from '../todo/models/todo.models';

const Filters ={
    All:' Todos',
    Completed: 'Completo',
    Pending: 'Pendiente'
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

    console.log(state);
    console.log ('InitStore');

}

const loadStore = ()=>{
    throw new Error ('No esta implementado');

}

const getTodos = (filter = Filters.All) =>{
   switch(filter){
    case Filters.All :
        return [...state.todos];

    case Filters.Completed:
        return state.todos.filter(todo => todo.done);

    case Filters.Pending:
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
    throw new Error ('No esta implementado');

}

const toggleTodo =(todoId) =>{
    throw new Error ('No esta implementado');
}

const deleteTodo  =(todoId) =>{
    throw new Error ('No esta implementado');
}

const deleteCompleted =() =>{
    throw new Error ('No esta implementado');
}

const setFilter =( newFilter = Filters.All ) =>{
    throw new Error ('No esta implementado');
}

const getCurrentFilter = ()=>{
    throw new Error ('No esta implementado');
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