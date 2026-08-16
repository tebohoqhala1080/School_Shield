document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("visitorSearch");
  const typeFilter = document.getElementById("typeFilter");
  const statusFilter = document.getElementById("statusFilter");
  const rows = Array.from(document.querySelectorAll("#visitorTable tbody tr"));
  const visitCount = document.getElementById("visitCount");

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const type = typeFilter.value;
    const status = statusFilter.value;

    let visible = 0;

    rows.forEach((row) => {
      const matchesQuery =
        !query ||
        row.dataset.name.includes(query) ||
        row.dataset.id.includes(query) ||
        row.textContent.toLowerCase().includes(query);
      const matchesType = type === "All types" || row.dataset.type === type;
      const matchesStatus = status === "All statuses" || row.dataset.status === status;

      const show = matchesQuery && matchesType && matchesStatus;
      row.style.display = show ? "" : "none";
      if (show) visible++;
    });

    visitCount.textContent = `${visible} visit${visible === 1 ? "" : "s"}`;
  }

  searchInput.addEventListener("input", applyFilters);
  typeFilter.addEventListener("change", applyFilters);
  statusFilter.addEventListener("change", applyFilters);

  // Register visitor / Scan QR — placeholders until those flows exist
  document.querySelectorAll(".page-header-actions button").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Action:", btn.textContent.trim());
    });
  });
});