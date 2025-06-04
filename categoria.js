"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categorias = void 0;
var Categorias = /** @class */ (function () {
    function Categorias(nombre) {
        this.nombre = nombre;
        this.Laboratorios = [];
    }
    Categorias.prototype.agregarLaboratorio = function (lab) {
        this.Laboratorios.push(lab);
    };
    return Categorias;
}());
exports.Categorias = Categorias;
