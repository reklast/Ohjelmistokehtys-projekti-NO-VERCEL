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

// ... Existing code ...

// Show the custom modal when a day is clicked
daysContainer.addEventListener("click", (event) => {
    const clickedDay = event.target;
    if (clickedDay.classList.contains("day")) {
        const dayNumber = clickedDay.textContent;
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
        
        const eventModal = document.getElementById("eventModal");
        eventModal.style.display = "block";

        const saveEventButton = document.getElementById("saveEvent");
        saveEventButton.addEventListener("click", () => {
            const eventName = document.getElementById("eventName").value;
            if (eventName) {
                const newEvent = {
                    date: selectedDate.toISOString(),
                    name: eventName,
                };

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
                    renderCalendar();
                })
                .catch((error) => {
                    console.error("Error adding event:", error);
                });

                eventModal.style.display = "none";
            }
        });

        const closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", () => {
            eventModal.style.display = "none";
        });
    }
});

