import { Categorias } from "./categoria";
import { Computadora } from "./computadora";
import { laboratorio } from "./laboratorio";

export class Estudiante {

    nombre : string;
    categoria : Categorias;
    laboratorio : laboratorio;
    computadora : Computadora;
    softwareRequerido : string [];

    constructor (nombre : string, categoria : Categorias, laboratorio : laboratorio, computadora : Computadora, softwareRequerido : string []) {

        this.nombre = nombre;
        this.categoria = categoria;
        this.laboratorio = laboratorio;
        this.computadora = computadora;
        this.softwareRequerido = softwareRequerido;

        computadora.estaOcupada = true;

    }

    mostrarInfo () : void {

        console.log(`Participante: ${this.nombre}`);
        console.log(`Categoria: ${this.categoria.nombre}`);
        console.log(`Laboratorio: ${this.laboratorio.nombre}`);
        console.log(`Computadora: ${this.computadora.id}`);
        console.log(`Software del Laboratorio: ${this.laboratorio.softwareInstalado.join}`);
        console.log(`Software requerido por el Estudiante: ${this.softwareRequerido.join}`);

    }


}