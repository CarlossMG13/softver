//buttons

/* Log-in */
document.getElementById('log-in').addEventListener('click', function(){
    window.location.href = 'http://logistic.softver.mx/vista/login/login.html';
})

// contact
document.getElementById('contacto').addEventListener('click', function(){
    window.location.href = 'form.html';
})

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener los valores del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    //Validación básica
    if (!name || !email || !phone || !message){
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    // Número de WhatsApp al que quieres enviar el mensaje
    let numeroWhatsApp = "522291721690"; // Reemplaza con el número de destino
    
    // Mensaje
    let mensaje = `👋 Hola, mi nombre es ${name}. 📧 Mi correo es ${email}. 📱 Mi número es ${phone}. ${message}.`;
    
    // Codificar el mensaje para URL
    let mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear la URL de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Redirigir a la URL de WhatsApp
    window.location.href=url;
});