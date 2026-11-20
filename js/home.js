// ==========================================================================
// LOGICA DE LA PAGINA PRINCIPAL (HOME)
// ==========================================================================

// 1. Saludo con el nombre de usuario guardado en la sesion al hacer login
const usuarioGuardado = sessionStorage.getItem("usuario");

if (usuarioGuardado) {
    document.getElementById("saludo").textContent = "Bienvenido, " + usuarioGuardado;
}

// 2. Simulacion de datos obtenidos de una base de datos
// (En modulos futuros estos datos vendran de un backend/base de datos)
const datosUsuario = {
    nombre: "Fermin Alonso Benitez Guardado",
    correo: "alonso.benitez@correo.com",
    telefono: "(667) 555-0123",
    ciudad: "Culiacan, Sinaloa"
};

// 3. Colocar los datos del usuario en la interfaz (UI)
document.getElementById("perfil-nombre").textContent = datosUsuario.nombre;
document.getElementById("perfil-correo").textContent = datosUsuario.correo;
document.getElementById("perfil-telefono").textContent = datosUsuario.telefono;
document.getElementById("perfil-ciudad").textContent = datosUsuario.ciudad;
