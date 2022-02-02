document.getElementById("button").addEventListener("click", function(){
    year();
});


function year(){
    let year = document.getElementById("field1").value
    let number = document.getElementById("field2").value

    let result = (year + number)*2;

    ausgabe(result);
}

function ausgabe(result){
    if(result=0)
}

