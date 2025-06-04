"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, categoria, laboratorio, computadora, softwareRequerido) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.laboratorio = laboratorio;
        this.computadora = computadora;
        this.softwareRequerido = softwareRequerido;
        computadora.estaOcupada = true;
    }
    Estudiante.prototype.mostrarInfo = function () {
        console.log("Participante: ".concat(this.nombre));
        console.log("Categoria: ".concat(this.categoria.nombre));
        console.log("Laboratorio: ".concat(this.laboratorio.nombre));
        console.log("Computadora: ".concat(this.computadora.id));
        console.log("Software del Laboratorio: ".concat(this.laboratorio.softwareInstalado.join));
        console.log("Software requerido por el Estudiante: ".concat(this.softwareRequerido.join));
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
