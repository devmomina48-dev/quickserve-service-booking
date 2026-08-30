const serviceSearch =
    document.getElementById("serviceSearch");

const serviceCards =
    document.querySelectorAll(".service-card");


serviceSearch.addEventListener("input", () => {

    const searchValue =
        serviceSearch.value.toLowerCase().trim();


    serviceCards.forEach(card => {

        const serviceName =
            card.querySelector("h3")
            .textContent
            .toLowerCase();


        if (serviceName.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});