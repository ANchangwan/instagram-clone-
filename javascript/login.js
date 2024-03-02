const login_box = document.getElementById("login-box");
const email = login_box.querySelector("#em");
const password = login_box.querySelector("#password");

function validateForm(e) {
  e.preventDefault();
  console.log(email.value === "ssdii66@gmail.com");

  if (email.value === "ssdii66@gmail.com" && password.value === "111") {
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

const form = document.getElementById("login-box");

form.addEventListener("submit", validateForm);
