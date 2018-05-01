
// P A R A L L A X   S C R O L L I N G
// FORKED: https://github.com/pipbeard/mouse-parallax
$(document).ready(function() {
    
    $('#asteroid2').mouseParallax({ moveFactor: 3 });
     $('#bigStar').mouseParallax({ moveFactor: 5 });
     $('#pStars').mouseParallax({ moveFactor: 9 });
   
    $('#asteroid').mouseParallax({ moveFactor: 10 });
    $('#meteor').mouseParallax({ moveFactor: 15 });
    
    $('#asteroid2').mouseParallax({ moveFactor: 20 });
    $('#alien').mouseParallax({ moveFactor: 45 });
     
$('body').height(800);

});

