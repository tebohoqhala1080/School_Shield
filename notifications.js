document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = {
    history: document.getElementById("tab-history"),
    feed: document.getElementById("tab-feed"),
    settings: document.getElementById("tab-settings"),
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      Object.entries(panels).forEach(([key, panel]) => {
        panel.hidden = key !== btn.dataset.tab;
      });
    });
  });

  // Search + filters
  const searchInput = document.getElementById("notifSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const priorityFilter = document.getElementById("priorityFilter");
  const statusFilter = document.getElementById("statusFilter");
  const rows = Array.from(document.querySelectorAll("#notifTable tbody tr"));

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const priority = priorityFilter.value;
    const status = statusFilter.value;

    rows.forEach((row) => {
      const matchesQuery = !query || row.dataset.search.includes(query);
      const matchesCategory = category === "All categories" || row.dataset.category === category;
      const matchesPriority = priority === "All priorities" || row.dataset.priority === priority;
      const matchesStatus = status === "All statuses" || row.dataset.status === status;
      row.style.display = matchesQuery && matchesCategory && matchesPriority && matchesStatus ? "" : "none";
    });
  }

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  priorityFilter.addEventListener("change", applyFilters);
  statusFilter.addEventListener("change", applyFilters);

  // Mark all read
  function updateSummary() {
    const total = rows.length;
    const unread = rows.filter((r) => r.dataset.status === "Unread").length;
    document.getElementById("notifSummary").textContent = `${total} notifications · ${unread} unread`;
  }

  document.getElementById("markAllReadBtn").addEventListener("click", () => {
    rows.forEach((row) => {
      row.dataset.status = "Read";
      const tag = row.querySelector(".tag-unread");
      if (tag) {
        tag.textContent = "Read";
        tag.classList.remove("tag-unread");
        tag.classList.add("tag-resolved");
      }
    });
    updateSummary();
  });

  updateSummary();

  // Placeholders for actions without a destination yet
  document.querySelectorAll(".page-header-actions button:not(#markAllReadBtn)").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Action:", btn.textContent.trim());
    });
  });
});