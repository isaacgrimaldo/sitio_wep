/*programacion del navegador*/
/*function saludo(){
    alert("hola");
};
function nav(){
    let elementos =  document.querySelectorAll("#temas  li , span");
    for(let i =0 ; i < elementos.length; i++){
       elementos[i].onclick = saludo;
    }
};
window.onload = nav;(como usar los selectores de texto)*/



function nav(){
         var  pags = document.querySelectorAll("#lista li");

            pags[0].addEventListener("click",function(){
                window.open("peleas.html","blanck");
            });

            pags[1].addEventListener("click",function(){
                window.open("personajes.html","blanck");
            });

            pags[2].addEventListener("click",function(){
                window.open("pag3.html","blanck");
            });
            pags[3].addEventListener("click",function(){
                window.open("registros.html","blanck");
            });

           
}; 


window.onload = nav;

/*progracion de la navegacion*/