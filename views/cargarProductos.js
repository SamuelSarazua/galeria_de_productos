import { crearProducto } from "../modules/producto.js";
import { productosAPI } from "../services/api.js";

async function mostrarProducto() {
    try{
        let datos = await productosAPI();
        console.log(datos);
        todosLosProductos(datos);
    }catch(error){console.error("error", error)}
}

function todosLosProductos(datos){
    let DOM = document.querySelector("#root");

    datos.forEach(element => {
        console.log(element);
        DOM.appendChild(crearProducto(element));
    });
}

export { mostrarProducto }