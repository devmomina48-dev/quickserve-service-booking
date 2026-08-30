const service = document.getElementById("service");
const date = document.getElementById("date");
const time = document.getElementById("time");

const summaryService =
    document.getElementById("summaryService");

const summaryDate =
    document.getElementById("summaryDate");

const summaryTime =
    document.getElementById("summaryTime");


// ================= SUMMARY =================

service.addEventListener("change", function () {

    summaryService.textContent =
        service.value || "Choose a service";

});


date.addEventListener("change", function () {

    summaryDate.textContent =
        date.value || "Not selected";

});


time.addEventListener("change", function () {

    summaryTime.textContent =
        time.value || "Not selected";

});


// ================= BOOKING =================

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // Unique Booking ID
        const bookingId =
            "QS-" + Date.now().toString().slice(-6);


        // Get all booking information
        const booking = {

            bookingId: bookingId,

            name:
                document.getElementById("name").value,

            email:
                document.getElementById("email").value,

            phone:
                document.getElementById("phone").value,

            service:
                service.value,

            date:
                date.value,

            time:
                time.value,

            address:
                document.getElementById("address").value,

            message:
                document.getElementById("message").value,

            status: "Pending"

        };


        // ================= SAVE BOOKING =================

        localStorage.setItem(
            "quickserveBooking",
            JSON.stringify(booking)
        );


        // ================= SUCCESS =================

        alert(
            "Your booking request has been submitted successfully!\n\n" +
            "Booking ID: " + bookingId +
            "\nStatus: Pending"
        );


        // Reset form
        this.reset();


        // Reset summary
        summaryService.textContent =
            "Choose a service";

        summaryDate.textContent =
            "Not selected";

        summaryTime.textContent =
            "Not selected";

    });