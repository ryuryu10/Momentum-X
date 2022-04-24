const clock = document.querySelector(".clock");
const days = document.querySelector(".days");
const times = document.querySelector(".times");
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

function show() {
    const date = new Date();
    const Year = String(date.getFullYear());
    const Month = String(date.getMonth());
    const Day = String(date.getDate()).padStart(2, "0");
    const Hour = String(date.getHours()).padStart(2, "0");
    const Minute = String(date.getMinutes()).padStart(2, "0");
    const Seoncd = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${Month}월 ${Day}일 ${Hour} : ${Minute} : ${Seoncd}`
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    days.innerText = `${Year}년 ${Month}월 ${Day}일`
    times.innerText = `${Hour} : ${Minute} : ${Seoncd}`
}
setInterval(show, 1000);
