document.addEventListener('DOMContentLoaded', function() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        cell.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    });
});