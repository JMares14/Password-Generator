// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTxt = document.getElementById("password")
var includeSymbols = document.getElementById("symbols");
var passwordLength = document.getElementById("length");
var includeNumbers = document.getElementById("numbers");
var incldeUppercase = document.getElementById("uppercase");

var letters = "abcdefghijklmnopqrstuvwxyz";
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var symbols = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var characters = letters;
  includeNumbers.checked ? (characters += numbers) : "";
  includeSymbols.checked ? (characters += symbols) : "";
  incldeUppercase.checked ? (characters += uppCase) : "";
  passwordTxt.value = generatePassword(passwordLength.value, characters);
};


function generatePassword(length, characters) {
  var password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var characters = letters;
  includeNumbers.checked ? (characters += numbers) : "";
  includeSymbols.checked ? (characters += symbols) : "";
  incldeUppercase.checked ? (characters += uppCase) : "";
  passwordTxt.value = generatePassword(passwordLength.value, characters);
};

