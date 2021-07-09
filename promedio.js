//______________Calculando promedios______________//        //
//                                                          //
// Vamos a calcular, mediante listas creadas en la consola, //
// el promedio de los valores de esas listas.               //
//////////////////////////////////////////////////////////////

// Creamos nuestra lista

const lista1 = [
    100,
    200,
    400,
    800,
    1200
];

// Creamos nuestra "calculadora de promedios" de esa lista

let suma1 = 0;
for (let i = 0; i < lista1.length; i++) {
    suma1 += lista1[i];
}

const promedio1 = suma1 / lista1.length;

// Creamos otra forma de "calcular el promedio"
// Nuestra "lista" debe ser un array con números.

function calcularPromedio(lista) {
    const suma = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = suma / lista.length;
    
    return promedio;
};

//////////////
