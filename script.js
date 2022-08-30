// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for password selection
var numberChar = ['0','1','2','3','4','5','6','7','8','9']; 
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '@', '#', '$', '%', '=', '&', '*', '+']
var finalPassword = "";

//Prompt for user data input
function generatePassword() {
  var passwordLength = prompt("How long do you want your password? \n Must be at least 8 - 128 characters.");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
      alert("Please enter a number between 8 and 128.");
    } else {
      var userLowercase = confirm("Do you want lower case characters?");
      if(userLowercase) {
        finalPassword += lowercaseChar
      };
      let userUppercase = confirm("Do you want to use upper case characters?");
      if (userUppercase){
        finalPassword += uppercaseChar
      };
      let userSpecial = confirm("Do you want to use specialCharacters?");
      if (userSpecial){
        finalPassword += specialChar
      };
      let userNumbers = confirm("Do you want to use numbers?");
      if (userNumbers){
        finalPassword += numberChar
      };


     //Make sure at least one criteria was meant
      if (
        userLowercase === false &&
        useruppercase === false &&
        userSpecial === false &&
        userNumbers === false
      ) {
        alert("Please select at least one character type.");
        generatePassword();
      }
    }

    // Declared variable to generate a randoom selcection for password
    let pwd = "";
    for (let i=0; i<passwordLength; i++){
      pwd += finalPassword.charAt(Math.floor(Math.random() * finalPassword.length))
    }
    return pwd
  }
  




//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
