// Sample data
const patients = [
  { id: 1, name: "Austin Smith", status: "Pending", lastVisit: "2024-03-01" },
  { id: 2, name: "Abuchi Chukwudi", status: "Completed", lastVisit: "2024-02-28" },
  { id: 3, name: "Mmadabuchi Chidera", status: "Pending", lastVisit: "2024-03-05" },
  { id: 4, name: "Tobechukwu Joseph", status: "Cancelled", lastVisit: "2024-03-02" },
  { id: 5, name: "Ifechukwu Okonkwo", status: "Completed", lastVisit: "2024-02-25" },
  { id: 6, name: "Kelechi Nwachukwu", status: "Pending", lastVisit: "2024-03-03" },
  { id: 7, name: "Makuochukwu Gabriel", status: "Completed", lastVisit: "2024-02-20" },
  { id: 8, name: "Mrs White", status: "Cancelled", lastVisit: "2024-03-04" },
  { id: 9, name: "Ebube Chukwudi", status: "Pending", lastVisit: "2024-03-01" },
  { id: 10, name: "Henry Chukwuka", status: "Completed", lastVisit: "2024-02-27" }
];

// DOM Elements
const patientList = document.getElementById("patientList");
const searchInput = document.getElementById("search");
const statusFilter = document.getElementById("statusFilter");
const sortBtn = document.getElementById("sortBtn");

// STATE
let filteredPatients = [...patients];
let sortOrder = 'newest'; // newest by default

// Render patients with semantic HTML
function renderPatients(data) {
  if (data.length === 0) {
    patientList.innerHTML = "<p>No patients found.</p>";
    return;
  }

  patientList.innerHTML = data.map(p => `
    <article class="patient-card">
      <h2>${p.name}</h2>
      <p>Status: <span class="status ${p.status}" aria-label="${p.status}">${p.status}</span></p>
      <p>Last Visit: <time datetime="${p.lastVisit}">${p.lastVisit}</time></p>
    </article>
  `).join('');
}

// Apply search, filter, sort
function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const statusValue = statusFilter.value;

  filteredPatients = patients
    .filter(p => p.name.toLowerCase().includes(searchValue))
    .filter(p => statusValue === "All" || p.status === statusValue);

  if (sortOrder === "newest") {
    filteredPatients.sort((a, b) => new Date(b.lastVisit) - new Date(a.lastVisit));
  } else if (sortOrder === "oldest") {
    filteredPatients.sort((a, b) => new Date(a.lastVisit) - new Date(b.lastVisit));
  }

  renderPatients(filteredPatients);
}

// Toggle sort order
sortBtn.addEventListener("click", () => {
  if (sortOrder === "newest") {
    sortOrder = "oldest";
    sortBtn.textContent = "Sort: Oldest First";
  } else {
    sortOrder = "newest";
    sortBtn.textContent = "Sort: Newest First";
  }
  applyFilters();
});

// Event listeners
searchInput.addEventListener("input", applyFilters);
statusFilter.addEventListener("change", applyFilters);

// Initial render
applyFilters();