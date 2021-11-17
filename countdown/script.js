document.getElementById("start").addEventListener("click", function () {
    start();
});

    


function start() {
    Timer = document.getElementById("counting").value;

    startCountdown();
}

function startCountdown() {
    let interval = setInterval(function() {
        console.log("countdown" + Timer);
        Timer--;
        if(Timer==0){ 
            
            clearInterval(interval);
            

        }
            document.getElementById("Timer").innerHTML=Timer;
    },1000);
}







