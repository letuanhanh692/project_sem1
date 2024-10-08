const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// quy

// singup
// checkName
let messagerName = document.getElementById("checkName");
let nameInput = document.getElementById("name");

function checkName() {
  if (nameInput.value.trim() === '') {
    messagerName.textContent = "Please enter information in this field!!!";
  } else {
    messagerName.textContent = '';
  }
}


//check email
let emailInput = document.getElementById("email");
let messagerEmail = document.getElementById("checkEmail");
const REGEX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function checkEmail() {
  let emailValue = emailInput.value;
  let checkEmail = validateMail(emailValue);

  if (emailInput.value.trim() === "") {
    messagerEmail.textContent = "Please enter information in this field!!!"
  } else if (!checkEmail) {
    messagerEmail.textContent = "Please enter information email in this field"
  } else if (checkEmail) {
    messagerEmail.textContent = ""
  }
  else {
    messagerEmail.textContent = "";
  }

}
function validateMail(mail) {
  return REGEX_MAIL.test(mail);
}


//check Pasword
let passwordInput = document.getElementById("password");
let messagerPass = document.getElementById("checkPass");

function checkPass() {
  if (passwordInput.value.trim() === "") {
    messagerPass.textContent = "Please enter information in this field!!!"
  } else {
    messagerPass.textContent = "";
  }
};
//check repass
let repassInput = document.getElementById("repassword");
let messagerRepass = document.getElementById("checkRepass");
function checkRepass() {
  if (repassInput.value.trim() === "") {
    messagerRepass.textContent = "Please enter information in this field!!!";
  } else {
    messagerRepass.textContent = "";
  }
}

//singIn
// emailLogin
let emailInputLogin = document.getElementById("emailLogin");
let messagerLogin = document.getElementById("checkEmailLogin");
function checkEmailLogin() {
  let emailValue = emailInputLogin.value;
  let checkEmail = validateMail(emailValue);

  if (emailInputLogin.value.trim() === "") {
    messagerLogin.textContent = "Please enter your email address!!!";
  } else if (!checkEmail) {
    messagerLogin.textContent = "Please enter a valid email address!!!";
  } else {
    messagerLogin.textContent = "";
  }
}

// zz
// Hàm kiểm tra đăng ký
function signUp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;

  // Kiểm tra điều kiện để đảm bảo người dùng đã điền đầy đủ thông tin
  if (name.trim() === "" || email.trim() === "" || password.trim() === "" || repassword.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }
  if(password === repassword){
    alert("Registration successful!");
  }else {
    alert("password does not match the password entered");
  }

  // Thực hiện các hành động đăng ký nếu thông tin hợp lệ
  // ...
  // Ở đây bạn có thể gửi yêu cầu đăng ký đến máy chủ, xác thực thông tin, vv.

}

// Hàm kiểm tra đăng nhập
function signIn() {
  let emailLogin = document.getElementById("emailLogin").value;
  let passwordLogin = document.getElementById("passwordLogin").value;

  // Kiểm tra điều kiện để đảm bảo người dùng đã điền đầy đủ thông tin
  if (emailLogin.trim() === "" || passwordLogin.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Thực hiện các hành động đăng nhập nếu thông tin hợp lệ
  // ...
  // Ở đây bạn có thể gửi yêu cầu đăng nhập đến máy chủ, xác thực thông tin, vv.
  alert("Login successful!");
}






