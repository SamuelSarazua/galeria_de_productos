function crearProducto({ image, title, price, description }) {
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;

    const nombre = document.createElement('h3');
    nombre.textContent = title;

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${price}`;

    const descripcion = document.createElement('p');
    descripcion.textContent = description;

    // Agregar elementos al contenedor
    producto.appendChild(img);
    producto.appendChild(nombre);
    producto.appendChild(precio);
    producto.appendChild(descripcion);

    return producto; // Retornar el elemento creado
}

export { crearProducto };
