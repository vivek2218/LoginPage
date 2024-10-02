
function CheckEmail(){
   
    var p=document.getElementById("username").value
    var un = document.getElementById("user")
    const emailRegex = /\S+@\S+\.\S+/.test(p);
if (emailRegex) {
    un.innerHTML = " email is correct"
    un.style.color = "green"
    return true
    
} else {
    un.innerHTML = " email is incorrect"
    un.style.color = "red"
    return false
}
}

function CheckPass(){
    var p=document.getElementById("password").value
    var un = document.getElementById("Pass")
    const passRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(p);
if (passRegex) {
    un.innerHTML = " Pass is correct"
    un.style.color = "green" 
    return true
    
} else {
    un.innerHTML = " password  is incorrect"
    un.style.color = "red"
    return false
}

}
function CheckMob(){
    var p=document.getElementById("mobile").value
    var un = document.getElementById("mob")
    const mobRegex =/^\d{10}$/.test(p);
    if (mobRegex) {
    un.innerHTML = " Mob is correct"
    un.style.color = "green"
    return true
    } else {
    un.innerHTML = " Mob  is incorrect"
    un.style.color = "red"
    return false
    }
}
function login() {
    var em = document.getElementById("ln");
    if (CheckEmail() &&  CheckPass() && CheckMob()) {
        window.open("LoginButton.html")
        //em.innerHTML = "Welcome to my website";
        //em.style.color = "green";
    } else {
        em.innerHTML = "User, password, and mobile are invalid";
        em.style.color = "red";
    }
}