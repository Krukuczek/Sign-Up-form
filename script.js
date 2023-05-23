const userName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorContainer= document.getElementById("errorMessage");

userName.addEventListener('input', function(e){
    let pattern = /^[A-Za-z]+$/;
    let inputValue= e.target.value;
    let isValid = pattern.test(inputValue);
    if (isValid){
        userName.classList.remove("invalid");
        userName.classList.add("valid");
        errorContainer.innerText="";
    }else{
        userName.classList.add("invalid");
        userName.classList.remove("valid");
        errorContainer.innerText="You can only have letters in your First Name";
    } 
});
userLastName.addEventListener('input', function(e){
        let pattern = /^[A-Za-z]+$/;
        let inputValue= e.target.value;
        let isValid = pattern.test(inputValue);
        if (isValid){
            userLastName.classList.remove("invalid");
            userLastName.classList.add("valid");
        }else{
            userLastName.classList.add("invalid");
            userLastName.classList.remove("valid");
            errorContainer.innerText="You can only have letters in your Last Name";
        } 
});
email.addEventListener('input', function(e){
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = e.target.value;
    let isValid = pattern.test(inputValue);
    if (isValid) {
        email.classList.remove("invalid");
        email.classList.add("valid");
        errorContainer.innerText="";
    } else {
        email.classList.add("invalid");
        email.classList.remove("valid");
        errorContainer.innerText="Your email should looks like: email@email.com"
    }
});
phone.addEventListener('input', function(e){
    let pattern = /^\d{9}$/;
    let inputValue = e.target.value;
    let isValid = pattern.test(inputValue);
    if (isValid) {
        phone.classList.remove("invalid");
        phone.classList.add("valid");
        errorContainer.innerText="";
    } else {
        phone.classList.add("invalid");
        phone.classList.remove("valid");
        errorContainer.innerText="Your phone number should have 9 digits"
    }
});
password.addEventListener('input', function(e){
        let pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/;
        let inputValue= e.target.value;
        let isValid = pattern.test(inputValue);
        if (isValid){
            password.classList.remove("invalid");
            password.classList.add("valid");
            errorContainer.innerText="";
        }else{
            password.classList.add("invalid");
            password.classList.remove("valid");
            errorContainer.innerText="Your password should have  At least 6 characters, ONE: letter,digit,special character"
        }
        return passwordValue=inputValue;
});
confirmPassword.addEventListener('input', function (e) {
    if(typeof passwordValue==='undefined'){return 0;}
    let inputValue = e.target.value;
    if (passwordValue == inputValue) {
        confirmPassword.classList.remove("invalid");
        confirmPassword.classList.add("valid");
        errorContainer.innerText="";
    } else {
        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        errorContainer.innerText="Passwords are different";
    }
});