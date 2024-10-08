//  check 2
let emailInput = document.getElementById("email");
let messagerEmail = document.getElementById("checkEmail");  
const REGEX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function checkEmail() {
  let emailValue = emailInput.value;
  let checkEmail = validateMail(emailValue);

  if (emailInput.value.trim() === "") {
    messagerEmail.textContent = "Please enter information in this field!!!"
    return false;
  } else if (!checkEmail) {
    messagerEmail.textContent = "Please enter information email in this field"
    return false;
  } else if (checkEmail) {
    messagerEmail.textContent = ""
    return true;
  }
  else {
    messagerEmail.textContent = "";
    return true;
  }

}
function validateMail(mail) {
  return REGEX_MAIL.test(mail);
}

//
let passwordInput = document.getElementById("password");
let messagerPass = document.getElementById("checkPass");

function checkPass() {
  if (passwordInput.value.trim() === "") {
    messagerPass.textContent = "Please enter information in this field!!!"
    return false;
  } else {
    messagerPass.textContent = "";
    return true;
  }
};

//
let repassInput = document.getElementById("repassword");
let messagerRepass = document.getElementById("checkRepass");
const REGEX_PHONE= /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
function checkRepass() {
  let checkPhone = validatePhoneNumber(repassInput.value);
  if (repassInput.value.trim() === "") {
    messagerRepass.textContent = "Please enter information in this field!!!";
    return false;
  }else if(!checkPhone){
    messagerRepass.textContent = "Enter the wrong number format, please try again!!!";
  } else {
    messagerRepass.textContent = "";
    return true;
  }
}

function validatePhoneNumber(phoneNumber) {
  return REGEX_PHONE.test(phoneNumber);
}

//
let messagerName = document.getElementById("checkName");
let nameInput = document.getElementById("name");

function checkName() {
  if (nameInput.value.trim() === '') {
    messagerName.textContent = "Please enter information in this field!!!";
    return false;
  } else {
    messagerName.textContent = '';
    return true;
  }
}
//
function send() {
 if( checkName() === true && checkEmail() === true && checkPass() === true && checkRepass() === true) {
    alert('Submitted successfully');
 }else{
    alert('Please enter in full');
 }
}


