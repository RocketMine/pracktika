
    function init(){
        sec = 0;
        setInterval(tick, 1000);
}
function tick(){
        sec++;
        document.getElementById("timer").
            childNodes[0].nodeValue = sec;
}
window.onload = function str(){
    for(var i=0;i<4; i++){
        for (var y=0;y<4;y++){
             document.getElementById('game').innerHTML+="<div class='block'></div>";
}
}	
}