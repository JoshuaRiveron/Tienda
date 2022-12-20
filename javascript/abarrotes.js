const productos = [
    {nombre: 'Act II hechas', valor: 18},
    {nombre: 'Act II microondas', valor: 15},
    {nombre: 'Azucar 1kg', valor: 24},
    {nombre: 'Chocolate abuelita-ibarra', valor: 15},
    {nombre: 'Huevo 1kg', valor: 48},
    {nombre: 'Lechce alpura', valor: 25},
    {nombre: 'Lechce alpura deslactosada', valor: 27},
    {nombre: 'Maruchan', valor: 17},
    {nombre: 'Prispas', valor: 15},
    {nombre: 'Tank', valor: 6},
    {nombre: 'Totis', valor: 12},
    {nombre: 'Yomi lala sabor 1L', valor: 30},
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