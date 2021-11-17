



var people = [{
    "firstname" : "Luca " ,
    "lastname" : "Grabherr" ,
    "height" : 160 ,
    "img" : "Jonas der Insasse.PNG"
}, {
    "firstname" : "Ronny " ,
    "lastname" : "Kostmann" ,
    "height" : 180 ,
    "img" : "Jonas der Insasse.PNG"

}];


var html = "";
for (i=0;i<people.length;i++){
    html += "<div class= 'box1'>" + people[i].firstname + people[i].lastname + "</div>";
    html += "<div class= 'box2'" + people[i].img;
    html += "<div class= 'box3'" + people[i].height + "</div>"
    html += "</div>";

}

document.getElementById("container").innerHTML = html
