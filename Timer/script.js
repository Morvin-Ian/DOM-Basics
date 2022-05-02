const newYear = '1 Jan 2023';
const days_val = document.getElementById('days_val')
const hours_val = document.getElementById('hours_val')
const mins_val = document.getElementById('mins_val')
const sec_val = document.getElementById('sec_val')


function countdown(){
    const new_year = new Date(newYear);
    const current_date = new Date();

    const rem_seconds = Math.floor(new_year-current_date) / 1000;
    const days = Math.floor(rem_seconds / 3600 / 24)
    const hours = Math.floor(rem_seconds / 3600) % 24;
    const mins = Math.floor(rem_seconds / 60) % 60;
    const seconds = Math.floor(rem_seconds) %60;

    days_val.innerHTML = days;
    hours_val.innerHTML = hours;
    mins_val.innerHTML = mins;
    sec_val.innerHTML = seconds;
}

setInterval(countdown, 1000)
