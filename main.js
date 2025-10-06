let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let defDays = localStorage.getItem('days') ? parseInt(localStorage.getItem('days')) : 29;
let defHours = localStorage.getItem('hours') ? parseInt(localStorage.getItem('hours')) : 3;
let defMinutes = localStorage.getItem('minutes') ? parseInt(localStorage.getItem('minutes')) : 7;
let defSeconds = localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 12;

const timerFunction = setInterval(() => {
    defSeconds--;

    if (defSeconds < 0) {
        defSeconds = 59;
        defMinutes--;
    }

    if (defMinutes < 0) {
        defMinutes = 59;
        defHours--;
    }

    if (defHours < 0) {
        defHours = 23;
        defDays--;
    }

    if (defDays < 0) {
        clearInterval(timerFunction);
        return;
    }

    localStorage.setItem('days', defDays);
    localStorage.setItem('hours', defHours);
    localStorage.setItem('minutes', defMinutes);
    localStorage.setItem('seconds', defSeconds);

    days.innerHTML = defDays < 10 ? '0' + defDays : defDays;
    hours.innerHTML = defHours < 10 ? '0' + defHours : defHours;
    minutes.innerHTML = defMinutes < 10 ? '0' + defMinutes : defMinutes;
    seconds.innerHTML = defSeconds < 10 ? '0' + defSeconds : defSeconds;

}, 1000);
