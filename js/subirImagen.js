const subirImagen = document.getElementById('subirImagen');
const imagenPerfil = document.getElementById('imagenPerfil');

imagenPerfil.src = 'img/avatar.png';
subirImagen.addEventListener('change', cargarImagen);

function cargarImagen(){
    const archivo = subirImagen.files[0];

    if (archivo) {
        const lector = new FileReader();

        lector.onload = function(e){
            imagenPerfil.src = e.target.result;
        };
        lector.readAsDataURL(archivo);
    }
}