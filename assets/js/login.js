  
function ValidarFormulario() {
    const correo1=document.getElementById('correo').value
    const Contraseña1=document.getElementById('Contraseña').value
    const mensaje = document.getElementById('message')

    const correctoUsuario = "usuario@gmail.com";
    const correctaContraseña ="1234";

    if(correo1 === correctoUsuario && Contraseña1 === correctaContraseña ){
        document.location.href = "assets/html/main.html";
    }else{
        mensaje.textContent =" El usuario o clave ingresado es incorrecto. Por favor, verifícalo e inténtalo nuevamente."
        mensaje.style.color="red"
        mensaje.style.display="flex"
        mensaje.style.justifyContent="center"
        mensaje.style.padding="15px"
        mensaje.style.background="white"
        mensaje.style.margin="-30px 0 0 0"
        mensaje.style.borderLeft="5px solid red" 
    }

}