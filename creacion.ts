import {Estudiante} from './Estudiante';
import {Categorias} from './categoria';
import {Computadora} from './computadora';
import {Concurso} from './concurso';
import {laboratorio} from './laboratorio';

const concurso = new Concurso("Concurso de Programación 2025");

const logicaBasica = new Categorias("Lógica Básica");
concurso.agregarCategoria(logicaBasica);

const lab1 = new laboratorio("Laboratorio A", ["NetBeans", "MySQL", "VS Code"]);
logicaBasica.agregarLaboratorio(lab1);

lab1.agregarComputadora(new Computadora("PC-1"));
lab1.agregarComputadora(new Computadora("PC-2"));

const estudiante1 = new Estudiante(
  "Laura Gómez",
  logicaBasica,
  lab1,
  lab1.Computadoras[0],
  ["PostgreSQL", "Visual Studio"]
);

estudiante1.mostrarInfo();
