import {Computadora} from './computadora';

export class laboratorio {

    nombre : string;
    Computadoras : Computadora[];
    softwareInstalado : string [];
    
    constructor (nombre : string, softwareInstlado : string[]){

        this.nombre = nombre;
        this.softwareInstalado = softwareInstlado;
        this.Computadoras = [];

    }

    agregarComputadora (pc : Computadora) : void{

        this.Computadoras.push(pc);

    }

}