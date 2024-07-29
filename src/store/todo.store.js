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
    if (!descricion) throw new Error('Descricion es requerida');
    state.todos.push(new Todo (descricion));
}

const toggleTodo =(todoId) =>{
    state.todos = state.todos.map(todo=>{
        if(todo.id === todoId){
            todo.done= !todo.done;
        }
        return todo;
    })
}

const deleteTodo  =(todoId) =>{
    state.todos= state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted =() =>{
    state.todos= state.todos.filter(todo => todo.done );
}

const setFilter =( newFilter = Filters.All ) =>{
    state.filter= newFilter;
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