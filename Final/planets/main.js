

function music(){
    
    var audio = document.getElementById('audio');
    var source = document.getElementById('source');
    var planet = event.srcElement.id;
    var ray = document.querySelectorAll(".ray");
//    console.log(planet);
    
    
    if(planet == "mercury"){
        //Freddie Mercury: "I Was Born to Love You" 1985
        var file = "mercury.mp3";
        var color = "#c1c1c1";
        
    }else if(planet == "venus"){
        //Gustav Holt: "Venus"
        var file = "venus.mp3";
        var color = "#e6d2f7";
 
    } else if(planet == "earth"){
        var file =  "earth.mp3";
        var color = "blue";
    
    } else if(planet == "mars"){
        // David Bowie: "Life on Mars?"
        var file =  "mars.mp3";
        var color = "#e54b30";
        
     } else if(planet == "jupiter" || planet == "stripe" ||  planet == "stripe2" || planet == "stripe3"||planet == "spot"){
         // NASA Voyager: Sounds of Jupiter in space
        var file =  "jupiter.mp3";
         var color = "#f2c596";
         
     } else if(planet == "saturn" || planet == "satRing" || planet == "satRing2" || planet == "satRing3" ){
        //Sleeping at Last: "Saturn"
           var file =  "saturn.mp3";
         var color = "ffe9a8";
    
    } else if(planet == "uranus" || planet == "uranusRing"){
        // Gustav Holt: "Uranus"
           var file =  "uranus.mp3";
        var color = "#ceeeff";
        
    } else if(planet == "neptune"){
        // The Machine: "Moons of Neptune"
          var file =  "neptune.mp3";
        var color = "#1120c6";
    
    } else if(planet == "pluto"){
        //Pluto x ye.: "Feel the Fire"
          var file =  "pluto.mp3";
        var color = "#937f44";
        
    } else {
           var file =  "";
        var color = "white";
    
    } // close if statement
    
    
    
    
    // APPLY AUDIO 
    source.src = file;
    audio.load();
    
    // APPLY COLOR CHANGE
    for (var i = 0; i < ray.length; i++){
        ray[i].style.background = color;
    } // close for
    
}


function reset(){
    location.reload();
}