const loginUser = document.querySelector("#login-user");
const signUp = document.querySelector("#sign-up");
const loginButton = document.querySelector("#logon-btn");
const signupButton = document.querySelector("#signup-btn");
const animationButton = document.querySelector("#login-btn");
var username = "";
var password = "";

loginButton.addEventListener("click", function () {
    loginUser.style.left = "50px";
    signUp.style.left = "450px";
    animationButton.style.left = "0px";
});

signupButton.addEventListener("click", function () {
    loginUser.style.left = "-450px";
    signUp.style.left = "50px";
    animationButton.style.left = "110px";
});

function login() {
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    console.log(username);
    var navbarLogin =  document.querySelector("#navbar-login");
    navbarLogin.innerHTML = "Welcome " + username;
    navbarLogin.href = "";
}
