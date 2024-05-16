/*document.getElementsByClassName('links').addEventListener('click', function(e) {
    console.log(e.target);
    var producto = {
        imagen: document.getElementById('producto-imagen').src,
        nombre: document.getElementById('producto-nombre').textContent,
        precio: document.getElementById('producto-precio').textContent,
        descuento: document.getElementById('producto-descuento').textContent
    };
    localStorage.setItem('producto', JSON.stringify(producto));
});*/

const li = document.getElementsByClassName('links')
 //console.log(li)


for(let i = 0; i<li.length; i++) {
    console.log(li[i])
}