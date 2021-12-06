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
  // secDeg = sec * 6 + 90;
  minDeg = min * 6 + sec * 0.1 + 90;
  hourDeg = hour * 30 + min * 0.5 + sec * 0.0083 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
function loopit() {
  let currentPlayer = null;
  const player1 = document.createElement("audio");
  const player2 = document.createElement("audio");
  player1.src = "music/0002613.mp3";
  player2.src = player1.src;
  let player = null;
  if (currentPlayer == "a") {
    player = player2;
    currentPlayer = "b";
  }
  else {
    player = player1;
    currentPlayer = "a";
  }
  player.play();
  setTimeout(loopit, 30000);  //length of the audio clip.
  console.log(currentPlayer);
}

setInterval(clock, 100);
clock();
loopit();
