function calc(){
    var result
    var a = Number(document.getElementById("numb1").value);
    var b = Number(document.getElementById("numb2").value);
    var act = String(document.getElementById("act").value);
    switch (act){
        case "plus":
            result = a + b
        break;
        case "min":
            result = a - b
        break;
        case "multiply":
            result = a * b
        break;
        case "division":
            result = a / b
        break;
    default:
            result = 'unknow'
    }
    document.getElementById("result").innerHTML = result.toFixed(2);
    return
}

let massiv = []
function gets(){
   massiv.push(document.getElementById("pushInp").value);
   document.getElementById("mass").innerHTML = massiv
   return
}
function sets(){
    var intf = document.getElementById("setNumb").value;
        massiv.splice(intf,intf+1);
    document.getElementById("mass").innerHTML = massiv
    return
}

function proCalc(){
    var numb = eval(document.getElementById("number").value);
    document.getElementById("resultat").innerHTML = numb.toFixed(2);
}