let formulario = document.getElementById("loginForm");
let campoDeCorreo = document.getElementById("correo");
let campoContraseña = document.getElementById("password");

campoDeCorreo.onchange = () => {
    correo = campoDeCorreo.value;
}
campoContraseña.onchange = () => {
    password = campoPass.value;
}

formulario.addEventListener("submit",validarForm);

function validarForm(ev){
    if((correo!="taifutbol@torneo.com")&&(password!="futbolsierras")){
        ev.preventDefault();
        alert("El usuario o la contraseña no pertenecen al sistema");
    }
}