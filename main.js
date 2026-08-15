document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.getElementById("signInBtn");
  const registerBtn = document.getElementById("registerBtn");

  if (signInBtn) {
    signInBtn.addEventListener("click", () => {
      window.location.href = "sign.html";
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      window.location.href = "register.html";
    });
  }
});
