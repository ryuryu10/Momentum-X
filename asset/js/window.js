const Icon_Weather = document.querySelector(".icon_weather_area");
const Icon_Clock = document.querySelector(".icon_clock_area");
const Icon_Setting = document.querySelector(".icon_setting_area");
const Icon_Todo = document.querySelector(".icon_todo_area");
const Icon_Message = document.querySelector(".icon_message_area");

const Close_Weather = document.querySelector(".window_buttons_Close_WD");
const Close_Clock = document.querySelector(".window_buttons_Close_CL");
const Close_Setting = document.querySelector(".window_buttons_Close_ST");
const Close_Todo = document.querySelector(".window_buttons_Close_TD");
// const Close_Message = document.querySelector(".aaaaaaaaaaa");

const AREA_Weather = document.querySelector("#big_weather");
const AREA_Clock = document.querySelector("#big_clock");
const AREA_Setting = document.querySelector("#big_setting");
const AREA_Todo = document.querySelector("#big_todo");
// const AREA_Message = document.querySelector("#aaaaaaaa");

function showed(target){
    target.style.display = "";
}

function hided(target) {
    target.style.display = "none";
}

Icon_Weather.addEventListener("click", function() {showed(AREA_Weather)});
Icon_Todo.addEventListener("click", function() {showed(AREA_Todo)});
Icon_Clock.addEventListener("click", function() {showed(AREA_Clock)});
Icon_Setting.addEventListener("click", function() {showed(AREA_Setting)});
// Icon_Message.addEventListener("click", function() {showed(AREA_Message)});

Close_Weather.addEventListener("click", function() {hided(AREA_Weather)});
Close_Todo.addEventListener("click", function() {hided(AREA_Todo)});
Close_Clock.addEventListener("click", function() {hided(AREA_Clock)});
Close_Setting.addEventListener("click", function() {hided(AREA_Setting)});
// Close_Message.addEventListener("click", function() {hided(AREA_Message)});