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
    nombre: "Sergio Jesus Galindo Melendrez",
    correo: "sj.galindo21@ino.uas.edu.mx",
    telefono: "(667)7550910",
    ciudad: "Culiacan, Sinaloa"
};

// 3. Colocar los datos del usuario en la interfaz (UI)
document.getElementById("perfil-nombre").textContent = datosUsuario.nombre;
document.getElementById("perfil-correo").textContent = datosUsuario.correo;
document.getElementById("perfil-telefono").textContent = datosUsuario.telefono;
document.getElementById("perfil-ciudad").textContent = datosUsuario.ciudad;
