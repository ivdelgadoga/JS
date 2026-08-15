console.log('Desde 01_some.js');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octube', 'Noviembre', 'Diciembre'];

// Recorre el arreglo 
meses.forEach((mes) => {
    console.log('Mes: ', mes);
});

// Crea un nuevo arreglo y lo recorre 
const nuevoArregloMeses = meses.map((mes) => {});

console.log(nuevoArregloMeses);