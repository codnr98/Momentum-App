const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 막기
    const username = loginInput.value; //username 받기
    localStorage.setItem(USERNAME_KEY, username); //local storage에 username저장
    paintGreeting(username);
}

function paintGreeting(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME); //form hidden
    greeting.innerText = `Hello ${username}` //h1 tag에 username 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1 tag 나타내기
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if( saveUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(saveUsername);
}

//clock
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//background

const images = [
    "pexels-francesco-ungaro-1525041.jpg",
    "pexels-francesco-ungaro-2835436.jpg",
    "pexels-john-cahil-rom-2170473.jpg",
]

const bgImage = images[Math.floor(Math.random() * images.length)];

 