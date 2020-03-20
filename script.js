function validarCampos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    if (nombre == ' ' || apellido == ' ' || fecha == ' '|| tel == ' ' || email == ' ') {
        alert('Algunos de los campos requeridos estan vacios.');
    } else if (!/^([0-9])*$/.test(tel)) {
        alert("El valor " + tel + " no es un número de telefono valido.");
    } else verificarDatos();

}
