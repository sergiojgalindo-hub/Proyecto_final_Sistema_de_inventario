// Obtener los elementos del formulario
const formularioLogin = document.getElementById("formulario-login");
const mensajeError = document.getElementById("mensaje-error");

// Evento de envio del formulario
formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();

    // Validar que los campos no esten vacios
    if (usuario === "" || contrasenia === "") {
        mensajeError.textContent = "Por favor completa todos los campos";
        mensajeError.hidden = false;
        return;
    }

    // Ocultar mensaje de error si los datos son validos 
    mensajeError.hidden = true;

    // Guardar el nombre de usuario y redirigir al Home
    sessionStorage.setItem("usuario", usuario);
    window.location.href = "pages/home.html";
});
