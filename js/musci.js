
window.onload=function(){
    var number=true;
            var stop=document.getElementById("stop");
            var music=document.getElementById("music")
            stop.onclick=function(){
		        if(number===false){
			    number=true;
			    music.pause();
		}else{
			number=false;
			music.play();
		}
	};
}
