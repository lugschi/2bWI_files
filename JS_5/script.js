function addNumbers() {


    let num1 = document.getElementById("number1").value;

    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);
    
    console.log(result)
    document.getElementById("Ergebnis").innerHTML = result
}

function subNumbers() {


    let num1 = document.getElementById("number1").value;

    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) - parseFloat(num2);

    console.log(result)
    document.getElementById("Ergebnis").innerHTML = result

}


function divNumbers() {


    let num1 = document.getElementById("number1").value;

    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) / parseFloat(num2);

    console.log(result)
    document.getElementById("Ergebnis").innerHTML = result

}

function multNumbers() {


    let num1 = document.getElementById("number1").value;

    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) * parseFloat(num2);

    console.log(result)
    document.getElementById("Ergebnis").innerHTML = result

}