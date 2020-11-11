// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
var uppercaseCharacters = confirm("Would you like uppercase characters?")
var lowercaseCharacters = confirm("Would you like lowercase characters?")
var numbers = confirm("Would you like numbers?")
var specialCharacters = confirm("Would you like special characters?")

if (uppercaseCharacters === false && lowercaseCharacters === false && numbers == false && specialCharacters == false)
{
alert("Please select at least one type of character")
return"Try again"
}

var lengthPassword = prompt("How many characters would you like (8 - 128)?")
var lengthPasswordNumber = parseInt(lengthPassword)

  if (lengthPasswordNumber < 8 || lengthPasswordNumber > 128) {
    alert("Please select between 8 - 128 characters")
    return"Try again"
  }
  
  var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz"
  var numbersOptions = "12345678910"
  var specialOptions = "*&$£@"

  var passwordtoReturn = ""
  var passwordCharacterOptions = ""
  
  if (uppercaseCharacters === true) {
    var randomUpperCharacter = uppercaseOptions[Math.floor(Math.random() * 26)]; 
    passwordtoReturn += randomUpperCharacter
    passwordCharacterOptions += uppercaseOptions;
  }

  if (lowercaseCharacters === true) {
    var randomLowerCharacter = lowercaseOptions[Math.floor(Math.random() * 26)]; 
    passwordtoReturn += randomLowerCharacter
    passwordCharacterOptions += lowercaseOptions
  }

  while (passwordtoReturn.length < lengthPasswordNumber){
    var randomCharacter = passwordCharacterOptions[Math.floor(Math.random() * passwordCharacterOptions.length)]; 
    passwordtoReturn += randomCharacter
  }



  return passwordtoReturn

  }
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
