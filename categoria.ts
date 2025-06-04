import {laboratorio} from './laboratorio';

export class Categorias {

    nombre : string;
    Laboratorios : laboratorio [];

    constructor (nombre : string) {

        this.nombre = nombre;
        this.Laboratorios = [];

    }

    agregarLaboratorio (lab : laboratorio) {

        this.Laboratorios.push(lab);

    }



}