const productos = [
    {nombre: 'Barcel', valor: 15},
    {nombre: 'Bolsalza', valor: 20},
    {nombre: 'Chetos', valor: 13},
    {nombre: 'Chetos Mix', valor: 16},
    {nombre: 'Chicharrones de cerdo', valor: 16},
    {nombre: 'Chips', valor: 15},
    {nombre: 'Churrumais', valor: 10},
    {nombre: 'Crujitos', valor: 15},
    {nombre: 'Doritos', valor: 15},
    {nombre: 'Paquetaxo', valor: 15},
    {nombre: 'Palomitas Pop chicas', valor: 10},
    {nombre: 'Palomitas Pop grandes', valor: 15},
    {nombre: 'Rancheritos', valor: 15},
    {nombre: 'Takis', valor: 15},
    {nombre: 'Toreadas', valor: 15},
    {nombre: 'Tostitos', valor: 15},
    {nombre: 'Sabritas', valor: 16},
    {nombre: 'Sabritas grandes', valor: 45},
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