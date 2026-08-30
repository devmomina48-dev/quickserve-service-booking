const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-btn");

const providerCards = document.querySelectorAll(".provider-card");

let selectedCategory = "all";


function applyFilters() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    providerCards.forEach(card => {

        const cardText =
            card.innerText.toLowerCase();

        const category =
            card.dataset.category;


        const matchesSearch =
            cardText.includes(searchValue);


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= FILTER ================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        selectedCategory =
            button.dataset.filter;


        applyFilters();

    });

});


/* ================= SEARCH ================= */

searchInput.addEventListener("input", () => {

    applyFilters();

});