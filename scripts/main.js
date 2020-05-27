var miImagen = document.querySelector("img");

miImagen.onclick = function(){
    var  miSrc = miImagen.getAttribute("src");
    if(miSrc === "imagenes/naruto_index.jpg"){
        miImagen.setAttribute("src","imagenes/naruto_image2.jpg")
    }else{
        miImagen.setAttribute("src","imagenes/naruto_index.jpg");
    }
};

var mibUT = document.querySelector("button");
var pagTil = document.querySelector(".nameUser");


function userName(){
    var newName = prompt("porfavor ingrese un nombre");
    localStorage.setItem("nombre",newName);
    pagTil.textContent="user: " + newName;
};

if(!localStorage.getItem("nombre")){
     userName();
}else{
     var  saveName = localStorage.getItem("nombre");
     pagTil.textContent="user: "+ saveName;
    }
mibUT.onclick =  function(){
         userName();
}; 