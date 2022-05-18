// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

function calculate(){
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const valueDiscount = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
    
    const result =document.getElementById("ResultPrice");
    
    result.innerText = "El precio con descuento son: " + precioConDescuento + "";
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });