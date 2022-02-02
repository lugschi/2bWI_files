document.getElementById("button").addEventListener("click", function (){
    math();

});

function math(){
    let height = document.getElementById("size").value;
    let weight = document.getElementById("gewicht").value;

    let result = ((height * 1.43)/weight)-3.4;

    ausgabe(result);
}

function ausgabe(result){
    if(result >0){
        let output = "";
        for(index=0; index < result; index++){
            output += index + ", ";
            document.getElementById("right").innerHTML="Positiv " + output;
        }
        
    }

    else if(result<0){
        let output = "";
        for(index=0; index > result; index--){
            output += index + ", ";
            document.getElementById("right").innerHTML="Negativ " + output;
        }
        
    }

    else {
        document.getElementById("right").innerHTML=0;
    }
}



