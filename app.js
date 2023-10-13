let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')


function stopwatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes ++;
        if(minutes === 60){
            minutes = 0;
            hours ++;
        }
    }


    let h = hours < 10 ? '0' + hours: hours;
    let m = minutes < 10 ? '0' + minutes: minutes;
    let s = seconds < 10 ? '0' + seconds: seconds;
h
    displayTime.innerHTML = h + ':' + m + ':' + s;
 }


startBtn.addEventListener('click', ()=> {
    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
})

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    displayTime.innerHTML = '00:00:00';
})