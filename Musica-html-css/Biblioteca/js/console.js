const image = document.getElementById("boton");
const aside = document.getElementById("contenedordesplegable");
let asideVisible = true;

image.addEventListener('click', () => {
    if (!asideVisible) {
        aside.style.display = 'none';
        
    } else {
        aside.style.display = 'block';
      

    }
    asideVisible = !asideVisible;
});
