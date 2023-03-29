const numeros = [1,2,3,4,5,6,7,8]

const dobles = [...numeros].reduce((acum,el)=>[...acum, el*2], [])
// const dobles = [...numeros].map(num=>num*2).filter(num=>num>10).reduce((a,b)=>a+b)
console.log(dobles)



//array de productos con id, nombre, precio en dolares y cantidad
const productos = [
    {id:1, nombre:'camisa', precio: 100, cantidad: 2},
    {id:2, nombre:'pantalon', precio: 200, cantidad: 1},
    {id:3, nombre:'zapatos', precio: 300, cantidad: 3},
    {id:4, nombre:'gorra', precio: 50, cantidad: 4},
    {id:5, nombre:'remera', precio: 80, cantidad: 5},
    {id:6, nombre:'buzo', precio: 150, cantidad: 6},
    {id:7, nombre:'medias', precio: 20, cantidad: 7},
    {id:8, nombre:'pantaloneta', precio: 40, cantidad: 8},
    {id:9, nombre:'campera', precio: 250, cantidad: 9},
    {id:10, nombre:'bufanda', precio: 60, cantidad: 10},
]

const productosConDescuento = productos.map(producto =>{
    if (producto.precio < 100) return producto
    return {
        ...producto,
        precio: producto.precio * 0.9
    }
})

const productosRebajados = productosConDescuento.filter(prod => prod.precio < 100 ).filter(prod=>prod.cantidad < 5)
const idProductos = productos.map(({nombre})=>nombre)

//funcion que calcula el total de la compra
const totalCompra = productos.filter(producto =>producto.id===1).reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
console.log(totalCompra)





// console.log(productosConDescuento)
console.log(idProductos)





