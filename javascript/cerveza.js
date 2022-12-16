const productos = [
    {nombre: 'Barrilito chica', valor: 15},
    {nombre: 'Barrilito lata', valor: 15},
    {nombre: 'Bohemia', valor: 20},
    {nombre: 'Carta blanca laton', valor: 20},
    {nombre: 'Carta blanca Cahuama', valor: 40},
    {nombre: 'Corona vidrio chica', valor: 20},
    {nombre: 'Corona laton', valor: 25},
    {nombre: 'Corona Mega', valor: 45},
    {nombre: 'Heinekei 0.0', valor: 20},
    {nombre: 'Heinekei Mega/Cahuamon', valor: 45},
    {nombre: 'Indio laton', valor: 20},
    {nombre: 'Indio Mega/Cahuamon', valor: 45},
    {nombre: 'Leon Mega', valor: 45},
    {nombre: 'Misil m,c,v', valor: 35},
    {nombre: 'Modelo laton y/o Negra', valor: 25},
    {nombre: 'Modelo Mega', valor: 50},
    {nombre: 'New mix laton', valor: 30},
    {nombre: 'Rifadita', valor: 20},
    {nombre: 'Sol clamato laton', valor: 28},
    {nombre: 'Skyy Blue', valor: 25},
    {nombre: 'Tecate laton', valor: 20},
    {nombre: 'Tecate Mega/Cahuamon', valor: 45},
    {nombre: 'Victoria laton y/o sabor', valor: 25},
    {nombre: 'Victoria Mega', valor: 45},
    {nombre: 'Victoria vidrio chica', valor: 20},
    {nombre: 'Viña 400 ml', valor: 25},
    {nombre: 'XX Laton', valor: 20},
    {nombre: 'XX Mega/Cahuamon', valor: 50},
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