// let day = date.getDate();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
let end = new Date(2022, 4, 29, 20, 40, 53);


function innerHTMLTimer(days, hours, minutes, seconds) {
    document.querySelector(".promocode__timer-days").innerHTML = days
    document.querySelector(".promocode__timer-hours").innerHTML = hours
    document.querySelector(".promocode__timer-minutes").innerHTML = minutes
    document.querySelector(".promocode__timer-seconds").innerHTML = seconds
        // console.log(seconds);
}



function countdownTimer() {
    let date = new Date();
    const days = Math.floor((end - date) / 1000 / 60 / 60 / 24);
    const hours = Math.floor(((end - date) / 1000 / 60 / 60) % 24);
    const minutes = Math.floor(((end - date) / 1000 / 60) % 60);
    const seconds = Math.floor(((end - date) / 1000) % 60);
    innerHTMLTimer(days, hours, minutes, seconds)

}
setInterval(countdownTimer, 1000)