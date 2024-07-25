const btn = document.getElementById("btn");
const Lb = document.getElementById("Lb");

const min = 1;
const max = 6;

let randomNum;

btn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    Lb.textContent = randomNum;
}