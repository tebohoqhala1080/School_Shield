document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
      confirmPassword.reportValidity();
      return;
    }
    confirmPassword.setCustomValidity("");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    delete data.password;
    delete data.confirmPassword;

    // Replace with a real request once a backend endpoint exists, e.g.
    // fetch("/api/schools/register", { method: "POST", body: JSON.stringify(data) });
    console.log("Registering school:", data);
  });

  confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
  });
});