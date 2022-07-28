class Compra{
    static contadorCompras= 0;
constructor(codigo, producto, precio, cantidad){
    this._idCompra= ++Compra.contadorCompras;
    this._codigo= codigo;
    this._producto= producto;
    this._precio= precio;
    this._cantidad= cantidad;
}

get idCompra(){
    return this._idCompra;
}
get codigo(){
    return this._codigo;
}

set codigo(codigo){
    this._codigo= codigo;
}

get producto(){
    return this._producto;
}

set producto(producto){
    this._producto= producto;
}

get precio(){
    return this._precio;
}

set precio(precio){
    this._precio= precio;
}

get cantidad(){
    return this._cantidad;
}

set cantidad(cantidad){
    this._cantidad= cantidad;
    }

}

const compras=[];

function mostrarCompras(){
    let textoCompra= ""; 
    for (let compra of compras){
        textoCompra += ` ${compra._idCompra} CODIGO: ${compra.codigo} PRODUCTO: ${compra.producto} PRECIO: $${compra.precio} CANTIDAD:${compra.cantidad} SUBTOTAL:${subtotal} <br>`
        
    }
    document.getElementById("listaCompra").innerHTML= textoCompra;
}

function agregarCompras(){
    let codigo = document.getElementById("codigo").value;
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    let compra = new Compra(codigo,producto,precio,cantidad);
    compras.push(compra); 

    mostrarCompras();
    
    let result = subtotal(producto*precio);
    console.log(result);
}

class Total extends Compra{
    constructor(codigo, producto, precio, cantidad, subtotal){
    super(codigo, producto, precio, cantidad);
    this._subtotal=subtotal;
    }
}

function subTotal(){
    let subTotal= new Total(codigo, producto, precio, cantidad, subtotal);
    subtotal= producto*cantidad;
    let subtotal = document.getElementById("subtotal").innerHTML = subtotal;  
    console.log(subTotal);
}




