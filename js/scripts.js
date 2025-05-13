document.addEventListener('DOMContentLoaded', function() {
    const duvidaBoxes = document.querySelectorAll('.duvida-box');

    duvidaBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const paragraph = this.querySelector('p');
            const img = this.querySelector('img');
            if (paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
                img.classList.remove('rotated');
            } else {
                paragraph.style.display = 'block';
                img.classList.add('rotated');
            }
        });
    });
});