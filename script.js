/* ============================================================
   MENÚ MÓVIL
   ------------------------------------------------------------
   toggleMenu()
   - Abre y cierra el menú de navegación en modo móvil.
   - Agrega o remueve la clase .open a .nav-links.

=============================================================== */
/* ============================================================
   MENÚ MÓVIL (Actualizado para auto-cierre)
=============================================================== */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

// Nueva lógica: Cerrar el menú automáticamente al hacer clic en una opción
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        // Solo lo cerramos si el menú está abierto (clase 'open' presente)
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});

/* ============================================================
   FORMULARIO DE CONTACTO (FormSubmit)
   ------------------------------------------------------------
   - Evita el comportamiento por defecto (event.preventDefault).
   - Envía los datos mediante fetch() hacia la URL del formulario.
   - Muestra el mensaje de éxito cuando la respuesta es correcta.
   - Limpia el formulario después del envío.
   - Si ocurre un error, se muestra una alerta.
=============================================================== */
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = event.target;

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            // Mostrar mensaje de éxito
            document.getElementById("mensaje-exito").style.display = "block";

            // Reiniciar formulario
            form.reset();
        } else {
            alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }

    } catch (error) {
        console.error("Error en el envío:", error);
        alert("No se pudo enviar el mensaje. Revisa tu conexión.");
    }
});
