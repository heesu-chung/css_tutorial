let box = document.querySelector('.box');
window.onmousemove = function(e) {
    let x = e.clientX;
    box.style.transform = "perspective(1500px) rotateY(" + x + "deg)";
}