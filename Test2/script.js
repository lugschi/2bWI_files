document.getElementById("button").addEventListener("click", function () {
    math();
});

function math() {
    let field = document.getElementById("number").value;

    if (field > 0) {
        let ausgabe = "";
        for (index = 0; index <= field; index++) {
            if (index < field) {
                ausgabe += index + ", ";
            }
            else {
                ausgabe += index;
            }


            document.getElementById("right").innerHTML = ausgabe;
        }
    }
    else if (field < 0) {
        let ausgabe = "";
        for (index = field; index <= 0; index++) {
            if (0 > index) {
                ausgabe += index + " ,";
            } else {
                ausgabe += index;
            }
            document.getElementById("right").innerHTML = ausgabe;
        }
    }
    else {
        document.getElementById("right").innerHTML = 0;
    }



}