
let btn = document.querySelector('#generate');
const displayBox = document.querySelector('#pass');

let length;
let lowercase;
let uppercase;
let numeric;
let speciaCharacters;

const optionsArray = [];
const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const specialCharsArray = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function toInclude(msg){
    return confirm(msg);
}

function getUserInput(msg, placeHolder){
    return prompt(msg, placeHolder)
}

function generatePassword(){
    let newPassword = "";

    for(i = 0; i < length; i++){
        let charType = optionsArray[getRandomInt(0, optionsArray.length-1)];
        let letter;

        switch(charType){
            case "lowercase": letter = alphabetArray[getRandomInt(0, alphabetArray.length-1)];
            break;
            case "uppercase": letter = alphabetArray[getRandomInt(0, alphabetArray.length-1)].toUpperCase();
            break;
            case "numeric": letter = getRandomInt(0, 9);
            break;
            case "specialCharacters": letter = specialCharsArray[getRandomInt(0, specialCharsArray.length-1)];
        }
        console.log(letter);
        newPassword += letter;
    }

    return newPassword;
}

btn.addEventListener("click", function(){
    do{
        length = getUserInput("Please select how many letters the password should have", "Should be a number betwen 8 and 128 characters...");
        if(length === null)
            break;
    }while(length === "" || length < 8 || length > 128 || !isNumeric(length));

    lowercase = toInclude("Include lowercase letters?");
    uppercase = toInclude("Include uppercase letters?");
    numeric = toInclude("Include numbers?");
    speciaCharacters = toInclude("Include special characters?");

    if(lowercase)
        optionsArray.push("lowercase");
    if(uppercase)
        optionsArray.push("uppercase");
    if(numeric)
        optionsArray.push("numeric");
    if(specialCharsArray)
        optionsArray.push("specialCharacters");
    
    let pass = generatePassword();

    displayBox.textContent = pass;
    displayBox.style.color = 'var(--darkest-color)';
});





