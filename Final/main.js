

function music(){
    
    var audio = document.getElementById('audio');
    var source = document.getElementById('source');
    var planet = event.srcElement.id;
//    console.log(planet);
    
    
    if(planet == "mercury"){
        var file = "Example1.mp3";
        
    }else if(planet == "venus"){
        var file = "Example2.mp3";
 
    } else if(planet == "earth"){
        var file =  "earth.mp3";
    
    } else if(planet == "mars"){
        var file =  "mars.mp3";
        
     } else if(planet == "jupiter"){
        var file =  "jupiter.mp3";
         
     } else if(planet == "saturn" || planet == "satRing" || planet == "satRing2" || planet == "satRing3" ){
        
           var file =  "saturn.mp3";
//         console.log(audio.src);
    
    } else if(planet == "uranus" || planet == "uranusRing"){
           var file =  "jupiter.mp3";
        
    } else if(planet == "neptune"){
          var file =  "neptune.mp3";
    
    } else if(planet == "pluto"){
          var file =  "pluto.mp3"; 
        
    } else {
           var file =  "";
    
    } // close if statement
    
    source.src = file;
//    console.log(source.src);
    audio.load();
    
}