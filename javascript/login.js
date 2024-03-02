function validateForm(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  if (email === "ssdii66@gmail.com" && password === 111) {
    alert("확인되었습니다.");
    window.location.href = "main.html";
  }
}

const form = document.getElementById("login-box");

form.addEventListener("submit", validateForm);
