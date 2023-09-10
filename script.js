// Assignment code here
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers="0123456789";
var specials="~!@#$%^&*(){}[]:;<>/";


function generatePassword(){

  var wants_lowerCase = confirm ("CLICK OK if you want to include lowercase letters");
  var wants_upperCase = confirm ("CLICK OK if you want to include uppercase letters");
  var wants_numbers = confirm ("CLICK OK if you want to include numbers");
  var wants_specials = confirm ("CLICK OK if you want to include special characters");

 // validating -- checking for an expected selection so requirements  meet
  if(!wants_lowerCase && !wants_upperCase && !wants_numbers && !wants_specials){
    alert ("Please select at least one character type");
    return ""; //  ensures function doesnt proceed to run if input is invalid doesnt meet requirements
  }

  var passwordLength = parseInt(prompt ("Enter the desired password length (between 8 and 128 characters):"));
  // validating -- checking for an expected selection so requirements meet
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ){
    alert ("please enter a valid password length between 8 and 128 characters");
    return "";  //  ensures function doesnt proceed to run if input is invalid doesnt meet requirements
  }

  //constructing a string called selected_chars based on the users preferences for including different character types and combine them in one string
  var selected_Chars = "";
  if(wants_lowerCase){
    selected_Chars += lowerCase;
  }
  if(wants_upperCase){
    selected_Chars += upperCase;
  }
  if(wants_numbers){
    selected_Chars += numbers;
  }
  if(wants_specials){
    selected_Chars += specials;
  }
  

  // generating the actual password based on the selected character set and desired length
  var results = "";
  for(var index = 0; index < passwordLength; index++){
    var random_Index = Math.floor(Math.random() * selected_Chars.length);
    results += selected_Chars[random_Index];
  }
  return results;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
