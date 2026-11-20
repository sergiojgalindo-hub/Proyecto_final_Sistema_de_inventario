// Lista de productos (intenta obtener los datos guardados en el localStorage)
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Variable para saber si estamos agregando (-1) o editando un producto (0, 1, 2...)
let indiceEdicion = -1;

// Referencias a los elementos del DOM
const seccionFormulario = document.getElementById("seccion-formulario");
const formularioProducto = document.getElementById("formulario-producto");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const mensajeVacio = document.getElementById("mensaje-vacio");
const tituloFormulario = document.getElementById("titulo-formulario");
const btnGuardar = document.getElementById("btn-guardar");
const btnMostrarFormulario = document.getElementById("btn-mostrar-formulario");
const btnCancelar = document.getElementById("btn-cancelar");

// Mostrar el formulario de registro o edicion
function mostrarFormulario() {
    formularioProducto.reset();
    indiceEdicion = -1;
    tituloFormulario.textContent = "Registrar Producto";
    btnGuardar.textContent = "Guardar";
    // hidden = false muestra el elemento
    seccionFormulario.hidden = false;
}

// Cancelar y ocultar el formulario
function cancelarFormulario() {
    formularioProducto.reset();
    indiceEdicion = -1;
    // hidden = true oculta el elemento
    seccionFormulario.hidden = true;
}

// Guardar producto (agregar o actualizar)
formularioProducto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nuevoProducto = {
        nombre: document.getElementById("nombre").value,
        marca: document.getElementById("marca").value,
        precioUnitario: parseFloat(document.getElementById("precio-unitario").value),
        cantidad: parseInt(document.getElementById("cantidad").value),
        precioVenta: parseFloat(document.getElementById("precio-venta").value),
        fechaAlta: document.getElementById("fecha-alta").value
    };

    if (indiceEdicion === -1) {
        // agregar
        productos.push(nuevoProducto);
    } else {
        // editar
        productos[indiceEdicion] = nuevoProducto;
    }

    // Guardamos en el almacenamiento local y redibujamos la tabla
    localStorage.setItem("productos", JSON.stringify(productos));
    dibujarTabla();
    cancelarFormulario();
});

// Dibujar la tabla con los datos actuales
function dibujarTabla() {
    cuerpoTabla.innerHTML = "";

    // Si la lista esta vacia, mostrar el mensaje 
    if (productos.length === 0) {
        mensajeVacio.hidden = false;
        return;
    } else {
        mensajeVacio.hidden = true;
    }

    // Agregar los productos a la tabla
    productos.forEach(function (producto, indice) {
        const ganancia = producto.precioVenta - producto.precioUnitario;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.marca}</td>
            <td>$${producto.precioUnitario.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precioVenta.toFixed(2)}</td>
            <td>${producto.fechaAlta}</td>
            <td>$${ganancia.toFixed(2)}</td>
            <td>
                <button type="button" data-accion="editar" data-indice="${indice}">Editar</button>
                <button type="button" data-accion="eliminar" data-indice="${indice}">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

// Eliminar producto
function eliminarProducto(indice) {
    productos.splice(indice, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    dibujarTabla();
}

// Cargar datos en el formulario para editar
function editarProducto(indice) {
    indiceEdicion = indice;
    const producto = productos[indice];

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("marca").value = producto.marca;
    document.getElementById("precio-unitario").value = producto.precioUnitario;
    document.getElementById("cantidad").value = producto.cantidad;
    document.getElementById("precio-venta").value = producto.precioVenta;
    document.getElementById("fecha-alta").value = producto.fechaAlta;

    tituloFormulario.textContent = "Editar Producto";
    btnGuardar.textContent = "Actualizar";
    seccionFormulario.hidden = false;
}

// Eventos para los botones
btnMostrarFormulario.addEventListener("click", mostrarFormulario);
btnCancelar.addEventListener("click", cancelarFormulario);

// Delegacion de eventos para los botones de la tabla (Editar y Eliminar)
cuerpoTabla.addEventListener("click", function (evento) {
    const boton = evento.target;
    const accion = boton.dataset.accion;
    const indice = parseInt(boton.dataset.indice, 10);

    if (accion === "eliminar") {
        eliminarProducto(indice);
    } else if (accion === "editar") {
        editarProducto(indice);
    }
});

// Dibujamos la tabla al cargar la pagina
dibujarTabla();
