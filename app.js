console.log("JS loaded successfully!");

// =========================
// GET ELEMENTS
// =========================
const searchInput = document.getElementById("searchInput");
const projectCards = document.querySelectorAll(".project-card");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

const dotsContainer = document.querySelector(".dots");

// =========================
// SETTINGS
// =========================
const cardsPerPage = 9;
let currentPage = 1;

// =========================
// GET SEARCH RESULTS
// =========================
function getSearchResults() {

    let query = searchInput.value.toLowerCase().trim();

    return Array.from(projectCards).filter(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();
        let desc = card.querySelector("p").innerText.toLowerCase();

        return title.includes(query) || desc.includes(query);
    });
}

// =========================
// SHOW PAGE
// =========================
function showPage() {

    let filtered = getSearchResults();

    let totalPages = Math.ceil(filtered.length / cardsPerPage) || 1;

    if (currentPage > totalPages) currentPage = totalPages;

    let start = (currentPage - 1) * cardsPerPage;
    let end = start + cardsPerPage;

    // hide all cards first
    projectCards.forEach(card => card.style.display = "none");

    // show only current page cards
    filtered.slice(start, end).forEach(card => {
        card.style.display = "block";
    });

    // page text
    pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;

    // buttons control
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // update dots
    createDots(totalPages);
}

// =========================
// CREATE DOTS
// =========================
function createDots(totalPages) {

    dotsContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {

        let dot = document.createElement("span");
        dot.classList.add("dot");

        if (i === currentPage) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentPage = i;
            showPage();
        });

        dotsContainer.appendChild(dot);
    }
}

// =========================
// SEARCH EVENT
// =========================
searchInput.addEventListener("input", () => {
    currentPage = 1;
    showPage();
});

// =========================
// PREV BUTTON
// =========================
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showPage();
    }
});

// =========================
// NEXT BUTTON
// =========================
nextBtn.addEventListener("click", () => {
    currentPage++;
    showPage();
});

// =========================
// INIT
// =========================
showPage();