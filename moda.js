//    //______________Calculando la moda______________//    //
//                                                          //
// Vamos a calcular, mediante listas creadas en la consola, //
// la moda de los valores de esas listas.                   //
//////////////////////////////////////////////////////////////

// Creamos nuestra lista1

const lista1 = [1,2,3,1,2,3,4,2,5,1,5,6,2,3,1,5,6,2,3,1,4,5,2,3,5];

// Nuestra lista es más extensa de lo habitual, pero su forma
// de calcular la moda, no debería ser difícil para nuestros
// ordenadores.
// Creamos nuestra "calculadora de moda" de esa lista1.

const objectLista1 = {};

lista1.map(
    function (elemento) {
        if (objectLista1[elemento]) {
            objectLista1[elemento] += 1;
        } else {
            objectLista1[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(objectLista1).sort(
        function (a,b) {
            return a[1]-b[1];
        }
);

let moda1 = lista1Array[lista1Array.length-1];

// Creamos una función para calcular la moda de cualquier lista.
// Nuestra "lista" debe ser un [array] con números.

function calcularModa(lista) {
    const objectLista = {};
    lista.map(
        function(elemento) {
            if (objectLista[elemento]) {
                objectLista[elemento] += 1;
            } else {
                objectLista[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(objectLista).sort(
        function (a,b) {
            return a[1] - b[1];
        }
    );

    let moda = listaArray[listaArray.length-1];
    return moda;
}

//////////////////////////////////////////////////////////////


// Aquí dejo otro método, el cual sirve también en cualquier
// lista, y tiene muchas menos líneas de código.

// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a, b) =>
//         arr.filter(v => v === a).length
//         - arr.filter(v => v === b).length
//     ).pop();
// }


// console.log(mode(NUMBERS));

// Créditos: Eliaz Bobadilla @ Platzi.com