    
 function EnviarUsuario(){ 
    var usuario=document.usuariologin.email.value; 
    var password=document.usuariologin.password.value; 

   

    if (usuario=="98051354524") { 
        if (password=="leonardo") {
            window.location="MenuUsuarioJugador.html";
        }
        if (password!="leonardo") {
            alert(' Señor: Jugador, verifique que su Identificación y contraseña sea correcta')
        }
    } 

    if (usuario=="99061618968") { 
        if (password=="iesua") {
            window.location="MenuUsuarioEntrenador.html";
        }
        if (password!="iesua") {
            alert(' Señor: Entrenador, verifique que su Identificación y contraseña sea correcta')
        }
    } 
    if (usuario=="1018492218") { 
        if (password=="adhael") {
            window.location="MenuUsuarioCoordiador.html";
        }
        if (password!="adhael") {
            alert(' Señor: Coordinador, verifique que su Identificación y contraseña sea correcta')
        }
    } 

    if (usuario=="1073239252") { 
        if (password=="william") {
            window.location="MenuUsuarioAcudiente2.html";
        }
        if (password!="william") {
            alert('Señor: Jugador, verifique que su Identificación y contraseña sea correcta')
        }
    } 


       if (usuario=="1092473") { 
        if (password=="adsi") {
            window.location="A.D.S.I.html";
        }
        if (password!="adsi") {
            alert('Instructores ADSI, verifique que su Identificación y contraseña sea correcta')
        }
    } 

    if (usuario!="98051354524" && usuario!="1018492218" && usuario!="99061618968" && usuario!="1073239252 " && usuario!="1092473" && usuario!="1092473") {
        if(password!=""){
            alert('ERROR: Usuario incorrecto')
        }
        if (usuario!="" && password=="") { 
            alert('ERROR: Datos incompletos')
        } 
        if (usuario=="" && password=="") { 
            alert('ERROR: Ingrese los Datos')

        } 
    }
}
function olvido(){
   var olvido = document.usuariologin.email.value;
   if (olvido == "") {
       alert("Digite su Identificación por favor");       
   }
   else{
        alert("La contraseña ha sido enviada a su correo electrónico");       
        window.location="index.html"     
   }
}

function confirmacionPass(){
    var pass = document.getElementById('#password1').value;
    var conf = document.confirmacionPassword.confirmacion1.value;

    if (pass.length<8 || conf.length<8) {
        alert("La contraseña debe tener más de 8 caracteres");
    }
    else if(pass=="" && conf =="") {
        alert("Digite una contraseña por favor");
    }
    else if (pass!=conf) {
        alert("La contraseña y la confirmación no coinciden");
    }
    else if(pass==conf){
        alert("Usuario registrado");
        window.location="index.html"
    }
}

