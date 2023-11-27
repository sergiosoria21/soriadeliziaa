document.querySelector('#btningresar').addEventListener('click',iniciarsesion);
function iniciarsesion(){
    var correo='';
    var contrasena='';
    correo=document.querySelector('#txtcorreo').value;
    contrasena=document.querySelector('#txtcontrasena').value;
    acceso=validarcredencial(correo,contrasena);
    if(acceso==true){
        ingresar();
    }
}
function ingresar(){
    var rol=sessionStorage.getItem('rolusuarioactivo');
    switch(rol){
        case '1':
            window.location.href='admin.html';
        break;
        case '2':
            window.location.href='js/cliente.html';
        break;
        default:
            window.location.href='js/index.html';
        break;
    }
}