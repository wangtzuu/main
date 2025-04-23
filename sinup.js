function toggleVisibility(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  }
  
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
  
    if (password !== confirm) {
      alert("Passwords do not match!");
    } else {
      alert("Registration successful!");
      // Here you can handle form submission to a backend
    }
  });