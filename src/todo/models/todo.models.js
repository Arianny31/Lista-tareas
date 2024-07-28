


export class Todo{

    /**
     * 
     * @param {String} descricion 
     */


    constructor( descricion ){
        this.id =1;
        this.descricion= descricion;
        this.done = false;
        this.createdAt= new Date();
        
    }
}