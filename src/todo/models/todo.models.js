import { v4 as uuid } from 'uuid';


export class Todo{

    /**
     * 
     * @param {String} descricion 
     */


    constructor( descricion ){
        this.id = uuid();
        this.descricion= descricion;
        this.done = false;
        this.createdAt= new Date();
        
    }
}