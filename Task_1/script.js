const body = document.querySelector("body");
const modeToggle = document.querySelector(".mode-toggle");
const sideBar = document.querySelector("nav");
const sideBarToggle = document.querySelector(".sidebar-toggle");
const searchInput = document.querySelector("#searchInput");

// --- INITIAL LOAD: DARK MODE CHECK ---
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
}

// --- DARK MODE TOGGLE ---
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

// --- SIDEBAR TOGGLE ---
sideBarToggle.addEventListener("click", () => {
    sideBar.classList.toggle("close");
});

// --- DYNAMIC SEARCH FILTER ---
searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    
    // Select the name entries (first column)
    const nameList = document.querySelectorAll("#nameColumn .data-list");
    const allColumns = document.querySelectorAll(".activity-data .data");

    nameList.forEach((name, index) => {
        const textValue = name.textContent || name.innerText;
        
        // If the name matches the search input
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            // Show this row across all columns
            allColumns.forEach(column => {
                const rowItem = column.querySelectorAll(".data-list")[index];
                if (rowItem) rowItem.style.display = "block";
            });
        } else {
            // Hide this row across all columns
            allColumns.forEach(column => {
                const rowItem = column.querySelectorAll(".data-list")[index];
                if (rowItem) rowItem.style.display = "none";
            });
        }
    });
});