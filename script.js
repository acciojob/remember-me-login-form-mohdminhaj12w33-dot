//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("login-form");
const existingBtn = document.getElementById("existing");

// 🔹 Check if credentials already exist
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existingBtn.style.display = "inline-block";
}

// 🔹 Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "inline-block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  // Clear inputs after submit (safe for Cypress)
  usernameInput.value = "";
  passwordInput.value = "";
  checkbox.checked = false;
});

// 🔹 Login as existing user
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
