document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector('.img1').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.src);
    });
    document.querySelector('.img2').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.src);
    });
    document.querySelector('.img3').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.src);
    });
    document.querySelector('.img4').addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.src);
    });

    document.querySelector('.zona').addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    let zona = document.querySelector('.zona');

    zona.addEventListener('drop', (event) => {
        zona.innerHTML = "";
        event.preventDefault();
        const src = event.dataTransfer.getData('text');
        let imagen = document.createElement("IMG");
        imagen.setAttribute("src", src);
        zona.appendChild(imagen);
    });
});
