class listadoDeProductos{
    constructor(descripcion, precio, cantidad){   
        this.nombreProducto = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let cantidadDeProductos = Number(prompt("ingrese la cantidad de productos"))
if
    (isNaN !==Number(cantidadDeProductos)){
    
}

const arrayProductos = [];
console.log(cantidadDeProductos)
for (let i = 0; i<cantidadDeProductos; i++) {
    
    arrayProductos[i] = new listadoDeProductos (prompt("ingrese el nombre del producto: "), 
    prompt("ingrese el precio del producto: "), prompt("ingrese stock del producto: "))
}
console.log (arrayProductos);

alert ("los productos seleccionados son: " + arrayProductos );