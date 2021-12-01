document.getElementById("start").addEventListener("click", function () {
    start();
});

    


function start() {
    counter = document.getElementById("counting").value;

    startCountdown();
}

function startCountdown() {
    let interval = setInterval(function() {
        console.log("countdown" + counter);
        counter--;
        if(counter==0){ 
            
            clearInterval(interval);
            

        }
            document.getElementById("counter").innerHTML=counter;
    },1000);
}


document.getElementById("starten").addEventListener("click", function () {
    starten();
});

    


function starten() {
    

    starttimer();
}





function starttimer() {
    let timer = 0;
    let interval = setInterval(function() {
    console.log(timer);

    document.getElementById("timer").innerHTML=timer

    timer++;

       if(timer<10){
        
        document.getElementById("timer").innerHTML=timer;

       }
        
    },1000);
}




