document.getElementById('link-ropa').addEventListener('click', function() {
    var producto = {
        imagen: document.getElementById('producto-imagen').src,
        nombre: document.getElementById('producto-nombre').textContent,
        precio: document.getElementById('producto-precio').textContent,
        descuento: document.getElementById('producto-descuento').textContent
    };
    localStorage.setItem('producto', JSON.stringify(producto));
});