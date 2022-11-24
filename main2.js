function drawTable(){                                       //Имя функции
    var element = document.createElement ("table"); 
    element.setAttribute("border", "1");                    //задаем атрибуты
    element.setAttribute("id", "tab");
    element.addEventListener("click", testr, false);
    for (var i=0; i<2; i++){
        var row=element.insertRow(i);
        for(var j=0; j<5; j++){
            var cell = row.insertCell(j);
            cell.width = "100";
            cell.height = "100";
            cell ["id"]="".concat(i,j);
            cell.appendChild(document.createTextNode((i+1)+(j+1)));
        }
    }
}