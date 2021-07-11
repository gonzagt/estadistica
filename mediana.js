//______________Calculando la mediana______________//       //
//                                                          //
// Vamos a calcular, mediante listas creadas en la consola, //
// la mediana de los valores de esas listas.                //
//////////////////////////////////////////////////////////////

// Creamos nuestra lista

const lista1 = [
    100,
    200,
    400,
    500,
    800,
    1200
];

// Primero que nada, debemos saber si nuestra lista es par
// o impar. Para ello, creamos una función que nos ayude con 
// esto. La función esPar(n), nos va a indicar si n es 0, par
// o impar.

function esPar (n) {
    if (n%2 === 0){
        return true;
    } else {
        return false;
    }
}

// Creamos nuestra "calculadora de mediana" de esa lista.

let mediana1;

const mitadLista1 = parseInt(lista1.length/2);

if (esPar(lista1.length)) {
    const e1 = lista1[mitadLista1 - 1];
    const e2 = lista1[mitadLista1];
    mediana1 = (e1+e2)/2;
} else {
    mediana1 = lista1[mitadLista1];
}

// Creamos otra forma de "calcular la mediana".
// Nuestra "lista" debe ser un array con números.

function calcularMediana1(lista1) {
    
    let mediana;
    const mitadLista1 = parseInt(lista1.length / 2);
    if (esPar(lista1.length)) {
        const e1 = lista1[mitadLista1 - 1];
        const e2 = lista1[mitadLista1];
        mediana = (e1 + e2) / 2;
    } else {
        mediana = lista1[mitadLista1];
    }
    return mediana;
};

// Estos métodos, funcionaron para listas ordenadas, pero no
// siempre podemos esperar listas ordenadas. Para solucionar
// esto, vamos a usar un método que nos ordene los números
// de menor a mayor: El método Array.sort(). Funciona así:

// lista.sort(function (a, b) {
//     return a - b;
// });

// Y ahora, vamos a crear nuestra función calcularMediana()
// para que ordene los elementos de la lista antes de que nos
// retorne una solución, y evitar así problemas de desorden de 
// elementos.

function calcularMediana(lista) {
    lista.sort(function (a, b) {
        return a - b;
    });
    let mediana;
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const e1 = lista[mitadLista - 1];
        const e2 = lista[mitadLista];
        mediana = (e1 + e2) / 2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
};

//////////////////////////////////////////////////////////////
