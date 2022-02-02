document.getElementById("button").addEventListener("click", function() {
    math();
    
})

function math () {

    let number1=parseInt(document.getElementById("feld1").value);
    let number2=parseInt(document.getElementById("feld2").value);

    let result = number1 + number2;
    console.log(result);

    document.getElementById("1").innerHTML=result;

    if(result<=5){
        document.getElementById("1").innerHTML="Hallo";

    }
    else{
        document.getElementById("1").innerHTML="zewas";
    }
};




