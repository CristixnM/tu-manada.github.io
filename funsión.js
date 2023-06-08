// Código JavaScript para agregar funcionalidad a los botones (ejemplo)
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.buttons a');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Realizar acciones al hacer clic en los botones
            alert('Has hecho clic en el botón: ' + this.textContent);
        });
    });
});
