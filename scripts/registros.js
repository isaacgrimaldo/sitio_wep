function check(){  
    
   document.registros.addEventListener("invalid", arreglar,true);
    document.getElementById("envio").addEventListener("click",envio,false);
    document.registros.addEventListener("input",checkA, false);
   
};
function password(){
    
    var verC =document.getElementById("ver")
    verC.addEventListener("click",verContraseña,false);
};


function verContraseña(){
    var contraseña = document.getElementById("key"); 
    var verC =document.getElementById("ver");
    
     if(key.type == "password"){
         key.type = "text";
         verC.innerHTML= "Ocultar";

     }else if(key.type == "text"){
         key.type = "password";
        verC.innerHTML="Ver Contraseña";
           
        }
     
};

 function arreglar (e){
     var ero= e.target;
         ero.style.background = "#F25858" ;  
         ero.autofocus;
}; 

function checkA (e){ 
      
      var ero = e.target; 

    if(ero.validity.valid == true){
       ero.style.background = "white";
    
    }else{
      ero.style.background = "#F25858";
    }
 
};



function envio(){
    var finalCheck= document.registros.checkValidity();
    if(finalCheck === true){
        document.registros.submit();
    }
};



window.addEventListener("load", check,false);
window.addEventListener("load",password,false);