const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');
function clock() {
const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const msec = date.getMilliseconds();
    secDeg = sec * 6 + 90 + msec * 0.006;
    minDeg = min * 6 + sec * 0.1 + 90;
    hourDeg = hour * 30 + min * 0.5 + sec * 0.0083 + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(clock, 1000);
// clock();