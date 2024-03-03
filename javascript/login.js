const login_box = document.getElementById("login-box");
const email = login_box.querySelector("#em");
const password = login_box.querySelector("#password");
const btn_submit = document.querySelector(".btn-submit");

function validateForm(e) {
  e.preventDefault();
  if (email.value === "ssdii66@gmail.com" && parseInt(password.value) === 111) {
    alert("확인되었습니다.");
    location.replace("main.html");
  } else if (password.value != 111) {
    alert("비밀번호가 틀렸습니다.");
    location.replace("login.html");
  } else if (email.value !== "ssdii66@gmail.com") {
    alert("메일이 틀렸습니다!");
    location.replace("login.html");
  }
}

function btn_able() {
  btn_submit.style.opacity = "0.5";
}
function btn_disable() {
  btn_submit.style.opacity = "1";
}

function btnActiv(e) {
  const email_value = email.value;
  const password_value = password.value;

  if (email_value.length > 0 && password_value.length > 0) {
    btn_disable();
  } else {
    btn_able();
  }
}

email.addEventListener("keyup", btnActiv);
password.addEventListener("keyup", btnActiv);

login_box.addEventListener("submit", validateForm);
