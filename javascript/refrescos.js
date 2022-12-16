const productos = [
    {nombre: 'Ameyal', valor: 16},
    {nombre: 'Coca 250 ml', valor: 10},
    {nombre: 'Coca 400 ml', valor: 13},
    {nombre: 'Coca 600 ml', valor: 17},
    {nombre: 'Coca 1 L', valor: 24},
    {nombre: 'Coca 1.75 ml', valor: 30},
    {nombre: 'Coca 2.75 L', valor: 40},
    {nombre: 'Coca 3 L', valor: 50},
    {nombre: 'Coca s/a 300 ml', valor: 8},
    {nombre: 'Coca s/a 2.5', valor: 30},
    {nombre: 'Coca Vidrio 235 ', valor: 7},
    {nombre: 'Coca Vidrio 500', valor: 13},
    {nombre: 'Coca Vidrio 1 1/4 L', valor: 23},
    {nombre: 'Coca ret 2.5 L', valor: 29},
    {nombre: 'Coca ret 3 L', valor: 35},
    {nombre: 'Coca lata 355 ml', valor: 17},
    {nombre: 'Delaware', valor: 16},
    {nombre: 'Fanta', valor: 16},
    {nombre: 'Fresca', valor: 16},
    {nombre: 'Jarrito 600 ml', valor: 12},
    {nombre: 'Jarrito 2 L', valor: 20},
    {nombre: 'Mundet roja', valor: 16},
    {nombre: 'Pepsi 600 ml', valor: 12},
    {nombre: 'Pepsi 1.75 L', valor: 21},
    {nombre: 'Pepsi 3 L', valor: 31},
    {nombre: 'Power ADE 1 L', valor: 30},
    {nombre: 'Senzao', valor: 16},
    {nombre: 'Sidral', valor: 16},
    {nombre: 'Sprite', valor: 16},
    {nombre: 'Yoli', valor: 16},
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    //console.log(formulario.value);
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1 ){
            resultado.innerHTML += `
                <li>${producto.nombre} - Precio: ${producto.valor}</li>
            `
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
            <li>Producto no encontrado</li>
        `
    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();