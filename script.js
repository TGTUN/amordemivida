document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const heartContainer = document.getElementById('heart-container');

    heartContainer.addEventListener('click', function() {
        message.style.display = 'block';
        heartContainer.style.display = 'none'; // Oculta el corazón después de hacer clic
    });
});
