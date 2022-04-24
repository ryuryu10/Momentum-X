const login_AREA = document.querySelector(".login");
const loginform = document.querySelector("#user_login");
const systems = document.querySelector(".system");
const loginInput = loginform.querySelector("#data_section");
const loginbutton = loginform.querySelector("#login_button");
const logintitle = document.querySelector(".login_title");
const login_adduser = document.querySelector(".login_adduser");

const HIDDEN = "hidden";
const ISFlexed = "flex"

function onButtonClick (e) {
    const username = loginInput.value;
    if (username == "") {
        alert("이름을 입력하시오.");
    }
    logintitle.innerText = username;
    localStorage.setItem("username", username);
}

loginform.addEventListener("submit", onButtonClick);

const Saved_User_Name = localStorage.getItem("username");

if (Saved_User_Name == null || Saved_User_Name.length == 0 ) {
    systems.style.display = "none";
    login_AREA.style.display = "flex";
} else {
    login_AREA.style.display = "none";
    systems.style.display = "flex";
}