const counter = document.getElementById('counter');
// // let counterSeconds = 0;
// function countUp() {
//     setInterval(function() {
//         let CounterSeconds = 0;
//         counter.textContent = counterSeconds++}, 1000)}
// // function countUp = setInterval(function() {
// //     counterSeconds++;
// //     counter.textContent = counterSeconds}, 1000);

// counter.addEventListener("DOMContentLoaded", countUp);

// // document.getelement

function countUp() {
    let timer = 0;
    setInterval(() => {
        timer +=1;
        counter.textContent = timer}, 1000);
}

document.addEventListener("DOMContentLoaded", countUp);
