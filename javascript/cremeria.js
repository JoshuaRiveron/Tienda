const productos = [
    {nombre: 'Activia', valor: 15},
    {nombre: 'Amper', valor: 18},
    {nombre: 'Boing chico', valor: 10},
    {nombre: 'Boing lata', valor: 15},
    {nombre: 'Boing litro', valor: 25},
    {nombre: 'Boing medio', valor: 15},
    {nombre: 'Boing vidrio', valor: 15},
    {nombre: 'Crema alpura 1/4', valor: 17},
    {nombre: 'Crema lala 1/4', valor: 17},
    {nombre: 'Crema alpura 1/2', valor: 37},
    {nombre: 'Crema lala 1/2', valor: 37},
    {nombre: 'Danonino chico', valor: 6},
    {nombre: 'Danonino grande', valor: 10},
    {nombre: 'Danonimo maxi', valor: 10},
    {nombre: 'Dunup', valor: 15},
    {nombre: 'Electrolit', valor: 25},
    {nombre: 'Gelatina Dany', valor: 10},
    {nombre: 'Iberia', valor: 15},
    {nombre: 'Jumex lata-botella', valor: 23},
    {nombre: 'Jumex litro', valor: 30},
    {nombre: 'Leche hershey', valor: 15},
    {nombre: 'Leche santa clara', valor: 12},
    {nombre: 'Leche santa clara botecito', valor: 15},
    {nombre: 'Leche yomi lala', valor: 12},
    {nombre: 'Manchego la Villita', valor: 42},
    {nombre: 'Philadelphia grande', valor: 35},
    {nombre: 'Red bull', valor: 40},
    {nombre: 'Salchicha fud pq', valor: 25},
    {nombre: 'Suerox', valor: 25},
    {nombre: 'Vive 100 chico', valor: 12},
    {nombre: 'Volt', valor: 18},
    {nombre: 'Yakult', valor: 9},
    {nombre: 'Yogurt lala granola', valor: 15},
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