document.addEventListener("DOMContentLoaded", (e)=>{

document.querySelector(".a").addEventListener("click", () => {
    document.getElementById("a").style.display='block';
    document.getElementById("b").style.display='none';
    document.getElementById("c").style.display='none';
    document.getElementById("d").style.display='none';
    document.getElementById("e").style.display='none';
})

document.querySelector(".b").addEventListener("click", () => {
    document.getElementById("b").style.display='block';
    document.getElementById("a").style.display='none';
    document.getElementById("c").style.display='none';
    document.getElementById("d").style.display='none';
    document.getElementById("e").style.display='none';
})

document.querySelector(".c").addEventListener("click", () => {
    document.getElementById("c").style.display='block';
    document.getElementById("b").style.display='none';
    document.getElementById("a").style.display='none';
    document.getElementById("d").style.display='none';
    document.getElementById("e").style.display='none';
})

document.querySelector(".d").addEventListener("click", () => {
    document.getElementById("d").style.display='block';
    document.getElementById("b").style.display='none';
    document.getElementById("c").style.display='none';
    document.getElementById("a").style.display='none';
    document.getElementById("e").style.display='none';
})

document.querySelector(".e").addEventListener("click", () => {
    document.getElementById("e").style.display='block';
    document.getElementById("d").style.display='none';
    document.getElementById("b").style.display='none';
    document.getElementById("c").style.display='none';
    document.getElementById("a").style.display='none';
})})

setTimeout(()=>{
    alert('Da click en el botón "¿?"');
}, 10000);

setTimeout(()=>{
    alert("¿Sigues aquí?")
}, 40000);