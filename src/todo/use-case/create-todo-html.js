import { Todo } from "../models/todo.models";

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML= (todo) =>{

    if(!todo ) throw new Error ('Todo es un objeto necesario');

    const {done,descricion, id }= todo;

    const html =
    `   <div class="view">
            <input class="toggle" type="checkbox" ${ done ?'checkbox' :' '}>
            <label>${ descricion }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML=html;
    liElement.setAttribute('data-id', id);


    if( todo.done){
        liElement.classList.add('Completo');
    }
   


    return liElement;
}