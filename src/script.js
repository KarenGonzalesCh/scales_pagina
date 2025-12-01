function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = event.target;

    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        document.getElementById("mensaje-exito").style.display = "block";
        form.reset();
    } else {
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
});
