"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concurso = void 0;
var Concurso = /** @class */ (function () {
    function Concurso(nombre) {
        this.nombre = nombre;
        this.Categorias = [];
    }
    Concurso.prototype.agregarCategoria = function (categoria) {
        this.Categorias.push(categoria);
    };
    return Concurso;
}());
exports.Concurso = Concurso;
