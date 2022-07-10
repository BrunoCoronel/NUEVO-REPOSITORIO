/*
---array---
let unaLista = [1, 2, 3, 4];
document.write(unaLista);

1,2,3,4
---array asociativo---
let unRegistro = {
  primerDato: "una cosa",
  segundoDato: "otra cosa",
  tercerDato: "cosa",
};
document.write(unRegistro["primerDato"]);

una cosa


curso de arrays---------------------------------------------------------------------


---while---
let numero = 0;
while (numero < 5) {
  numero++;
  document.write(numero);
}

12345

---do while---
let numero = 0;
do {
  numero += 4;
  document.write(numero);
} while (numero < 5);

48


---break---


let numero = 0;
while (numero < 100) {
  numero++;
  document.write(numero);
  if (numero == 20) {
    break;
  }
}



---for----
for (let i = 0; i <= 5; i++) {
  document.write(i + "<br>");
}
1
2
3
4
5

------------for y break--------------------------------
for (let i = 0; i <= 5; i++) {
  document.write(i + "<br>");
  if (i == 3) {
    break;
  }
}
0
1
2

---for y continue---

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  document.write(i + "<br>");
}
0
1
2
4
5
---for in---      devuelve la posicion del elemento de la lista (dia en este caso)
let semana = [
  "lunes",
  "viernes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

para que nos de lo que dice el elemento:

for (dia in semana) {
  document.write(semana[dia] + "<br>");
}

lunes
viernes
martes
miercoles
jueves
viernes
sabado
domingo


---for of--- 

let semana = [
  "lunes",
  "viernes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
for (dia of semana) {
  document.write(dia + "<br>");
}

lunes
viernes
martes
miercoles
jueves
viernes
sabado
domingo



---FUNCIONES--- 

function suma(num1, num2) {
  let res = num1 + num2;
  return res;
}

function saludar(nombre) {
  let frase = `hola ${nombre} como estas`;
  return frase;
}

const saludar = function (nombre) {
  let frase = `hola ${nombre} como estas`;
  return frase;
};

const saludar = (nombre) => {
  let frase = `hola ${nombre} como estas`;
  return frase;
};
---------------------------------------------------------------------------------

const saludar = (nombre) => {
  document.write(`hola ${nombre} eu`);
  return "si";
};
const saludar = (nombre) => document.write(`hola ${nombre} eu`);

_____________________________________________________________primer problema


let primeraPerDes2am = false;

const revisarCliente = (time) => {
  let edad = prompt("decime tu edad");
  if (edad > 18) {
    if (time >= 2 && time < 7 && primeraPerDes2am != false) {
      alert(
        "podes pasar gratis porque sos la primer persona despues de las 2 AM"
      );
      primeraPerDes2am = true;
    } else {
      alert(`son las ${time}:00hs y podes pasar, pero tenes que pagar entrada`);
    }
  } else {
    alert("sos menor de edad y no podes pasar");
  }
};

______________________________________________________________segundo problema


let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("nombre del alumno" + (i + 1)), 0];
}

function tomarAsistencia(nombre, ps) {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[ps][1]++;
  }
} 

for (i = 0; i < 5; i++) {
  for (alumno in alumnosTotales) {
    tomarAsistencia(alumnosTotales[alumno][0], alumno);
  }
}

for (alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}:<br>
  ___________Presentes: ${alumnosTotales[alumno][1]} <br>
  ___________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
  if (30 - alumnosTotales[alumno][1] > 18) {
    resultado += " <b>REPROBADO POR INASISTENCIAS</b><br><br>";
  } else {
    resultado += "<br><br>";
  }
  document.write(resultado);
}


function sacarAreaTubo(diametro){

}
curso de arrays---------------------------

longitud---{{{{{{{{{{{{{{}}}}}}}}}}}}}}
let numeros = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(numeros.length);
    5
    
para seleccionar los elementos{{{{{{{{{{{{{{}}}}}}}}}}}}}}
    

let numeros = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(numeros[2]);

para seleccionar el ultimo elemento{{{{{{{{{{{}}}}}}}}}}}



let numeros = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(numeros[numeros.]);

for
*/
