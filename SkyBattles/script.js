document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");
  const loginForm = document.getElementById("login-form");
  const loginStatus = document.getElementById("login-status");

  // Load remembered email/password
  if (localStorage.getItem("remember") === "true") {
    emailInput.value = localStorage.getItem("email") || "";
    passwordInput.value = localStorage.getItem("password") || "";
    rememberMe.checked = true;
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      loginStatus.textContent = "Please enter both email and password.";
      return;
    }

    // Dummy login simulation (replace with actual backend call)
    if (email === "player@example.com" && password === "123456") {
      loginStatus.style.color = "green";
      loginStatus.textContent = "Login successful! Redirecting...";

      // Save if remember me
      if (rememberMe.checked) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("remember", "true");
      } else {
        localStorage.clear();
      }

      setTimeout(() => {
        window.location.href = "dashboard.html"; // Next page
      }, 1000);
    } else {
      loginStatus.style.color = "red";
      loginStatus.textContent = "Invalid credentials!";
    }
  });
});
