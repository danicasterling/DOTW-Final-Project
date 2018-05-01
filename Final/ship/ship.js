
//JQuery UI
// M A K E      P I E C E S
  $(function() {

    $( ".draggable" ).draggable({
    });
  });





//      L A U N C H     S H I P 
 function launch(){
     // SHOW THE FIRE 
     document.getElementById("hide").id = "show";
          
     
     // HIDE THE SHIP PARTS
    document.getElementById("body").id = "hide";
    document.getElementById("nose").id = "hide";
    document.getElementById("window").id = "hide";
    document.getElementById("rightwing").id = "hide";
    document.getElementById("leftwing").id = "hide";
    document.getElementById("backwing").id = "hide";
    document.getElementById("rightfin").id = "hide";
    document.getElementById("leftfin").id = "hide";
//     
     
     
     document.body.innerHTML += ("<audio autoplay><source src='rocketEdit.mp3' type='audio/mpeg' id='source'> audio is not supported </source></audio>");
     
     //fire goes away
     setTimeout(stop, 10000);
 }





//      S T O P       L A U N C H 

function stop(){
    
    document.getElementById("show").id = "hide";
    
}

//   C H A N G E    B O D Y     C O L O R

function color(){
    
    var bodycolor = document.getElementById("color2").value;
    var wingcolor = document.getElementById("color1").value;
    var nosecolor = document.getElementById("color3").value;
    var fincolor = document.getElementById("color4").value;
    
    //console.log(bodycolor, wingcolor);
    
    document.getElementById("body").style.background = bodycolor;
    document.getElementById("nose").style.background = nosecolor;
    
    document.getElementById("rightwing").style.borderBottomColor = wingcolor;
    document.getElementById("leftwing").style.borderBottomColor = wingcolor;
    document.getElementById("backwing").style.borderBottomColor= wingcolor;
    
    document.getElementById("rightfin").style.borderBottomColor = fincolor;
    document.getElementById("leftfin").style.borderBottomColor= fincolor;
    
    
    
    
    
}