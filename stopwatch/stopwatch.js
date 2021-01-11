
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const h2 = document.querySelector("h2");


let secondCount = 0;
let stopWatch;
let disTime;
let h1 = document.createElement("h1");
body.appendChild(h1);
body.insertBefore(wrapper, h1.nextSibling);
body.insertBefore(h2, wrapper.nextSibling)


function displayTime() {


    let hours = Math.floor(secondCount / 3600);
    let minutes = Math.floor(secondCount / 60);
    let seconds = Math.floor(secondCount);

    let displayHour = (hours < 10 ? '0' + hours : hours);
    let displayMinutes = (minutes < 10 ? '0' + minutes : minutes);
    let displaySeconds = (seconds < 10 ? '0' + seconds : seconds);

    h1.textContent = `${displayHour}:${displayMinutes}:${displaySeconds}`;



    secondCount++;

}

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener('click', () => {
    stopWatch = setInterval(displayTime, 1000);
    startBtn.disabled = true;

});

stopBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    secondCount = 0;
    displayTime();
});

displayTime();

