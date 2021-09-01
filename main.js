let R1time = window.prompt("runner1 time in HH:MM:SS form");
let R2time = window.prompt("runner2 time in HH:MM:SS form");
let R3time = window.prompt("runner3 time in HH:MM:SS form");

let t1 = R1time.split(":");
let secR1 = t1[0] * 3600 + t1[1] * 60 + t1[2] * 1;
console.log(secR1);

let t2 = R2time.split(":");
let secR2 = t2[0] * 3600 + t2[1] * 60 + t2[2] * 1;
console.log(secR2);

let t3 = R3time.split(":");
let secR3 = t3[0] * 3600 + t3[1] * 60 + t3[2] * 1;
console.log(secR3);

onclick = myFunction();

function myFunction() {
    alert("page reloads every 1 min!");
}

if (secR1 < secR2 && secR1 < secR3) {
    console.log("R1 is the fastest " + secR1);
    let w = document.querySelector('#Fastestrunner').innerHTML = "Runner1  !";

} else if (secR2 < secR1 && secR2 < secR3) {
    console.log("R2 fastest");
    let w = document.querySelector('#Fastestrunner').innerHTML = "Runner2  !";

} else if (secR2 == secR1 || secR2 == secR3 || secR1 == secR3) {
    console.log("there is an equality");
    let w = document.querySelector('#Fastestrunner').innerHTML = "there is an equality";

} else {
    console.log("R3 fastest");
    let w = document.querySelector('#Fastestrunner').innerHTML = "Runner3  !";
}


let x = document.querySelector('#runner1time').textContent = secR1;
let y = document.querySelector('#runner2time').textContent = secR2;
let z = document.querySelector('#runner3time').textContent = secR3;

/// page reoad after 1 min////
setInterval('window.location.reload()', 60000);

