const passwordBox = document.getElementById('password');
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbols = "@#$%^&*![]{}/-+=><_~";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword()
{
    let password = "";
    // password += upperCase[Math.floor(Math.random()*upperCase.length)];
    // password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password += number[Math.floor(Math.random()*number.length)];
    // password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length)
    {
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword()
{
    passwordBox.select();
    document.execCommand('copy');
}

const copybtn = document.querySelector('.display img')
.addEventListener('click',function(){
    copyPassword();
})



const button = document.querySelector('button')
.addEventListener('click',function(){
    createPassword();
})