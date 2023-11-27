function obtenerListaUsuarios(){
    var listausuarios=JSON.parse(localStorage.getItem('listausuariosls'));
    if(listausuarios==null){
    listausuarios=
    [
        ['1','pabs','monestel','pablo.monestel@gmail.com','1pablo9','1987-10-12','1'],
        ['2','olman','santamaria','olman.@gmail.com','1olman9','1993-04-17','2']
    ]
}
return listausuarios;
}
function validarcredencial(correo, contrasena){
    var listausuarios=obtenerListaUsuarios();
    var bacceso=false;
    for(var i=0;i<listausuarios.length;i++){
        if(correo==listausuarios[i][3]&&contrasena==listausuarios[i][4]){
            bacceso=true;
            sessionStorage.setItem('usuarioactivo', listausuarios[i][1]+''+listausuarios[i][2]);
            sessionStorage.setItem('rolusuarioactivo', listausuarios[i][6]);
        }
    }
    return bacceso;
}