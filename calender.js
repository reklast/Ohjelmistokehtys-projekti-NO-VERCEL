const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentMonthElement = document.getElementById("currentMonth");
const daysContainer = document.querySelector(".days");

let currentDate = new Date();

function renderCalendar() {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Vuosi ja kuukausi
    currentMonthElement.textContent = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
    }).format(currentDate);

    // poistaa edellisen kuukauden päivät
    daysContainer.innerHTML = "";

    // lisää päivät
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    for (let date = new Date(firstDay); date <= lastDay; date.setDate(date.getDate() + 1)) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = date.getDate();
        daysContainer.appendChild(dayElement);
    }
}

daysContainer.addEventListener("click", (event) => {
    const clickedDay = event.target;
    if (clickedDay.classList.contains("day")) {
        const dayNumber = clickedDay.textContent;
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);

        // Prompt the user to add a new event
        const eventName = prompt("Enter the event name:");
        if (eventName) {
            const newEvent = {
                date: selectedDate.toISOString(),
                name: eventName,
            };

            // Send the new event data to the backend
            fetch("/api/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEvent),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
                // Refresh the calendar to show the updated events
                renderCalendar();
            })
            .catch((error) => {
                console.error("Error adding event:", error);
            });
        }
    }
});
prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
