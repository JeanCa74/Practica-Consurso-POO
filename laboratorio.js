"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laboratorio = void 0;
var laboratorio = /** @class */ (function () {
    function laboratorio(nombre, softwareInstlado) {
        this.nombre = nombre;
        this.softwareInstalado = softwareInstlado;
        this.Computadoras = [];
    }
    laboratorio.prototype.agregarComputadora = function (pc) {
        this.Computadoras.push(pc);
    };
    return laboratorio;
}());
exports.laboratorio = laboratorio;
