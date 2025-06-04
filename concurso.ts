import {Categorias} from './categoria';

export class Concurso {

    nombre : string;
    Categorias : Categorias [];

    constructor (nombre : string) {

        this.nombre = nombre;
        this.Categorias = [];

    }

    agregarCategoria(categoria : Categorias){

        this.Categorias.push(categoria);

    }

}