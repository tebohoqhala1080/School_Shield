document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signInForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    // Replace with a real request once a backend endpoint exists, e.g.
    // fetch("/api/auth/sign-in", { method: "POST", body: JSON.stringify(data) });
    console.log("Signing in:", data.email);
    window.location.href = "dashboard.html";
  });
});