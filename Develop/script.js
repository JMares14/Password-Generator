// Assignment Code
var generateBtn = document.querySelector("#generate");
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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
