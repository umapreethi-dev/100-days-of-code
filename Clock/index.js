const secondHand = document.querySelector(".sec");
const minuteHand = document.querySelector(".min");
const hourHand =  document.querySelector(".hour");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    // minutes
    const minute = now.getMinutes();
    //console.log(minute);
   const minDeg = ((minute / 60) * 360) + 90; 
   //console.log(minDeg);
   minuteHand.style.transform = `rotate(${minDeg}deg)`;

// hours
const hour = now.getHours();
console.log(hour);
const hourDeg = ((hour / 12) * 360) + 90; 
//console.log(hourDeg);
hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);