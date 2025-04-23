
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  const isPassword = passwordInput.type === "password";
  
  passwordInput.type = isPassword ? "text" : "password";

  // Optional: Change icon based on state
  toggleIcon.textContent = isPassword ? "👁️" : "👁️";
}