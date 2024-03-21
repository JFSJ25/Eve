document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector('.img1').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });
    document.querySelector('.img2').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });
    document.querySelector('.img3').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });
    document.querySelector('.img4').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });

    document.querySelector('.zona').addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    document.querySelector('.zona').addEventListener('drop', (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);
    });
});