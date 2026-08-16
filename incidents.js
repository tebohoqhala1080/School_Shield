document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("incidentSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const statusFilter = document.getElementById("statusFilter");
  const priorityFilter = document.getElementById("priorityFilter");
  const sortFilter = document.getElementById("sortFilter");
  const tbody = document.querySelector("#incidentTable tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  const incidentCount = document.getElementById("incidentCount");

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const status = statusFilter.value;
    const priority = priorityFilter.value;

    let visible = 0;

    rows.forEach((row) => {
      const matchesQuery = !query || row.dataset.search.includes(query);
      const matchesCategory = category === "All categories" || row.dataset.category === category;
      const matchesStatus = status === "All statuses" || row.dataset.status === status;
      const matchesPriority = priority === "All priority" || row.dataset.priority === priority;

      const show = matchesQuery && matchesCategory && matchesStatus && matchesPriority;
      row.style.display = show ? "" : "none";
      if (show) visible++;
    });

    incidentCount.textContent = `${visible} incident${visible === 1 ? "" : "s"}`;
  }

  function applySort() {
    const sorted = [...rows].sort((a, b) => {
      const aId = a.querySelector("td").textContent.trim();
      const bId = b.querySelector("td").textContent.trim();
      return sortFilter.value === "Newest first" ? bId.localeCompare(aId) : aId.localeCompare(bId);
    });
    sorted.forEach((row) => tbody.appendChild(row));
  }

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  statusFilter.addEventListener("change", applyFilters);
  priorityFilter.addEventListener("change", applyFilters);
  sortFilter.addEventListener("change", applySort);

  // Placeholders until real detail pages / export logic exist
  document.querySelectorAll(".btn-view").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr");
      console.log("View incident:", row.querySelector("td").textContent.trim());
    });
  });

  document.querySelectorAll(".export-actions button").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Export:", btn.textContent.trim());
    });
  });

  const newIncidentBtn = document.querySelector(".page-header-actions .btn-primary");
  if (newIncidentBtn) {
    newIncidentBtn.addEventListener("click", () => {
      console.log("New incident clicked");
    });
  }

  const openIncidentBtn = document.querySelector(".btn-open-incident");
  if (openIncidentBtn) {
    openIncidentBtn.addEventListener("click", () => {
      console.log("Open incident: INC-2026-0002");
    });
  }
});