
/*
var video, reproducir, barra, progreso,max,tiem;
 max = 740.28;


function play(){
    video = document.querySelector("#v1");
    reproducir = document.querySelector("#playB");
    barra = document.querySelector("#tiempo");
    progreso = document.querySelector("#progreso");
    tiem =  document.querySelector("#numTime");

    /*proramacion de el boton play*/
   /* reproducir.addEventListener("click", videoplay,false);
    reproducir.addEventListener("mouseover",function(){
              reproducir.style.transform ="scale(1.05,1.05)";
  },false);
   reproducir.addEventListener("mouseout",function(){
             reproducir.style.transform="scale(1,1)";
   },false);
   
   timepo.addEventListener("click",adelanta(MouseEvent("click")),false);
};
function barraT(){
    if(video.ended === false){
         var total = parseFloat((video.currentTime * max)/video.duration);
            progreso.style.width = total+"px";
     }
};

function timepo(){
     var tempT = video.duration/60;
         tempT = tempT.toFixed(2); 
     var temC =  video.currentTime/60;
         
         
      
   setInterval(function(){ 
        tiem.innerHTML = (temC +"/" + tempT);
    
},1000);
};

function videoplay(){
    if((video.paused === false) && (video.ended === false) ){
        video.pause();
        reproducir.innerHTML="play";
        reproducir.style.backgroundColor = "red";
        progreso.style.backgroundColor="grey";
    }else{
        video.play();
        reproducir.innerHTML="pause";
        reproducir.style.backgroundColor= "black";
       bluque =  setInterval(barraT,1000);   
       progreso.style.backgroundColor ="black" ;
        
       
    }
        
};

function adelanta(posicion){
    if(   video.ended ===  false  ) {
                    
        var ratonx = posicion.pageX - barra.offsetLeft;       
       
        var newtimepo = (ratonx * video.duration)/max;

        progreso.style.width = newtimepo + "px";
        tiem.innerHTML = "hola";
         }
     
   
};


window.addEventListener("load",play);
*/
