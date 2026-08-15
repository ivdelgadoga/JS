console.log('Desde 01_some.js');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octube', 'Noviembre', 'Diciembre'];

// Recorre el arreglo 
meses.forEach((mes) => {
    console.log('Mes: ', mes);
});

const carrito = [
    { nombre: 'Alexa Echo Show', cantidad: '9' },
    { nombre: 'Alexa Echo Spot', cantidad: '2' },
    { nombre: 'Audifonos Redmi', cantidad: '11' },
    { nombre: 'Audifonos Gamer', cantidad: '3' },
    { nombre: 'Barra de Sonido', cantidad: '9' },
    { nombre: 'Barra de luz LED', cantidad: '50' }
];

const resultado = meses.includes('Marzo');

console.log(resultado); // true, false

// Para arreglos de objetos se utiliza Some 

const existe = carrito.some((item) => {
    return item.nombre === 'Alexa echo spo'
});

console.log(existe);

const existeMes = meses.some( mes => mes === 'Enero');

console.log(existeMes);