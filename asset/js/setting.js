const Load_User_Name = localStorage.getItem("username");
const username_AREA = document.querySelector(".username");
const logout = document.querySelector(".logout");
const logout2 = document.querySelector(".setting_logout");
const DEL = document.querySelector(".DELUS");
const FM = document.querySelector(".FORM");

const X = document.querySelector("#BBB");
const B = document.querySelector("#XXX");

const SET_MAIN = document.querySelector(".setting_main");
const BG_set_BTN = document.querySelector(".background_setting_AREA");
const US_set_BTN = document.querySelector(".user_setting_AREA");
const IF_set_BTN = document.querySelector(".info_setting_AREA");

const BG_div = document.querySelector(".setting_background");
const US_div = document.querySelector(".setting_users");
const IF_div = document.querySelector(".setting_info");

const BG_back = document.querySelector(".Wallpaper_back");
const US_back = document.querySelector(".user_back");
const IF_back = document.querySelector(".info_back");


X.innerText = `로그인된 사용자 : ${Load_User_Name}`
B.innerText = `Momentum X에서 ${Load_User_Name} 사용자의 데이터를 삭제합니다.`
username_AREA.innerText = Load_User_Name;

function LOGIUT() {
    localStorage.removeItem('username');
    location.reload(true);
}

function DELETE_USER() {
    localStorage.removeItem('username');
    localStorage.removeItem(`${todo_load_User_Name}_todos`);
    location.reload(true);
}

function FORMAT() {
    localStorage.clear();
    location.reload(true);
}
logout.addEventListener("click", LOGIUT);
logout2.addEventListener("click", LOGIUT);
DEL.addEventListener("click", DELETE_USER);
FM.addEventListener("click", FORMAT);

BG_set_BTN.addEventListener("click", function () {
    BG_div.style.display = "";
    SET_MAIN.style.display = "none";
})
US_set_BTN.addEventListener("click", function () {
    US_div.style.display = "";
    SET_MAIN.style.display = "none";
})
IF_set_BTN.addEventListener("click", function () {
    IF_div.style.display = "";
    SET_MAIN.style.display = "none";
})

BG_back.addEventListener("click", function () {
    BG_div.style.display = "none";
    SET_MAIN.style.display = "";
})
US_back.addEventListener("click", function () {
    US_div.style.display = "none";
    SET_MAIN.style.display = "";
})
IF_back.addEventListener("click", function () {
    IF_div.style.display = "none";
    SET_MAIN.style.display = "";
})
