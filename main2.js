
function init(){
        sec = 0;
        setInterval(tick, 1000);
}
function tick(){
        sec++;
        document.getElementById("timer").
            childNodes[0].nodeValue = sec;
}
function getRandomInRange(min, max){
    return Math.floor(Math.random()*(max-min+1))
}
console.log(getRandomInRange(1, 30))

function prim(){
    var a = getRandomInRange(0, 10);
    var b = getRandomInRange(10, 20);
    var c = a + b ;   
}
console.log(c)