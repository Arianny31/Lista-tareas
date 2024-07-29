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

export default{
    initStore, 

}