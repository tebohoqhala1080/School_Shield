document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        sidebar.classList.toggle("mobile-open");
      } else {
        sidebar.classList.toggle("collapsed");
      }
    });
  }

  // Dismiss a notification when its check button is clicked
  document.querySelectorAll(".notif-check").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".notif-item");
      if (item) {
        item.style.opacity = "0.4";
        btn.disabled = true;
      }
    });
  });

  // Quick action buttons — placeholders until each destination page exists
  document.querySelectorAll(".quick-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Quick action:", btn.textContent.trim());
    });
  });
});