document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let ascii = nombre.charCodeAt(0);

    if (nombre.length == 0) {
        alert('No has escrito nada en el nombre');
    } else {
        if (nombre.length<3) {
            alert('El nombre debe ser de al menos 3 caracteres');
        } else {
            if (ascii> 64 && ascii < 91) {
                alert('El nombre es valido');
            } else {
                alert('La primera letra del nombre debe ir en mayuscula');
            }
        }
    }

    let cedula = document.getElementById('cedula').value;
    if (cedula.length == 0) {
        alert('No has escrito nada en la cedula');
    } else {
        (cedula > 1000000000) ? alert('La cédula es valida') : alert('La cédula no es valida');
    }

    let correo = document.getElementById('correo').value;

    if (correo.length == 0) {
        alert('No has escrito nada en el correo');
    } else {
        (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo)) ?
        alert('correo valido') : alert('correo no valido');
    }

    let telefono = document.getElementById('telefono').value;
    let numero = telefono[0];

    if (telefono.length == 0) {
        alert('No has escrito nada en el telefono');
    } else {
        if (telefono.length<10) {
            alert('El telefono tiene que ser de 10 numeros');
        } else {
            if (numero == 3) {
                alert('El telefono es valido');
            } else {
                alert('El primer número del telefono tiene que empezar con 3');
            }
        }
    }
    
    this.submit();
}