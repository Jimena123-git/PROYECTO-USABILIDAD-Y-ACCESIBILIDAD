document.addEventListener('DOMContentLoaded', () => {
    const enviarMensajeBtn = document.getElementById('enviarMensaje');
    enviarMensajeBtn.addEventListener('click', () => {
    alert('¡Mensaje enviado!');

    document.getElementById('formularioContacto').reset();
});
});
